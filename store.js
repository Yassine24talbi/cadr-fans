

let products = document.getElementById('products')
let indexmenu = document.getElementById('indexmenu')
let openbutton = document.getElementById('opembutton')
let checkpro = document.getElementById('checkpro')
let numberofcart = document.querySelectorAll('#checkpro .product')
let cart = document.getElementById('cart')
let num = document.getElementById('num')
let small = document.getElementById('small')
let midume = document.getElementById('midume')
let big = document.getElementById('big')
let plastic = document.getElementById('palstic')
let wood = document.getElementById('wood')
let no = document.getElementById('no')
let yes = document.getElementById('yes')
let cartcheck = document.getElementById('cartcheck')
let title = document.getElementById('title')
let message = document.getElementById('message');
let menuopen = false
let finalPrice = document.getElementById('price')
let checkprocheckout = document.getElementById('checkprocheckout')
let size,type,glass;
let item = {}
let brain;
if(localStorage.item){
    brain = JSON.parse(localStorage.getItem('item'))
    count()


}else{
    brain=[]
    num.innerHTML =0
}

function showmessage(color,that){
    message.style.transform = 'translateX(-50%) translateY(100px)'
    setTimeout(()=>{message.style.transform = 'translateX(-50%) translateY(-200px)'},2500)
    message.style.backgroundColor = color
    message.innerHTML = that
}

function openmenu(){
    if(innerWidth >= 700){
        if(!menuopen){
            indexmenu.style.width = '400px'
            menuopen = true
            this.style.transform ='rotateY(180deg)'
        }else{
            indexmenu.style.width = '0'
            menuopen = false
            this.style.transform ='rotateY(0deg)'
        }
    }else if((innerWidth >= 410)){
        if(!menuopen){
            indexmenu.style.width = '290px'
            menuopen = true
            this.style.transform ='rotateY(180deg)'
        }else{
            indexmenu.style.width = '0'
            menuopen = false
            this.style.transform ='rotateY(0deg)'
        }
    }else{
        if(!menuopen){
            indexmenu.style.width = '210px'
            menuopen = true
            this.style.transform ='rotateY(180deg)'
        }else{
            indexmenu.style.width = '0'
            menuopen = false
            this.style.transform ='rotateY(0deg)'
        }
    }

}



let productForm = `            
    <div class="product" id="product" onclick="gotosee()">
        <div class="image"></div>
        <div class="title">Rafail Nadal</div>
    </div>`;

for(let i = 0;i<20;i++){
    products.innerHTML += productForm
}

let productss = document.querySelectorAll('.products #product'); // NodeList of all products

window.addEventListener('scroll', () => {
    if (innerWidth >= 1100) {
        if (scrollY >= 500) {
            productss.forEach(product => {
                product.style.opacity = '1';
                product.style.transform = 'translateY(0px)'; // Removed extra zeroes in "00px"
            });
        }
    } else {
        if (scrollY >= 100) {
            productss.forEach(product => {
                product.style.opacity = '1';
                product.style.transform = 'translateY(0px)'; // Removed extra zeroes in "00px"
            });
        }
    }
});

function gotosee(){
    location.href = 'onproduct.html';
}


function count() {
    if (brain.length > 0) {
        num.innerHTML = brain.length;

        // Clear previous content to avoid duplication
        checkpro.innerHTML = `<input type="submit" id="cartcheck" value="CheckOut" onclick="gotocheck()">`;

        // Loop through the brain array to create the product items
        for (let i = 0; i < brain.length; i++) {
            let shema = `
            <div class="product" id="product">
                <div class="image" style="background-image:url(${brain[i].imageItem.slice(5,-2)})"></div>
                <div class="title">${brain[i].titleitem}</div>
                <div class="size">${brain[i].bordersize}</div>
                <div class="type">${brain[i].bordertype}</div>
                <div class="glass">${brain[i].borderglass}</div>
                <div class="price">${brain[i].itemprice}</div>
                <i class='bx bxs-trash-alt' onclick="delet.call(this)"></i>
            </div>`;
            
            // Append the new product to checkpro
            checkpro.innerHTML += shema;
        }
    } else {
        // If no products in brain, clear the content and reset the number to 0
        num.innerHTML = 0;
    }
}




function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

if(isMobileDevice()){
    let showcart;
    function opencart(){
        if(!showcart){

            checkpro.style.opacity ='1'
            checkpro.style.pointerEvents = 'all'
            showcart = true

        }
        else{

            checkpro.style.opacity ='0'
            checkpro.style.pointerEvents = 'none'
            showcart = false

        }
    }
}else{
    cart.addEventListener('mouseleave',() =>{
        checkpro.style.opacity ='0'
        checkpro.style.pointerEvents = 'none'
    }) 
    cart.addEventListener('mouseenter',() =>{
        checkpro.style.opacity ='1'
        checkpro.style.pointerEvents = 'all'
        checkpro.addEventListener('mouseenter',() =>{
            checkpro.style.opacity ='1'
            checkpro.style.pointerEvents = 'all'
        })
        checkpro.addEventListener('mouseleave',() =>{
            checkpro.style.opacity ='0'
            checkpro.style.pointerEvents = 'none'
        })
    }) 
}


