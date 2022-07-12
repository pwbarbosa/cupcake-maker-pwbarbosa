import Donut from "./Donut.js"

const countEl = document.querySelector("#count");
const autoClickCountEl = document.querySelector("#clickersPurchased");
const clickerCostEl = document.querySelector("#clickerCost");
const multiplierCountEl = document.querySelector("#multipliersPurchased");
const multiplierCostEl = document.querySelector("#multiplierCost");
const bakerEl = document.querySelector("#autoClickerPuchase");
const ovenEl = document.querySelector("#multiplierPurchase");
const bakerDivEl = document.querySelector("#autoClickerDiv");
const ovenDivEl = document.querySelector("#multiplierDiv");
const makeValueEl = document.querySelector("#makeValue");
const autoClickerInfoEl = document.querySelector("#autoClickerInfo");
const multiplierInfoEl = document.querySelector("#multiplierInfo");
const autoClickerCostRemainderEl = document.querySelector("#autoClickerCostRemainder");
const multiplierCostRemainderEl = document.querySelector("#multiplierCostRemainder");
const donut = new Donut();

countEl.innerHTML = "Cupcakes: " + donut.count;
autoClickCountEl.innerHTML = "Chef Level: " + donut._autoClickCount;
clickerCostEl.innerHTML = "Upgrade Cost: " + donut._autoClickCost;
multiplierCountEl.innerHTML = "Oven Level: " + donut._multiplierCount;
multiplierCostEl.innerHTML = "Upgrade Cost: " + donut._multiplierCost;
makeValueEl.innerHTML = (Math.round(donut._makeValue * 1000000) / 1000000);


const makeBtn = document.querySelector("#make");

makeBtn.addEventListener("click", () => {
    donut.click();
    countEl.innerText = "Cupcakes: " + Math.round(donut._count);
    autoClickerCostRemainderEl.innerHTML = "You only need " + (Math.round(donut._autoClickCost) - Math.round(donut._count)) + " more cupcakes to upgrade!"
    if (Math.round(donut._count) >= Math.round(donut._multiplierCost)) {
        ovenEl.classList.remove("unavailable");    
        ovenEl.classList.add("available");
        ovenDivEl.classList.remove("unavailable");
        ovenDivEl.classList.add("available");
        multiplierInfoEl.classList.add("hidden");
    }
    if (Math.round(donut._count) >= Math.round(donut._autoClickCost)) {
        bakerEl.classList.remove("unavailable");    
        bakerEl.classList.add("available");
        bakerDivEl.classList.remove("unavailable");
        bakerDivEl.classList.add("available");
        autoClickerInfoEl.classList.add("hidden");
    }


})

const clickerPurchaseBtn = document.querySelector("#autoClickerPuchase");
clickerPurchaseBtn.addEventListener("click", () => {
    if (Math.round(donut._count) >= Math.round(donut._autoClickCost)) {
        donut.purchaseAutoClicker();
    }
    multiplierCostRemainderEl.innerHTML = 
    countEl.innerText = "Cupcakes: " + Math.round(donut._count);    
    autoClickCountEl.innerHTML = "Chef Level: " + donut._autoClickCount;
    clickerCostEl.innerHTML = "Upgrade Cost: " + donut._autoClickCost;    if (Math.round(donut._count) <= Math.round(donut._multiplierCost)) {
        ovenEl.classList.remove("available");    
        ovenEl.classList.add("unavailable");
        ovenDivEl.classList.remove("available");
        ovenDivEl.classList.add("unavailable");
        multiplierInfoEl.classList.remove("hidden");

    }
    if (Math.round(donut._count) <= Math.round(donut._autoClickCost)) {
        bakerEl.classList.remove("available");    
        bakerEl.classList.add("unavailable");
        bakerDivEl.classList.remove("available");
        bakerDivEl.classList.add("unavailable");
        autoClickerInfoEl.classList.remove("hidden");

    }

})

const multiplierPurchaseBtn = document.querySelector("#multiplierPurchase");
multiplierPurchaseBtn.addEventListener("click", () => {
    if (Math.round(donut._count) >= Math.round(donut._multiplierCost)) {
        donut.purchaseMultiplier();
    }
    countEl.innerHTML = "Cupcakes: " +  Math.round(donut._count);
    multiplierCountEl.innerHTML = "Oven Level: " + donut._multiplierCount;
    multiplierCostEl.innerHTML = "Upgrade Cost: " + donut._multiplierCost;    if (Math.round(donut._count) <= Math.round(donut._multiplierCost)) {
        ovenEl.classList.remove("available");    
        ovenEl.classList.add("unavailable");
        ovenDivEl.classList.remove("available");
        ovenDivEl.classList.add("unavailable");
        multiplierInfoEl.classList.remove("hidden");

    }
    if (Math.round(donut._count) <= Math.round(donut._autoClickCost)) {
        bakerEl.classList.remove("available");    
        bakerEl.classList.add("unavailable");
        bakerDivEl.classList.remove("available");
        bakerDivEl.classList.add("unavailable");
        autoClickerInfoEl.classList.remove("hidden");

    }

})

setInterval(() => {
    donut._count += donut._autoClickCount * donut._makeValue;
    countEl.innerText = "Cupcakes: " + Math.round(donut._count);
    makeValueEl.innerHTML = "Click Value: " + (Math.round(donut._makeValue * 1000000) / 1000000);
    autoClickerCostRemainderEl.innerHTML = "You only need " + (Math.round(donut._autoClickCost) - Math.round(donut._count)) + " more cupcakes to upgrade!"
    if (Math.round(donut._count) >= Math.round(donut._multiplierCost)) {
        ovenEl.classList.remove("unavailable");    
        ovenEl.classList.add("available");
        ovenDivEl.classList.remove("unavailable");
        ovenDivEl.classList.add("available");
        multiplierInfoEl.classList.add("hidden");

    }
    if (Math.round(donut._count) >= Math.round(donut._autoClickCost)) {
        bakerEl.classList.remove("unavailable");    
        bakerEl.classList.add("available");
        bakerDivEl.classList.remove("unavailable");
        bakerDivEl.classList.add("available");
        autoClickerInfoEl.classList.add("hidden");

    }
}, 1000);


