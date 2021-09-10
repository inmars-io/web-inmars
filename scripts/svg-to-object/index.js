#!/usr/bin/env node

const path = require('path');
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const glob = require('glob');
const fs = require('fs');
const util = require('util');
const { convertSVG } = require('./svg-to-object');

const options = [
  {
    name: 'source',
    alias: 's',
    type: String,
    description: 'SVG files to convert it.',
    defaultOption: true,
  },
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    description: 'Print this message.',
  },
];

const { source, help } = commandLineArgs(options);
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const delimiter = /<%\s*content\s*%>/;
const delimiterIcon = /<%\s*contentIcon\s*%>/;

function printUsage() {
  const sections = [
    {
      header: 'svg-convert',
      content: 'Render less into css tagged template literal',
    },
    {
      header: 'Options',
      optionList: options,
    },
  ];
  console.log(commandLineUsage(sections));
}

if (help) {
  printUsage();
  process.exit(0);
}

if (!source) {
  console.error('Must provide a source!');
  printUsage();
  process.exit(-1);
}

const templateFile = path.join(__dirname, './template.tmpl');
const templateIconFile = path.join(__dirname, './templateIcon.tmpl');

glob(source, async (err, files) => {
  const template = await readFile(templateFile, 'utf-8');
  const templateIcon = await readFile(templateIconFile, 'utf-8');
  const iconTypes = ['brands', 'solid', 'regular'];
  iconTypes.forEach(async type => {
    let iconSet = {};

    const itemFiltered = files.filter(
      file => !path.basename(file).startsWith('_')
    );
    await itemFiltered.map(async file => {
      if (file.includes(type)) {
        const pathD = await convertSVG(file);
        const name = file
          .replace('.svg', '')
          .replace(`assets/svg/${type}/`, '');
        iconSet[name] = pathD;
        const newContent = templateIcon.replace(
          delimiter,
          JSON.stringify(pathD)
        );
        const newContent2 = newContent.replace(
          delimiterIcon,
          `${type}['${name}']`
        );
        writeFile(
          `packages/utilities/mars-awesome-${type}/src/icons/${name}.ts`,
          newContent2,
          'utf-8'
        );
      }
    })[0];
    setTimeout(() => {
      const newContent = template.replace(delimiter, JSON.stringify(iconSet));
      writeFile(
        `packages/utilities/mars-awesome-${type}/src/icons/all.ts`,
        newContent,
        'utf-8'
      );
      return writeFile(
        `packages/utilities/mars-awesome/src/icons/${type}-icons.ts`,
        newContent,
        'utf-8'
      );
    }, 2000);
  });
});
