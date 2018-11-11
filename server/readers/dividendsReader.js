const epp = require('easy-pdf-parser');
const fs = require('fs');
const Dividend = require('./../api/dividends/Dividend');

const dirPath = 'D:/depot/Ertragsabrechnungen/';

function readPdf(file) {
  const fullPath = dirPath.concat(file);
  const pdfText = epp
    .parsePdf(fullPath)
    .then(epp.extractPlainText).catch((err) => {
      console.log(err);
    })
    .then((data) => {
      return data;
    }).catch((err) => {
      console.log(err);
    });

  let dividendObject = pdfText.then(text => {
    let dividendSet = {};
    var targetTextRange1 = text.substring(text.indexOf("WKN"), text.indexOf("WKN") + 30);
    dividendSet.wkn = targetTextRange1.substring(
      targetTextRange1.indexOf("(") + 1,
      targetTextRange1.lastIndexOf(")")
    );
    var targetTextRange2 = text.substring(text.indexOf("Wertpapierbezeichnung"), text.indexOf("Wertpapierbezeichnung") + 100);
    dividendSet.name = targetTextRange2.substring(
      targetTextRange2.indexOf(" ") + 1,
      targetTextRange2.indexOf("\n")
    );
    var targetTextRange3 = text.substring(text.indexOf("Gunsten"), text.indexOf("Gunsten") + 20);
    dividendSet.value = targetTextRange3.substring(
      targetTextRange3.indexOf(",") - 1,
      targetTextRange3.indexOf(",") + 3
    ).replace(',', '.');
    var targetTextRange4 = text.substring(text.indexOf("Ex-Tag"), text.indexOf("Ex-Tag") + 20);
    const dateString = targetTextRange4.substring(
      targetTextRange4.indexOf(" ") + 1,
      targetTextRange4.indexOf("\n")
    );
    const date = dateString.split('.');
    dividendSet.date = new Date(date[2], date[1] - 1, date[0]);

    return dividendSet;
  });

  return dividendObject;
}

module.exports.read = async function read() {
  fs.readdir(
    dirPath,
    (err, dir) => {
      dir.forEach((file) => {
        const oneFile = readPdf(file);
        oneFile.then(async (dividendObject) => {
          const newDividend = new Dividend({
            wkn: dividendObject.wkn,
            name: dividendObject.name,
            value: dividendObject.value,
            date: dividendObject.date,
          });

          newDividend.save();
          return (err);
        });
      });
    },
  );
}
