const getRoute = require("./Lib/type-route.js");
const mdFiles = require("./Lib/md-files.js");
const showLinks = require("./Lib/links.js");
const http = require("./Lib/validate-links.js");
const stats = require("./Lib/stats.js");

async function mdLinks(route, firstOption, secondOption) {
  const routes = getRoute.typeRoute(route);
  const filesTypeMd = mdFiles.getFiles(routes);
  const links = showLinks.getLinks(filesTypeMd);
  //console.log(links)

  const validation = await http.validate(links).then((resolve) => {
    return resolve;
  });
  const stadistic = await stats.stats(validation).then((resolve) => {
    return resolve;
  });
  const validStats = await Promise.all([
    http.validate(links).then((resolve) => {
      return resolve;
    }),
    stats.stats(validation).then((resolve) => {
      return resolve;
    }),
  ]);

  if (firstOption === undefined && secondOption === undefined) {
    const links = showLinks.getLinks(filesTypeMd);
    return links;
  } else if (firstOption === "--validate" && secondOption === undefined) {
    return validation;
  } else if (firstOption === "--stats" && secondOption === undefined) {
    return stadistic;
  } else if (firstOption === "--validate" || firstOption === "--stats" && secondOption === "--validate" || secondOption === "--stats"){
      return validStats
  }

  //return validStats;
}

  module.exports.mdLinks = mdLinks