function convertToCsv(json) {
    const separator = ",";
    let header = "";
    let rows = "";

    Object.keys(json[0]).forEach(key => {
        header += key + separator;
    });
    header = header.slice(0, -1);

    json.forEach(obj => {
        let row = "";
        Object.values(obj).forEach(value => {
            row += value + separator;
        });
        rows += row.slice(0, -1) + "\n";
    });

    const csvData = header + "\n" + rows;
    return csvData;
}

function convertToXml(jsonData) {
    let xmlData = "";

    const jsonToXmlRec = (node, obj) => {
        let xml = "";
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (typeof obj[prop] === "object") {
                    xml += "<" + prop + ">";
                    xml += jsonToXmlRec(node + "." + prop, obj[prop]);
                    xml += "</" + prop + ">";
                } else {
                    xml += "<" + prop + ">" + obj[prop] + "</" + prop + ">";
                }
            }
        }
        return xml;
    };

    for (const prop in jsonData) {
        if (jsonData.hasOwnProperty(prop)) {
            xmlData += "<" + prop + ">";
            xmlData += jsonToXmlRec(prop, jsonData[prop]);
            xmlData += "</" + prop + ">";
        }
    }

    return xmlData;
}

module.exports = { convertToCsv, convertToXml };
