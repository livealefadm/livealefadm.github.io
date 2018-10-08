

function writeToCart(img,title,price){
    
    var element = document.getElementById("game");
    var fragment = document.createDocumentFragment();
    var div = document.createElement('div');
    var imgTag = document.createElement('img');
    imgTag.setAttribute('src',img);
    var p1 = document.createElement('p');
    p1.innerText = title;
    var p2 = document.createElement('p');
    p2.innerText = price;

    div.appendChild(imgTag);
    div.appendChild(p1);
    div.appendChild(p2);

    fragment.appendChild(div);
    game.appendChild(fragment);
    
}

let img;
let title;
let price;

for (let index = 0; index < localStorage.length; index++) {
    const element = localStorage.key(index);
    if (!element.substring("game")) {
        console.log("Not a game")
        
    }
    else{
        items = JSON.parse(localStorage.getItem(element));
        img = items["img"];
        title = items["title"];
        price = items["price"];
    }
    writeToCart(img,title,price);
    
}
