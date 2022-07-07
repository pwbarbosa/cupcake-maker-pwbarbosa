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
    donut.purchaseAutoClicker();
    autoClickCountEl.innerHTML = donut._autoClickCount;
    countEl.innerHTML = donut._count;
})