function framesize(){
    big.style.backgroundColor = 'transparent'
    small.style.backgroundColor = 'transparent'
    midume.style.backgroundColor = 'transparent'
    big.style.borderColor = 'black'
    small.style.borderColor = 'black'
    midume.style.borderColor = 'black'
    this.style.backgroundColor = 'black'
    this.style.borderColor = 'white'
    size = this.innerHTML
    price()
    return size;
}
function frametype(){
    plastic.style.backgroundColor = 'transparent'
    wood.style.backgroundColor = 'transparent'
    plastic.style.borderColor = 'black'
    wood.style.borderColor = 'black'
    this.style.backgroundColor = 'black'
    this.style.borderColor = 'white'
    type = this.innerHTML

    if(type === 'Plastic'){
        yes.style.backgroundColor = 'gray'
        no.style.backgroundColor = 'black'
        yes.style.pointerEvents = 'none'
        no.style.pointerEvents = 'none'
        no.style.borderColor = 'white'
        yes.style.borderColor = 'black'
        glass = 'No'
        price()
        return glass;
    }
    else{
        yes.style.backgroundColor = 'transparent'
        no.style.backgroundColor = 'transparent'
        yes.style.borderColor = 'black'
        no.style.borderColor = 'black'
        yes.style.pointerEvents = 'all'
        no.style.pointerEvents = 'all'
        glass = null
    }
    price()
    return type;
}

function frameglass(){
    yes.style.backgroundColor = 'transparent'
    no.style.backgroundColor = 'transparent'
    yes.style.borderColor = 'black'
    no.style.borderColor = 'black'
    this.style.backgroundColor = 'black'
    this.style.borderColor = 'white'
    glass = this.innerHTML
    price()
    return glass;
}

function gotocheck(){
    window.location.href = 'checkout.html'
}
function addandcheck(){
    if(size && type && glass){
        this.style.pointerEvents = 'none'
        additem()
        setTimeout(()=>{window.location.href = 'checkout.html'},2900)

        
    }else{
        additem()
    }
}

function price(){
    if(size && type && glass){
        if(size === 'S' && type === 'Plastic' && glass === 'No'){
            finalPrice.innerHTML = 49+ ' DH'
        }
        if(size === 'S' && type === 'Wood' && glass === 'No'){
            finalPrice.innerHTML = 59+ ' DH'
        }
        if(size === 'S' && type === 'Wood' && glass === 'Yes'){
            finalPrice.innerHTML = 69+ ' DH'
        }
    
        if(size === 'M' && type === 'Plastic' && glass === 'No'){
            finalPrice.innerHTML = 59+ ' DH'
        }
        if(size === 'M' && type === 'Wood' && glass === 'No'){
            finalPrice.innerHTML = 69+ ' DH'
        }
        if(size === 'M' && type === 'Wood' && glass === 'Yes'){
            finalPrice.innerHTML = 79+ ' DH'
        }
    
        if(size === 'X' && type === 'Plastic' && glass === 'No'){
            finalPrice.innerHTML = 89+ ' DH'
        }
        if(size === 'X' && type === 'Wood' && glass === 'No'){
            finalPrice.innerHTML = 109+ ' DH'
        }
        if(size === 'X' && type === 'Wood' && glass === 'Yes'){
            finalPrice.innerHTML = 129+ ' DH'
        }
    }
}


function additem(){
    if(size && type && glass){
        let itemImageElement = document.getElementById('itemimage');
        let backgroundImage = window.getComputedStyle(itemImageElement).getPropertyValue('background-image');
        item ={
            imageItem:backgroundImage,
            titleitem:title.innerHTML,
            bordersize:size,
            bordertype:type,
            borderglass:glass,
            itemprice:finalPrice.innerHTML
        }
        brain.push(item)
        localStorage.setItem('item',JSON.stringify(brain))
        size = null
        type = null
        glass = null
        big.style.backgroundColor = 'transparent'
        small.style.backgroundColor = 'transparent'
        midume.style.backgroundColor = 'transparent'
        big.style.borderColor = 'black'
        small.style.borderColor = 'black'
        midume.style.borderColor = 'black'
        plastic.style.backgroundColor = 'transparent'
        wood.style.backgroundColor = 'transparent'
        plastic.style.borderColor = 'black'
        wood.style.borderColor = 'black'
        yes.style.backgroundColor = 'transparent'
        no.style.backgroundColor = 'transparent'
        yes.style.borderColor = 'black'
        no.style.borderColor = 'black'
        finalPrice.innerHTML = '-- DH'
        location.href = '#products'
        count()
        showmessage('#2bae66','Your Item has been Add')
    }else{
        big.style.borderColor = 'red'
        small.style.borderColor = 'red'
        midume.style.borderColor = 'red'
        plastic.style.borderColor = 'red'
        wood.style.borderColor = 'red'
        no.style.borderColor = 'red'
        yes.style.borderColor = 'red'
        showmessage('#990011','Fill All Options')
    }
}


function delet() {
    // 'this' refers to the clicked trash icon
    let productDiv = this.closest('.product'); // Get the closest product div
    
    // Get the index of the product div within the 'checkpro' container
    let productIndex = Array.from(checkpro.children).indexOf(productDiv) - 1; // Subtract 1 to exclude the "CheckOut" button from the index calculation

    // Remove the product from the 'brain' array
    if (productIndex >= 0) {  // Ensure valid index (greater than or equal to 0)
        brain.splice(productIndex, 1);  // Remove the item from the brain array
    }

    // Update the 'brain' data in localStorage
    localStorage.setItem('item', JSON.stringify(brain));

    // Re-render the cart items by calling 'count()'
    count();

    // Optionally, show a message indicating the item has been deleted
    showmessage('#990011', 'Item has been removed');
}


