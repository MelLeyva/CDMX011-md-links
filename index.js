#!/usr/bin/env node

const cli = require("./CLI.js")
const mdLinks = require("./md-links.js")
const route = process.argv[2];
cli.cli()

mdLinks.mdLinks(route, process.argv[3], process.argv[4])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("All your files have been checked!"));