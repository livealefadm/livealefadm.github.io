function setItemIntoStorage(key,items){
    if(window.localStorage){
        localStorage.setItem(key, items);
    }
    else{
        console.log("Storage not Available");
    }
}


let buttonArray = document.querySelectorAll(".buy");
for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function () {
        let key = "game" + i;
        let items = {};

        let parentClass = buttonArray[i].parentElement.children;
        items.img = parentClass[0].getAttribute("src");
        items.title = parentClass[1].innerText;
        items.price = parentClass[2].innerText;
        
        let itemString = JSON.stringify(items);

        setItemIntoStorage(key, itemString);
        location.href = "/cart.html";
    });

}