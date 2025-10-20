let plnusd = 0.27;
let plneur = 0.24;
let plnfunt = 0.20;
let plnrub = 22.38;
let plnkorszw = 2.27;
let amount = 0;

let Currency = function(amount){
    this.amount = amount; }

Currency.prototype.roundTwoDecimals = function(amount){
    return Math.round(amount * 100) / 100;}

Currency.prototype.USDtoPLN = function(amount){
    return this.roundTwoDecimals(this.amount / plnusd);}

Currency.prototype.EURtoPLN = function(amount){
    return this.roundTwoDecimals(this.amount / plneur);}

Currency.prototype.FUNTtoPLN = function(amount){
    return this.roundTwoDecimals(this.amount / plnfunt);}

Currency.prototype.RUBtoPLN = function(amount){
    return this.roundTwoDecimals(this.amount / plnrub);}

Currency.prototype.KORSZWtoPLN = function(amount){
    return this.roundTwoDecimals(this.amount / plnkorszw);}

module.exports = exports = Currency;