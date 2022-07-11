import Donut from "./Donut.js"

const countEl = document.querySelector("#count");
const autoClickCountEl = document.querySelector("#clickersPurchased")
const clickerCostEl = document.querySelector("#clickerCost");
const multiplierCountEl = document.querySelector("#multipliersPurchased");
const multiplierCostEl = document.querySelector("#multiplierCost")
const donut = new Donut();

countEl.innerHTML = donut.count;
autoClickCountEl.innerHTML = donut._autoClickCount;
clickerCostEl.innerHTML = donut._autoClickCost;
multiplierCountEl.innerHTML = donut._multiplierCount;
multiplierCostEl.innerHTML = donut._multiplierCost;


const makeBtn = document.querySelector("#make");

makeBtn.addEventListener("click", () => {
    donut.click();
    countEl.innerHTML = Math.round(donut._count);
    if (Math.round(donut._count) >= Math.round(donut._autoClickCost)) {
        
    }
    
})

const clickerPurchaseBtn = document.querySelector("#autoClickerPuchase");
clickerPurchaseBtn.addEventListener("click", () => {
    if (Math.round(donut._count) >= Math.round(donut._autoClickCost)) {
        donut.purchaseAutoClicker();
    }
    else {
            alert("Oops! You need " + Math.round(donut._autoClickCost - donut._count) + " more donuts to purchase this!");
    }
    autoClickCountEl.innerHTML = donut._autoClickCount;
    countEl.innerHTML = Math.round(donut._count);
    clickerCostEl.innerHTML = Math.round(donut._autoClickCost);

})

const multiplierPurchaseBtn = document.querySelector("#multiplierPurchase");
multiplierPurchaseBtn.addEventListener("click", () => {
    if (Math.round(donut._count) >= Math.round(donut._multiplierCost)) {
        donut.purchaseMultiplier();
        multiplierCountEl.innerHTML = donut._multiplierCount;
        countEl.innerHTML = Math.round(donut._count);
    }
    else {
            alert("Oops! You need " + Math.round(donut._multiplierCost - donut._count) + " more donuts to purchase this!");
    }
    multiplierCountEl.innerHTML = donut._multiplierCount;
    countEl.innerHTML = Math.round(donut._count);
    multiplierCostEl.innerHTML = Math.round(donut._multiplierCost);

})

setInterval(() => {
    donut._count += donut._autoClickCount * donut._makeValue;
    countEl.innerText = Math.round(donut._count);
}, 1000);


