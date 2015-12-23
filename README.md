# stareact
A simple app for helping people star a set of GitHub projects

We wanted an easy way to help our members star/bookmark
our GitHub projects. We also wanted to avoid having to
host this project somewhere. The result is a React app
that runs entirely on the client and can be served up via
GitHub pages.

Repos are specified either in `repos.json` or in the
URL like so: [example link] (the latter taking precedence
if present)

Then, send out a link to the site (either bare or
with the repo strings in the URL). Users
can go to the app, login to their GitHub account,
and click a button to star a set of GitHub repos all at once.

A running demo with Hack4Impact repos specified can be found
here:  [github-pages url]

To build:

1. Install project dependencies: `npm install` and `bower install`

2. Install the Gulp CLI: `npm install --global gulp`

3. For a one-off build, `gulp build` or to watch
the directory and rebuild on changes: `gulp watch`

4. Open `index.html` to see the running app