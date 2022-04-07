import { productlist, findById } from './fooditem.js'

var jval = JSON.parse(localStorage.getItem("arr"));
/*
for(var i=0;i<jval.length;i++) {
    var pr = jval[i];
    console.log(pr.product.pname);
    console.log(pr.qnt);
}
*/
var amount = 0;
if(jval != null){
    let cart_tbody = document.getElementById("order_list");
    for(var i=0;i<jval.length;i++){
    //    let product = jval[i];
        let cart_info = jval[i];
        let product = cart_info.product;
        let row = document.createElement('tr');
        row.id = "row-"+product.id;
            
        let pname = document.createElement('td');
        pname.innerHTML = product.pname;
        
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
        amount = amount + (product.price * cart_info.qnt);
        
        row.appendChild(pname);
        row.appendChild(pimage);
        row.appendChild(quantity);
        row.appendChild(price);
        row.appendChild(total);

        cart_tbody.appendChild(row);
    }
}
var total_amt = document.getElementById('totalamount');
total_amt.value = amount ;
