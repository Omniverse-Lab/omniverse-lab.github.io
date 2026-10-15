// Enhancements for the privacy, terms and support pages (_layouts/doc.html).
// Everything here is optional: without JavaScript the pages render in full,
// with a working "On this page" list. No storage, no network requests.
(function () {
  'use strict';

  var doc = document.querySelector('.doc');
  if (!doc) return;
  var body = doc.querySelector('.doc-body');
  var COPIED_MS = 1600;
  var ACTIVE_OFFSET_PX = 120;

  var status = createStatusRegion(doc);
  addHeadingLinks(body);
  var refreshToc = trackActiveSection(doc);
  closeInlineTocOnJump(doc);
  enablePrint(doc);
  if (doc.hasAttribute('data-faq')) enableFaqSearch(doc, body);

  // One polite live region for short confirmations such as "Link copied".
  function createStatusRegion(root) {
    var region = document.createElement('p');
    region.className = 'sr-only';
    region.setAttribute('role', 'status');
    root.appendChild(region);
    return region;
  }

  // Each section heading becomes a link to itself (the heading's name stays
  // its own text). Following it also copies the section's address, so a
  // clause or an answer can be shared directly.
  function addHeadingLinks(root) {
    var headings = root.querySelectorAll('h2[id], h3[id]');
    Array.prototype.forEach.call(headings, function (heading) {
      if (heading.querySelector('a')) return;
      var link = document.createElement('a');
      link.className = 'heading-link';
      link.href = '#' + heading.id;
      while (heading.firstChild) link.appendChild(heading.firstChild);
      heading.appendChild(link);
      link.addEventListener('click', function () {
        copyText(location.origin + location.pathname + '#' + heading.id, function () {
          link.setAttribute('data-copied', '');
          status.textContent = 'Link to this section copied';
          setTimeout(function () {
            link.removeAttribute('data-copied');
            status.textContent = '';
          }, COPIED_MS);
        });
      });
    });
  }

  function copyText(text, onDone) {
    if (!navigator.clipboard || !window.isSecureContext) return;
    navigator.clipboard.writeText(text).then(onDone, function () {});
  }

  // Marks the section in view in the "On this page" rail and slides the
  // marker to it. The marker only moves when the reader scrolls.
  // Returns a function that re-evaluates after the page's layout changes.
  function trackActiveSection(root) {
    var rail = root.querySelector('.doc-rail .toc');
    if (!rail) return function () {};
    var marker = rail.querySelector('.toc-marker');
    var railLinks = toArray(rail.querySelectorAll('a[href^="#"]'));
    var allLinks = toArray(root.querySelectorAll('.toc-list a[href^="#"]'));
    var targets = railLinks.map(function (link) {
      return document.getElementById(decodeURIComponent(link.hash.slice(1)));
    });
    var current = null;
    var queued = false;

    function isShown(target) {
      return target && target.offsetParent !== null;
    }

    function activeIndex() {
      var index = -1;
      targets.forEach(function (target, i) {
        if (isShown(target) && target.getBoundingClientRect().top <= ACTIVE_OFFSET_PX) index = i;
      });
      var atBottom = window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && index >= 0) {
        for (var last = targets.length - 1; last >= 0; last -= 1) {
          if (isShown(targets[last])) return last;
        }
      }
      return index;
    }

    function update() {
      queued = false;
      var index = activeIndex();
      var id = index >= 0 ? targets[index].id : null;
      if (id === current) return;
      current = id;
      allLinks.forEach(function (link) {
        if (id && link.hash === '#' + id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      if (!marker) return;
      if (index < 0) {
        marker.style.opacity = '0';
        return;
      }
      var link = railLinks[index];
      marker.style.opacity = '1';
      marker.style.height = link.offsetHeight + 'px';
      marker.style.transform = 'translateY(' + link.offsetTop + 'px)';
    }

    function queue() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(update);
    }

    function refresh() {
      current = null;
      queue();
    }

    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', refresh, { passive: true });
    update();
    return refresh;
  }

  function closeInlineTocOnJump(root) {
    var details = root.querySelector('.toc-inline');
    if (!details) return;
    details.addEventListener('click', function (event) {
      if (event.target.closest('a')) details.open = false;
    });
  }

  function enablePrint(root) {
    var button = root.querySelector('[data-print]');
    if (!button || typeof window.print !== 'function') return;
    button.hidden = false;
    button.addEventListener('click', function () { window.print(); });
  }

  // Support pages: filter the questions under "Frequently asked questions"
  // as the reader types, and mark the words that matched.
  function enableFaqSearch(root, content) {
    var box = root.querySelector('[data-faq-search]');
    var faqHeading = content.querySelector('h2#frequently-asked-questions');
    if (!box || !faqHeading) return;

    var sections = wrapSections(content);
    var faqSection = faqHeading.parentNode;
    var items = wrapQuestions(faqSection);
    if (!items.length) return;

    var input = box.querySelector('input');
    var count = box.querySelector('[data-faq-count]');
    var empty = buildEmptyState(root);
    faqSection.appendChild(empty.element);
    box.hidden = false;

    input.addEventListener('input', apply);
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && input.value) {
        event.preventDefault();
        clear();
      }
    });
    empty.reset.addEventListener('click', function () {
      clear();
      input.focus();
    });
    // A jump to another section first brings the hidden sections back.
    root.addEventListener('click', function (event) {
      if (input.value && event.target.closest('.toc-list a')) clear();
    });

    function clear() {
      input.value = '';
      apply();
    }

    function apply() {
      var query = input.value.trim();
      var words = fold(query).split(/\s+/).filter(Boolean);
      var filtering = words.length > 0;
      var shown = 0;
      items.forEach(function (item) {
        var match = words.every(function (word) { return item.text.indexOf(word) > -1; });
        item.element.hidden = filtering && !match;
        markWords(item.label, item.labelText, match ? words : []);
        if (!item.element.hidden) shown += 1;
      });
      sections.forEach(function (section) {
        if (section !== faqSection) section.hidden = filtering;
      });
      if (!filtering) count.textContent = '';
      else if (shown === 0) count.textContent = 'No questions match “' + query + '”';
      else count.textContent = shown + ' of ' + items.length + (items.length === 1 ? ' question' : ' questions');
      empty.query.textContent = query;
      empty.element.hidden = !(filtering && shown === 0);
      refreshToc();
    }
  }

  // Lower case, with curly quotes folded to straight ones: kramdown curls
  // every apostrophe, but people type straight ones. Each replacement keeps
  // the string length, so match positions still line up with the original.
  function fold(text) {
    return text.toLowerCase()
      .replace(/[‘’ʼ]/g, '\'')
      .replace(/[“”]/g, '"');
  }

  // Groups each <h2> and what follows it into a <section>, so a whole
  // section can be hidden while searching.
  function wrapSections(content) {
    return groupUnder(content, 'H2', 'doc-section');
  }

  function wrapQuestions(section) {
    return groupUnder(section, 'H3', 'faq-item').map(function (element) {
      var heading = element.firstElementChild;
      var label = heading.querySelector('.heading-link') || heading;
      return {
        element: element,
        label: label,
        labelText: label.childElementCount === 0 ? label.textContent : null,
        text: fold(label.textContent + ' ' + textAfter(element, heading))
      };
    });
  }

  function groupUnder(parent, tagName, className) {
    var groups = [];
    var group = null;
    toArray(parent.childNodes).forEach(function (node) {
      if (node.nodeType === 1 && node.tagName === 'H2' && tagName === 'H3') {
        group = null;
        return;
      }
      if (node.nodeType === 1 && node.tagName === tagName) {
        group = document.createElement(tagName === 'H2' ? 'section' : 'div');
        group.className = className;
        parent.insertBefore(group, node);
        groups.push(group);
      }
      if (group) group.appendChild(node);
    });
    return groups;
  }

  function textAfter(element, heading) {
    var text = '';
    toArray(element.children).forEach(function (child) {
      if (child !== heading) text += ' ' + child.textContent;
    });
    return text;
  }

  // Rebuilds a plain-text label with <mark> around the matched words.
  function markWords(label, plainText, words) {
    if (plainText === null) return;
    while (label.firstChild) label.removeChild(label.firstChild);
    var folded = fold(plainText);
    var hits = new Array(plainText.length);
    words.forEach(function (word) {
      var at = folded.indexOf(word);
      while (at > -1) {
        for (var k = at; k < at + word.length; k += 1) hits[k] = true;
        at = folded.indexOf(word, at + 1);
      }
    });
    var run = '';
    var runIsHit = false;
    for (var i = 0; i <= plainText.length; i += 1) {
      var hit = i < plainText.length && hits[i] === true;
      if (i === plainText.length || (run && hit !== runIsHit)) {
        if (run) label.appendChild(runIsHit ? markNode(run) : document.createTextNode(run));
        run = '';
      }
      if (i < plainText.length) {
        run += plainText.charAt(i);
        runIsHit = hit;
      }
    }
  }

  function markNode(text) {
    var mark = document.createElement('mark');
    mark.textContent = text;
    return mark;
  }

  // Shown when nothing matches. The count above it is the live region, so
  // this block is not announced again on every keystroke.
  function buildEmptyState(root) {
    var element = document.createElement('div');
    element.className = 'faq-empty';
    element.hidden = true;

    var line = document.createElement('p');
    var query = document.createElement('strong');
    line.appendChild(document.createTextNode('No answer mentions “'));
    line.appendChild(query);
    line.appendChild(document.createTextNode('”.'));
    element.appendChild(line);

    var mail = root.querySelector('.rail-actions a[href^="mailto:"]') ||
      root.querySelector('.doc-body a[href^="mailto:"]');
    if (mail) {
      var ask = document.createElement('p');
      var link = document.createElement('a');
      link.href = mail.getAttribute('href');
      link.textContent = mail.getAttribute('href').replace(/^mailto:/, '');
      ask.appendChild(document.createTextNode('Email '));
      ask.appendChild(link);
      ask.appendChild(document.createTextNode(' and we will answer it.'));
      element.appendChild(ask);
    }

    var reset = document.createElement('button');
    reset.type = 'button';
    reset.textContent = 'Show every question';
    element.appendChild(reset);
    return { element: element, query: query, reset: reset };
  }

  function toArray(list) {
    return Array.prototype.slice.call(list);
  }
})();
