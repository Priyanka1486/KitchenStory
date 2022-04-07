import { productlist, findById } from './fooditem.js'

var jval = JSON.parse(localStorage.getItem("arr"));
if(jval != null){
    let cart_tbody = document.getElementById("cart_list");
    let hreflink_cart = "../user/itemdetail.html";
    
for(var i=0;i<jval.length;i++){
//    let product = jval[i];
    let cart_info = jval[i];
    let product = cart_info.product;
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
    
    quantity.innerHTML = cart_info.qnt; 
     
    let price = document.createElement('td');
    price.innerHTML = product.price;

    let total = document.createElement('td');
    total.innerHTML = product.price * cart_info.qnt;
    //total.id = "total-"+product.id;
    
    let option = document.createElement('td');
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = "Remove to cart";
    btn.id = product.id;
    btn.addEventListener("click", removeToCart)
    
    option.appendChild(btn);
    row.appendChild(sr_no);
    row.appendChild(pname);
    row.appendChild(pimage);
    row.appendChild(quantity);
    row.appendChild(price);
    row.appendChild(total);
    row.appendChild(option);

    cart_tbody.appendChild(row);
}
}
function removeToCart(e) {
    var prod = findById(e.target.id);
    var rtr = "row-"+prod.id;
    jval.pop(prod);   
    localStorage.setItem("arr", JSON.stringify(jval));
    let tb = document.getElementById("cart_list");
    let ttr = document.getElementById(rtr);
    tb.removeChild(ttr);
}

