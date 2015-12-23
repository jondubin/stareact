# stareact
A simple app for helping people star a set of GitHub projects

We wanted an easy way to help our members star/bookmark
our GitHub projects. We also wanted to avoid having to
host the project somewhere. The result is a React app
that runs entirely on the client and can be served up via
GitHub pages.

A user can go the app, login to their GitHub account,
and click a button to star a set of GitHub repos all at once.

The running app can be found at: [github-pages url]

To use, either specify the username/repo strings in repos.json
or send a link like so: [example link]

To build:

1. Install project dependencies: `npm install`

2. Install the Gulp cli: npm install --global gulp

3. For a one-off build, `gulp build` or to watch
the directory and rebuild on changes: `gulp watch`

4. Open `index.html` to see the running app