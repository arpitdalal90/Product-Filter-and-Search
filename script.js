let root = document.getElementById('root');
let search = document.getElementById('searchButton');

let products = [
    {
        productName: "Regular White T-shirt",
        category: "TopWear",
        price: "300",
        Image: "/Images/white-Tshirt.jpg",
    },
    {
        productName: "Beige Short Skirt",
        category: "BottomWear",
        price: "49",
        Image: "/Images/short-skirt.jpg",
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watches",
        price: "99",
        Image: "/Images/sporty-smartwatch.jpg",
    },
    {
        productName: "Basic Knitted Top",
        category: "TopWear",
        price: "29",
        Image: "/Images/knitted-top.jpg",
    },
    {
        productName: "Black Leather Jacket",
        category: "Jackets",
        price: "129",
        Image: "/Images/black-leather-jacket.jpg",
    },
    {
        productName: "Stylish Pink Trousers",
        category: "BottomWear",
        price: "89",
        Image: "/Images/pink-trouser.jpg",
    },
    {
        productName: "Brown Men's Jacket",
        category: "Jackets",
        price: "189",
        Image: "/Images/brown-jacket.jpg",
    },
    {
        productName: "Comfy Gray Pants",
        category: "BottomWear",
        price: "49",
        Image: "/Images/gray-pants.jpg",
    },
];

for( let i of products) {
    // create the card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    // container, which stores the content of the card
    let container = document.createElement("div");
    container.classList.add("container");

    // image div
    let image = document.createElement("img");
    image.classList.add("IMG");
    image.setAttribute("src", i.Image);
    container.appendChild(image);

    // product name div
    let prdName = document.createElement("div");
    prdName.classList.add("prodName");
    prdName.textContent = i.productName;
    container.appendChild(prdName);

    // price div
    let pric = document.createElement("div");
    pric.classList.add("price");
    pric.textContent = `$ ${i.price}`;
    container.appendChild(pric);

    card.appendChild(container);      
    document.getElementById("products").appendChild(card);  // OR root.appendChild(card);    

}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".buttonVal");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("changeButtonColor");
        } else {
            button.classList.remove("changeButtonColor");
        }
    });

    // Select all cards
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(value == "all") {
            element.classList.remove("hide");
        }
        else {
            if(element.classList.contains(value)) {
                element.classList.remove("hide");
            }
            else {
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById('searchButton').addEventListener('click', () => {
    let searchInput = document.querySelector(".searchBar").value;
    let elements = document.querySelectorAll(".prodName");
    let cards = document.querySelectorAll(".card");
    let noResultsFound = true;

    elements.forEach((element, index) => {
        if(element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
            noResultsFound = false;
        } else {
            //hide others
            cards[index].classList.add("hide");
        }

        // Only for no results found
        if(noResultsFound) {
            document.getElementById('noResultsFound').style.visibility = "visible";
            document.querySelector('.categories').style.visibility = "hidden";
        } else {
            document.getElementById('noResultsFound').style.visibility = "hidden";
            document.querySelector('.categories').style.visibility = "visible";
        }
    });
});

document.querySelector('.searchBar').addEventListener('keypress', (event) => {
    if(event.keyCode == 13) {
        document.getElementById('searchButton').click();
    }
})

window.onload = () => {
    filterProduct('all');
};



