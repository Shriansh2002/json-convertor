# JSON to CSV and XML Converter

This is a Node.js package that allows you to convert JSON data to CSV and XML formats. It is easy to use and can be integrated into your Node.js projects with just a few lines of code.

## Installation

You can install this package using the npm package manager. Open a terminal window and run the following command:

```bash
npm install json-convertor
```

## Usage

To use this package in your Node.js project, first require it at the top of your file:

```javascript
const Converter = require('json-convertor');
```

## Converting JSON to CSV

To convert JSON data to CSV format, call the convertToCsv function, passing in the JSON data as a parameter:

```javascript
const jsonData = [
	{ name: 'John', age: 30 },
	{ name: 'Jane', age: 25 },
	{ name: 'Bob', age: 40 },
];
const csvData = convertToCsv(jsonData);
console.log(csvData);
```

This will output the following CSV data:

```excel
"name", "age"
"John", 30
"Jane", 25
"Bob", 40
```

## Converting JSON to XML

To convert JSON data to XML format, call the convertToXml function, passing in the JSON data as a parameter:

```javascript
const jsonData = {
	users: [
		{ name: 'John', age: 30 },
		{ name: 'Jane', age: 25 },
		{ name: 'Bob', age: 40 },
	],
};
const xmlData = convertToXml(jsonData);
console.log(xmlData);
```

This will output the following XML data:

```xml
<users>
    <user>
        <name>John</name>
        <age>30</age>
    </user>
    <user>
        <name>Jane</name>
        <age>25</age>
    </user>
    <user>
        <name>Bob</name>
        <age>40</age>
    </user>
</users>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
