
export var productlist ;
function onpageload(){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    if(this.readyState == 4 && this.status == 200)
    productlist = JSON.parse(xmlhttp.responseText);
       for(let jval of productlist) {
       // productlist.push(jval); 
        console.log(jval);
        }
        localStorage.setItem("productvalue", JSON.stringify(productlist));
    }
   xmlhttp.open("GET", "../ksjsfiles/ajax_product.json"); 
   xmlhttp.send();
}
window.onload = onpageload;

export function findById(id){
    for(let product of productlist){
        if(id==product.id)
           return product;
    }
}

/*
export var productlist = [
    {
        id : 1,
        pname : "Atta",
        company : "Aashirvad",
        pimage : "../images/atta_aashirvaad.jpg",
        price : 200,
        quantity : "5Kg",
        mfd : "2022/03/24" , 
        expiry : "2022/05/24"
    },
    {
        id : 2,
        pname : "Rice",
        company : "Fortune",
        pimage : "../images/rice_fortune.jpg",
        price : 500,
        quantity : "5Kg",
        mfd : "2021/03/24" , 
        expiry : "2023/05/24"
    },
    {
        id : 3,
        pname : "Oil",
        company : "Fortune",
        pimage : "../images/oil_fortune.jpg",
        price : 200,
        quantity : "1l",
        mfd : "2022/01/09" , 
        expiry : "2023/11/28"
    },
    {
        id : 4,
        pname : "Sugar",
        company : "24 Mantra",
        pimage : "../images/organicsugar_24.jpg",
        price : 200,
        quantity : "1Kg",
        mfd : "2022/02/12" , 
        expiry : "2023/05/30"
    },
    {
        id : 5,
        pname : "Tea",
        company : "Tata Tea Gold",
        pimage : "../images/tea_tata.jpg",
        price : 200,
        quantity : "5Kg",
        mfd : "2022/03/24" , 
        expiry : "2022/05/24"
    },
];
*/
