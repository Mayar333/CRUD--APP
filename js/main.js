
var productNameInput=document.getElementById("productName");
var productPriceInput=document.getElementById("productPrice");
var productCategoryInput=document.getElementById("productCategory");
var productDescInput=document.getElementById("productDesc");
var  mainBtn=document.getElementById("mainBtn");
var productsContainer;
var currentIndex = 0 ;

if(localStorage.getItem("products") == null)
{
    productsContainer= [];
}
else{
    productsContainer = JSON.parse( localStorage.getItem("products") );
    displayProduct(productsContainer);
}


function addProduct() 
{

    if(mainBtn.innerHTML == " Add Product"){

        var product={
            name:productNameInput.value,
            price:productPriceInput.value,
            category:productCategoryInput.value,
            desc:productDescInput.value
       
        }
        
        productsContainer.push(product);
        localStorage.setItem(  "products",  JSON.stringify(productsContainer) )  ;
       

    }

    else
    {
        updatProduts();
        
     
    }
    displayProduct(productsContainer);
    clearForm();
  
}

function displayProduct(productsList){

var cartona=``;

for(var i=0; i<productsList.length;i++){


cartona+=`

<tr>
    <th>${i}</th>
    <th>${productsList[i].name}</th>
    <th>${productsList[i].price}</th>
    <th>${productsList[i].category}</th>
    <th>${productsList[i].desc}</th>
    <th><button  onclick="updatProduct(${i})" class="btn btn-warning"> Update</button></th>
    <th><button onclick = "deleteProduct(${i})" class="btn btn-danger"> Delete</button></th>


</tr>

`

}
    
    document.getElementById("tableRow").innerHTML=cartona;

}

function clearForm()
{
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescInput.value="";

  
}

function deleteProduct(productIndex){

    productsContainer.splice(productIndex,1);
    localStorage.setItem(  "products",  JSON.stringify(productsContainer) )  ;

    displayProduct(productsContainer);
}


function searchProducts(term)
   {
       searchProducts = [];
    for( var i= 0 ; i < productsContainer.length ; i++){

        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase() ))
        {
            searchProducts.push(productsContainer[i]) ;
        }
        
    }
      
    displayProduct(searchProducts);

}

function updatProduct(index){

currentIndex = index;
    productNameInput.value= productsContainer[index].name;
    productPriceInput.value= productsContainer[index].price;
    productCategoryInput.value= productsContainer[index].category;
    productDescInput.value= productsContainer[index].desc;
    mainBtn.innerHTML="Update Product"



}

function updatProduts(){


    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value
       }

       productsContainer[currentIndex].name=product.name;
       productsContainer[currentIndex].price=product.price;
       productsContainer[currentIndex].category=product.category;
       productsContainer[currentIndex].desc=product.desc;
    localStorage.setItem(  "products",  JSON.stringify(productsContainer) )  ;
    
        
}
