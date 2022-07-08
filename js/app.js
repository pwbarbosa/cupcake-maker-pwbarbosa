import Donut from "./Donut.js"
// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');
const countEl = document.querySelector("#count");
const autoClickCountEl = document.querySelector("#clickersPurchased")
const donut = new Donut();

countEl.innerHTML = donut.count;
autoClickCountEl.innerHTML = donut._autoClickCount;


const makeBtn = document.querySelector("#make");
makeBtn.addEventListener("click", () => {
    donut._count++;
    countEl.innerHTML = donut._count;
})

const clickerPurchaseBtn = document.querySelector("#autoClickerPuchase");
clickerPurchaseBtn.addEventListener("click", () => {
    if (donut._count >= donut._autoClickCost) {
        donut.purchaseAutoClicker();
    }
    else {
            alert("Oops! You need " + (donut._autoClickCost - donut._count) + " more donuts to purchase this!");
    }
    autoClickCountEl.innerHTML = donut._autoClickCount;
    countEl.innerHTML = donut._count;
})

setInterval(() => {
    donut._count += donut._autoClickCount;
    countEl.innerText = donut.count;
}, 1000);


