const fs = require('fs');
const { parse } = require('path');


const parseTemplate = async (template, dataObject = null) => {
    return new Promise((success, fail) => {
        fs.readFile(`${__dirname}/../views/${template}`, 'utf-8', (err, fileContent) => {
            if (err) return fail(err);

            let templateString = fileContent;
            if (dataObject) {
                for (let property in dataObject) {

                    templateString = templateString.replaceAll(`{{${property}}}`, dataObject[property]);
                }
            }
            return success(templateString);
        });
    });
};

module.exports = {
    parseTemplate,
};