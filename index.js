const json2csv = require('json2csv').parse;
const xml2js = require('xml-js');

function convertToCsv(json) {
    const csv = json2csv(json);
    return csv;
}

function convertToXml(json) {
    const options = { compact: true, ignoreComment: true, spaces: 4 };
    const xml = xml2js.js2xml(json, options);
    return xml;
}

module.exports = { convertToCsv, convertToXml };
