#!/usr/bin/env node

var program = require('commander'),
    gs = require('../lib/generateStructure');

program
  .version(require('../package.json').version)
  .usage('[options] [project name]')
  .option('-T, --template <str>', 'generate project with specify template (pc/h5/self) and other DIY template folder name ')
  .parse(process.argv);

var pname = program.args[0]
console.info("project name = ",pname," template name = ", program.template);

if (!pname || !program.template){
    program.help();
}
else{
    Promise.all([gs(pname, program.template)])
        .then(function(){
            return wf(pname,outs)
        })
}
