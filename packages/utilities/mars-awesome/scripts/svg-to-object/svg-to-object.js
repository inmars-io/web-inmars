const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const delimiter = /<%\s*content\s*%>/;

async function extractPath(svgFile) {
  const regexPath = /\bd=(['"])(.*?)\1/;
  const regexViewBox = /\bviewBox=(['"])(.*?)\1/;
  const path = svgFile.match(regexPath)[2];
  const viewBox = svgFile.match(regexViewBox)[2];
  return {
    path,
    viewBox,
  };
}

const templateFile = path.join(__dirname, './template.tmpl');

async function convertSVG(sourceFile) {
  const template = await readFile(templateFile, 'utf-8');
  const file = await readFile(sourceFile, 'utf-8');
  const match = delimiter.exec(template);
  if (!match) {
    throw new Error(
      `Template file ${templateFile} did not contain template delimiters`
    );
  }
  //console.log(`Processing ${sourceFile}`);
  return extractPath(file);
}

exports.convertSVG = convertSVG;
