document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}
/*получаем все линки*/
let links = document.querySelectorAll(".menu-item > a");

/*вешаем обработчики на все линки с применением функции плавного скролла*/
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

/*получаем все кнопки*/
let buttons = document.getElementsByClassName("product-button");

/*делаем плавный скролл на заказать с кнопки выбора бургера*/
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

/*Валидация формы*/
let burger = document.getElementById("burger")
let name = document.getElementById("name")
let phone = document.getElementById("phone")

document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}

/*Изменение курса валют*/

let prices = document.getElementsByClassName("products-item-price");

document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 80;
    }else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    }else if (currentCurrency === "BYN") {
        newCurrency = "UAH";
        coefficient = 37;
    }else if (currentCurrency === "UAH") {
        newCurrency = "€";
        coefficient = 0.9;
    }else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }

}



