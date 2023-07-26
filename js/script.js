const currentPage = window.location.pathname; // Get the current page URL
console.log(currentPage);

function checkScroll() {
    const navbar = document.getElementById("navbar");
    const scrollY = window.scrollY;
  
    if (currentPage === '/index.html') {
        if (scrollY > 0) {
            navbar.classList.add("bg-black");
            navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.add("bg-transparent");
            navbar.classList.remove("bg-black");
        }
    }

}

window.addEventListener("scroll", checkScroll);


async function getSepatu() {
    let url;
    if (currentPage === '/products.html') {
        url = "https://dummyjson.com/products/search?q=shoes"
    }else{
        url = "https://dummyjson.com/products/category/mens-shoes?limit=3"
    }

    const data = await fetch(url)
    const jsonData = await data.json();
    return jsonData.products;
}