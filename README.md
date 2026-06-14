# Yinghua Yao Academic Homepage

This repository hosts the source code for Yinghua Yao's academic homepage.

Live site:

```text
https://evaflower.github.io/yinghua-yao/
```

The website is built with Jekyll and deployed to GitHub Pages through GitHub Actions.

## Content

- `index.html`: homepage layout
- `publications.html`: full publications page
- `_data/profile.yml`: profile, contact links, education, and experience
- `_data/projects.yml`: research projects
- `_data/awards.yml`: awards
- `_data/services.yml`: academic services
- `_data/invited_talks.yml`: invited talks
- `_data/people.yml`: students and collaborators
- `_news/`: news items
- `_publications/`: publication records
- `assets/images/`: portraits, badges, and publication covers

## Local Preview

Install dependencies:

```bash
bundle install --path vendor/bundle
```

Build the site:

```bash
bundle exec jekyll build
```

Run a local preview server:

```bash
bundle exec jekyll serve
```

Then open the local URL printed by Jekyll.

## Deployment

The site is deployed by `.github/workflows/pages.yml`.

After editing content, commit and push to `main`:

```bash
git add .
git commit -m "Update homepage"
git push origin main
```

GitHub Actions will build the Jekyll site and publish it to GitHub Pages.

## Notes

The site is served from the project path `/yinghua-yao`, so `_config.yml` uses:

```yaml
baseurl: "/yinghua-yao"
```

If the repository name or Pages URL changes, update `baseurl` accordingly.

This site is adapted from the `luost26/academic-homepage` Jekyll template.
