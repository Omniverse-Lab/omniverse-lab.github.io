source "https://rubygems.org"

# Match GitHub Pages' dependency set to avoid "works locally,
# breaks on Pages" surprises. Update this version periodically:
# https://pages.github.com/versions/
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows and JRuby do not include zoneinfo
gem "tzinfo", ">= 1", "< 3"
gem "tzinfo-data", platforms: [:mingw, :x64_mingw, :mswin, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rc gem to v0.6.x on JRuby builds since newer
# versions of the gem do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
