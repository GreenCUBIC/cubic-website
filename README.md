# cuBIC webpage

This repository holds the source code and assets for the cuBIC webpage. It
is built with [Gatsby](https://www.gatsbyjs.com/) which is a React-based
static site generator.

I built the website so that content can easily be added/modified in the
static folder without having to actually modify the source code in `src`.
The YAML files in `static` can be modified (by adding/modifying/removing entries, while
preserving structure). Other changes may require modifying the source code.

## Running locally

To build the webpage locally, you will need to have Node.js and Gatsby installed
on your machine. Instructions to install these should be easy to find for your
machine (Windows/macOS/Linux).

Once this is done, install the dependencies

```
npm install
```

To view the webpage locally, you can run in dev mode with the command (running
from project root)

```
gatsby develop
```

and browsing `http://localhost:8000`.

## Modifying the code/deploy

The website runs on Netlify, so changes will be immediate (excluding build time)
once pushed to the `master` branch.
