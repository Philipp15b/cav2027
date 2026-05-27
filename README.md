# CAV 2027 website

This repository contains the Jekyll site for CAV 2027. It keeps the Jekyll/Beautiful Jekyll hosting structure, with local conference styling consolidated in `assets/css/site.css`.

Runtime assets are served locally. Bootstrap, Font Awesome, and generated font-face CSS live under `assets/css/vendor/`; Bootstrap JavaScript lives under `assets/js/vendor/`; font files live under `assets/fonts/`.

## Local setup

Use Ruby 3.3 or newer. On macOS, make sure a current Ruby from Homebrew, asdf, rbenv, or a similar tool appears before `/usr/bin` on `PATH`; the system Ruby is too old for this setup.

Install Ruby dependencies:

```sh
bundle install
```

Build the site, including future-dated content:

```sh
bundle exec jekyll build --future
```

Serve locally:

```sh
bundle exec jekyll serve --future
```

The local server is usually available at `http://127.0.0.1:4000/`.

## Content

Conference metadata lives in `_data/conference.yml`.

Organizer roles and chair links live in `_data/organizers.yml`; the organization page renders directly from that data.

Public conference pages live under `pages/` and use explicit permalinks so URLs such as `/cfp/`, `/organization/`, `/legal-notice/`, and `/sponsors/` remain stable.

## Image credits

`assets/img/kit-royal-tropical-institute.jpg` is a public-domain venue photo by Kmhofmann, sourced from Wikimedia Commons: <https://commons.wikimedia.org/wiki/File:Tropenmuseum_front.jpg>.

## Deployment

The GitHub Actions workflow installs the Gemfile dependencies with Bundler and builds the GitHub Pages artifact with:

```sh
bundle exec jekyll build --future --config _config.yml,_config_ci.yml
```

On pushes to `master`, the generated `_site/` directory is uploaded and deployed to GitHub Pages.
