import { productlist, findById } from './fooditem.js'

var list = JSON.parse(localStorage.getItem("productvalue"));
console.log(list.length);

let tbody = document.getElementById("adminproduct_list");
let hreflink_cart = "../user/itemdetail.html";
for(let product of list){

    let row = document.createElement('tr');
    row.id = "row-"+product.id;
    
    let sr_no = document.createElement('td');
    sr_no.innerHTML = product.id;
    
    let pname = document.createElement('td');
    let pnamelink = document.createElement('a')
    pnamelink.href = hreflink_cart + "?id=" +product.id;
    pnamelink.innerHTML = product.pname;
    pname.appendChild(pnamelink);
    
    let pimage = document.createElement('td');
    let pimg = document.createElement('img');
    pimg.src = product.pimage;
    pimg.width = 40;
    pimg.height = 40;
    pimage.appendChild(pimg);

    let quantity = document.createElement('td');
    quantity.innerHTML = product.quantity; 
     
    let price = document.createElement('td');
    price.innerHTML = product.price;
    
    let option = document.createElement('td');
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = "Remove";
    btn.id = product.id;
    btn.addEventListener("click", removeToCart)
    
    option.appendChild(btn);
    row.appendChild(sr_no);
    row.appendChild(pname);
    row.appendChild(pimage);
    row.appendChild(quantity);
    row.appendChild(price);
    row.appendChild(option);

    tbody.appendChild(row);
}

function removeToCart(e) {
    var prod = findById(e.target.id);
    var rtr = "row-"+prod.id;   
    let tb = document.getElementById("adminproduct_list");
    let ttr = document.getElementById(rtr);
    tb.removeChild(ttr);
}
