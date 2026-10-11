const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')


function ShowAll(productsArray) {
    let myLi = '' 

    productsArray.forEach((product) => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price.toFixed(2)}</p>
            </li>
        `
    })
    list.innerHTML = myLi
}
function MapAllItems() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))

    ShowAll(newPrice)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0) 
   list.innerHTML =`
    <li> 
        <p>Total: R$ ${totalValue.toFixed(2)} </p>
    </li>
`
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    ShowAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () => ShowAll(menuOptions))
buttonMapAll.addEventListener('click', MapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)