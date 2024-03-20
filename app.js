const products = [
    {
        name: "Homoktövis",
        picture: "homoktovis.jpg",
        description: "Igen gazdag vitaminokban.",
        price: 3800,
        inStock: true
    },
    {
        name: "Cseresznye",
        picture: "cseresznye.jpg",
        description: "A tavasz első gyümölcse.",
        price: 2000,
        inStock: true
    },
    {
        name: "Eper",
        picture: "eper.jpg",
        description: "Finom, zamatos.",
        price: 3000,
        inStock: false,
        variation: [
            "földi eper", "faeper"
        ]
    }
]


const hamburger = document.querySelector("#hamburger");
const cart = document.querySelector("#cart");
const carter = document.querySelector("#carter");
hamburger.addEventListener("click", (event) => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("visibleNav");
    event.target.classList.toggle("bi-caret-left")
    event.target.classList.toggle("bi-list")
})

cart.addEventListener("click", (event) => {
    carter.classList.toggle("visibleCart");
    carter.classList.toggle("hiddenCart");
    event.target.classList.toggle("bi-caret-down")
    event.target.classList.toggle("bi-cart3")
})

const container = document.querySelector(".container");
container.innerHTML = "";
for (const i of products) {
    container.innerHTML += `
            <div class="card">
                    <div class="card-header">
                        <h3>${i.name}</h3>
                    </div>
                    <img src="./img/${i.picture}" alt="">
                    <div class="card-body">
                        <h3 id="description">${i.description}</h3>
                        <h3 id="price">${i.price}</h3>
                        <p>${i.inStock ? "Van" : "Nincs"} raktáron</p>
                        <button type="button">Kosárba</button>
                    </div>
                </div>
            </div>
    `
}