import { productlist, findById } from './fooditem.js'

const querystring = window.location.search;
var spt =querystring.split("&");
var id =spt[0].split("=")[1];
//var timeval =spt[1].split("=")[1];

console.log(id);
let prod = findById(id);
console.log(prod);
let url_1 = document.getElementById('div1');
url_1.innerHTML = prod.pname;

let product_title = document.getElementById("product_title");
product_title.innerHTML = prod.pname;

let product_company = document.getElementById("product_company");
product_company.innerHTML = prod.company;

let quantity_wt = document.getElementById("quantity_wt");
quantity_wt.innerHTML = prod.quantity;

let product_img = document.getElementById("product_image");
product_img.src = prod.pimage;

let product_price = document.getElementById("price");
product_price.innerHTML = prod.price;
