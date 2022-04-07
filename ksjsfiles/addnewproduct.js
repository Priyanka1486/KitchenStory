import { productlist, findById } from './fooditem.js'

const querystring = window.location.search;
var spt =querystring.split("&");
var name = spt[0].split("=")[1];
var company = spt[1].split("=")[1];
var quant = spt[2].split("=")[1];
var price = spt[3].split("=")[1];

var id = productlist.length;
var prod = {
    id : id,
    pname : name,
    company : company,
    pimage : "../images/turmeric_aashirvaad.jpg",
    price : price,
    quantity : quant,
    mfd : "2022/03/24" , 
    expiry : "2022/05/24"
}
productlist.push(prod);
console.log(name, company, price);