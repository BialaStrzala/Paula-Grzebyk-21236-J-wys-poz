let plnusd = 0.27;
let plneur = 0.24;
let plnfunt = 0.20;
let plnrub = 22.38;
let plnkorszw = 2.27;

function roundTwoDecimals(amount){
    return Math.round(amount * 100) / 100;}

exports.USDtoPLN = function(usd){
    return roundTwoDecimals(usd / plnusd);}

exports.EURtoPLN = function(eur){
    return roundTwoDecimals(eur / plneur);}

exports.FUNTtoPLN = function(funt){
    return roundTwoDecimals(funt / plnfunt);}

exports.RUBtoPLN = function(rub){
    return roundTwoDecimals(rub / plnrub);}

exports.KORSZWtoPLN = function(korszw){
    return roundTwoDecimals(korszw / plnkorszw);}