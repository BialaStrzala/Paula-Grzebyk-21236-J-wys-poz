// Lab 3 zad 2
let x = 1;
let y = 1;

let Math2Module = function(x, y){
    this.x = x;
    this.y = y;}

Math2Module.prototype.iloczyn = function(){
    return this.x*this.y;}

Math2Module.prototype.iloraz = function(){
    return this.x/this.y;}

Math2Module.prototype.suma = function(){
    return this.x+this.y;}

Math2Module.prototype.roznica = function(){
    return this.x-this.y;}

Math2Module.prototype.potega = function(){
    return Math.pow(this.x,this.y);}

module.exports = exports = Math2Module;