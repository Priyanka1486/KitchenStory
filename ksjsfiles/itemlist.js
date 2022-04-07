import { productlist, findById } from './fooditem.js'

var list = JSON.parse(localStorage.getItem("productvalue"));
console.log(list.length);

var cartitemlist =  new Array();
var jval = JSON.parse(localStorage.getItem("arr"));
if((jval != undefined) && (jval.length > 0)){
    for(var i=0;i<jval.length;i++) {
        var pr = jval[i];
        cartitemlist.push(pr);
    }    
}
let tbody = document.getElementById("product_list");
let hreflink = "../user/itemdetail.html?id=";
for(let product of list){
    
    let row = document.createElement('tr');
    
    let sr_no = document.createElement('td');
    sr_no.innerHTML = product.id;
    
    let pname = document.createElement('td');
    let pnamelink = document.createElement('a')
    pnamelink.href = hreflink + product.id;
    pnamelink.innerHTML = product.pname;
    pname.appendChild(pnamelink);

    let company = document.createElement('td');
    company.innerHTML = product.company +" -- "+product.net_wt;
    
    let pimage = document.createElement('td');
    let pimg = document.createElement('img');
    pimg.src = product.pimage;
    pimg.width = 40;
    pimg.height = 40;
    pimage.appendChild(pimg);

    let quantity = document.createElement('td');
    let qselect = document.createElement('select');
    qselect.id = 'select-'+product.id;
    qselect.addEventListener('change',changetotal);
    let selectOption; 
    
    selectOption = document.createElement('option');
    selectOption.value = 1;
    selectOption.innerHTML = 1;
    selectOption.selected = true;
    qselect.appendChild(selectOption);

    selectOption = document.createElement('option');
    selectOption.value = 2;
    selectOption.innerHTML = 2;
    qselect.appendChild(selectOption);

    selectOption = document.createElement('option');
    selectOption.value = 3;
    selectOption.innerHTML = 3;
    qselect.appendChild(selectOption);

    selectOption = document.createElement('option');
    selectOption.value = 4;
    selectOption.innerHTML = 4;
    qselect.appendChild(selectOption);

    selectOption = document.createElement('option');
    selectOption.value = 5;
    selectOption.innerHTML = 5;
    qselect.appendChild(selectOption);
    quantity.appendChild(qselect); 
     
    let price = document.createElement('td');
    price.innerHTML = product.price;

    let total = document.createElement('td');
    total.innerHTML = product.price;
    total.id = "total-"+product.id;
    
    let option = document.createElement('td');
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = "Add to cart";
    btn.id = product.id;
    btn.addEventListener("click", addToCart)
    option.appendChild(btn);

    row.appendChild(sr_no);
    row.appendChild(pname);
    row.appendChild(company);
    row.appendChild(pimage);
    row.appendChild(quantity);
    row.appendChild(price);
    row.appendChild(total);
    row.appendChild(option);

    tbody.appendChild(row);
}

function changetotal(e){
    var qno = document.getElementById(e.target.id);
    var value = qno.value;
  //  value.selected = true;
    var total_id = e.target.id.split("-")[1];
   // div1.innerHTML = total_id;
    var id_val = "total-"+total_id;
    var prod = findById(total_id);
    var total = document.getElementById(id_val);
    total.innerHTML = value * prod.price;
}


function addToCart(e) {
    var prod = findById(e.target.id);
    var sel_q = 'select-'+prod.id;
    let qselect = document.getElementById(sel_q);
    var val = qselect.value; 
    var cartinfo = { 'product' : prod , 'qnt' : val};
    cartitemlist.push(cartinfo);
    console.log(cartitemlist);
    localStorage.setItem("arr", JSON.stringify(cartitemlist));
}

/*
function addToCart(e) {
    div1.innerHTML = e.target.id;
    var prod = findById(e.target.id);
    var cartinfo = { product : prod , qnt :};
    cartitemlist.push(prod);
  //  console.log(cartitemlist);
    localStorage.setItem("arr", JSON.stringify(cartitemlist));
}
*/
//console.log(cartitemlist);
/*  
var arr = new Array();
for(var i=0;i<cartitemlist.length;i++){
    console.log(cartitemlist[i]);
    arr.push(cartitemlist[i]);
}
arr.push(1);
arr.push(2);  
arr.push(3);

//var arr = ["Atta","Rice","Oil"];
localStorage.setItem("arr", JSON.stringify(cartitemlist));
var jval = JSON.parse(localStorage.getItem("arr"));
div1.innerHTML = jval[0];
for(var i=0;i<jval.length;i++) {
    console.log(jval[i]);
}


//var storedNames = JSON.parse(localStorage.getItem("names"));
localStorage.setItem("cartprod",JSON.stringify(cartitemlist));
var list = JSON.parse(localStorage.getItem("cartprod"));
console.log(list);  
    
//localStorage.setItem('cartArr', 1);

*/