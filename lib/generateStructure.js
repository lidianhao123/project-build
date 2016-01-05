var Promise = require("bluebird"),
    path = require('path'),
    fs = Promise.promisifyAll(require('fs-extra'));

var root = path.join(__dirname, '../structure');

function generateStructure(project, templateName){
    console.info("project = ",project)
    console.info("templateName = ",templateName)
  return fs.copyAsync(path.join(root, templateName), project)
    .then(function(err){
      return err ?  console.error(err) : console.log('generate project success');
    })
}

module.exports = generateStructure;
