import Donut from "./Donut.js"

const countEl = document.querySelector("#count");
const autoClickCountEl = document.querySelector("#clickersPurchased");
const clickerCostEl = document.querySelector("#clickerCost");
const multiplierCountEl = document.querySelector("#multipliersPurchased");
const multiplierCostEl = document.querySelector("#multiplierCost");
const bakerEl = document.querySelector("#autoClickerPuchase");
const ovenEl = document.querySelector("#multiplierPurchase");
//baker and autoClicker synonymous
const bakerDivEl = document.querySelector("#autoClickerDiv");
//oven and multiplier synonymous
const ovenDivEl = document.querySelector("#multiplierDiv");
const makeValueEl = document.querySelector("#makeValue");
const autoClickerInfoEl = document.querySelector("#autoClickerInfo");
const multiplierInfoEl = document.querySelector("#multiplierInfo");
const autoClickerCostRemainderEl = document.querySelector("#autoClickerCostRemainder");
const multiplierCostRemainderEl = document.querySelector("#multiplierCostRemainder");
const clickStormButtonEl = document.querySelector("#clickStormButton"); 
const donut = new Donut();
let seconds = 0;
let secondsLeft = 0;
let stormClick = false;

countEl.innerHTML = "Cupcakes: " + donut.count;
autoClickCountEl.innerHTML = "Chef Level: " + donut._autoClickCount;
clickerCostEl.innerHTML = "Upgrade Cost: " + donut._autoClickCost;
multiplierCountEl.innerHTML = "Oven Level: " + donut._multiplierCount;
multiplierCostEl.innerHTML = "Upgrade Cost: " + donut._multiplierCost;
makeValueEl.innerHTML = "Click Value: " + (Math.round(donut._makeValue * 1000000) / 1000000);

const makeBtn = document.querySelector("#make");
makeBtn.addEventListener("click", () => {
    donut.click();
    resetBtn.classList.remove("hidden");
    countEl.innerText = "Cupcakes: " + Math.round(donut._count);
    autoClickerCostRemainderEl.innerHTML = "<em>You only need " + (Math.round(donut._autoClickCost) - Math.round(donut._count)) + " more cupcakes to upgrade!</em>";
    multiplierCostRemainderEl.innerHTML = "<em>You only need " + (Math.round(donut._multiplierCost) - Math.round(donut._count)) + " more cupcakes to upgrade!</em>";    
    if (Math.round(donut._count) >= Math.round(donut._multiplierCost)) {
        ovenEl.classList.remove("unavailable");    
        ovenEl.classList.add("available");
        multiplierInfoEl.classList.add("hidden");
        ovenDivEl.classList.remove("unavailable");
        ovenDivEl.classList.add("available");
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
    autoClickerCostRemainderEl.innerHTML = "<em>You only need " + (Math.round(donut._autoClickCost) - Math.round(donut._count)) + " more cupcakes to upgrade!</em>";
    multiplierCostRemainderEl.innerHTML = "<em>You only need " + (Math.round(donut._multiplierCost) - Math.round(donut._count)) + " more cupcakes to upgrade!</em>";    countEl.innerText = "Cupcakes: " + Math.round(donut._count);    
    autoClickCountEl.innerHTML = "Chef Level: " + donut._autoClickCount;
    clickerCostEl.innerHTML = "Upgrade Cost: " + (Math.round(donut._autoClickCost * 1000000) / 1000000);    
    if (Math.round(donut._count) <= Math.round(donut._multiplierCost)) {
        ovenEl.classList.remove("available");    
        ovenEl.classList.add("unavailable");
        multiplierInfoEl.classList.remove("hidden");
        if (donut._multiplierCount<1) {
            ovenDivEl.classList.remove("available");
            ovenDivEl.classList.add("unavailable");
        }
    }
    if (Math.round(donut._count) <= Math.round(donut._autoClickCost)) {
        bakerEl.classList.remove("available");    
        bakerEl.classList.add("unavailable");
        // bakerDivEl.classList.remove("available");
        // bakerDivEl.classList.add("unavailable");
        autoClickerInfoEl.classList.remove("hidden");

    }

})

const multiplierPurchaseBtn = document.querySelector("#multiplierPurchase");
multiplierPurchaseBtn.addEventListener("click", () => {
    if (Math.round(donut._count) >= Math.round(donut._multiplierCost)) {
        donut.purchaseMultiplier();
    }
    autoClickerCostRemainderEl.innerHTML = "<em>You only need " + (Math.round(donut._autoClickCost) - Math.round(donut._count)) + " more cupcakes to upgrade!</em>";
    multiplierCostRemainderEl.innerHTML = "<em>You only need " + (Math.round(donut._multiplierCost) - Math.round(donut._count)) + " more cupcakes to upgrade!</em>";
    countEl.innerHTML = "Cupcakes: " +  Math.round(donut._count);
    makeValueEl.innerHTML = "Click Value: " + (Math.round(donut._makeValue * 1000000) / 1000000);
    multiplierCountEl.innerHTML = "Oven Level: " + donut._multiplierCount;
    multiplierCostEl.innerHTML = "Upgrade Cost: " + (Math.round(donut._multiplierCost * 1000000) / 1000000);    
    if (Math.round(donut._count) <= Math.round(donut._multiplierCost)) {
        ovenEl.classList.remove("available");    
        ovenEl.classList.add("unavailable");
        // ovenDivEl.classList.remove("available");
        // ovenDivEl.classList.add("unavailable");
        multiplierInfoEl.classList.remove("hidden");

    }
    if (Math.round(donut._count) <= Math.round(donut._autoClickCost)) {
        bakerEl.classList.remove("available");    
        bakerEl.classList.add("unavailable");
        autoClickerInfoEl.classList.remove("hidden");
        if(donut._autoClickCount<1){
            bakerDivEl.classList.remove("available");
            bakerDivEl.classList.add("unavailable");
        }

    }
})

const clickStormBtn = document.querySelector("#clickStormButton");
clickStormBtn.addEventListener("click", () => {
    clickStormButtonEl.classList.remove("clickStormButtonClass");
    clickStormButtonEl.classList.add("hidden");
    stormClick = true;
    secondsLeft = 60;
})

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
        donut._count = 0;
        donut._autoClickCount = 0;
        donut._autoClickCost = 100;
        donut._multiplierCount = 0;
        donut._multiplierCost = 10;
        donut._makeValue = 1;
        countEl.innerHTML = "Cupcakes: " + donut.count;
        autoClickCountEl.innerHTML = "Chef Level: " + donut._autoClickCount;
        clickerCostEl.innerHTML = "Upgrade Cost: " + donut._autoClickCost;
        multiplierCountEl.innerHTML = "Oven Level: " + donut._multiplierCount;
        multiplierCostEl.innerHTML = "Upgrade Cost: " + donut._multiplierCost;
        makeValueEl.innerHTML = "Click Value: " + (Math.round(donut._makeValue * 1000000) / 1000000);
        ovenEl.classList.remove("available");    
        ovenEl.classList.add("unavailable");
        ovenDivEl.classList.remove("available");
        ovenDivEl.classList.add("unavailable");
        multiplierInfoEl.classList.remove("hidden");
        bakerEl.classList.remove("available");    
        bakerEl.classList.add("unavailable");
        bakerDivEl.classList.remove("available");
        bakerDivEl.classList.add("unavailable");
        autoClickerInfoEl.classList.remove("hidden");
        resetBtn.classList.add("hidden");
        seconds = 0;
})

setInterval(() => {
    //top line of code activates the autoClicker when the autoClickCount >= 1
    seconds ++;
    secondsLeft--;
    donut._count += donut._autoClickCount * donut._makeValue;
    countEl.innerText = "Cupcakes: " + Math.round(donut._count);
    autoClickerCostRemainderEl.innerHTML = "<em>You only need " + (Math.round(donut._autoClickCost) - Math.round(donut._count)) + " more cupcakes to upgrade!</em>";
    multiplierCostRemainderEl.innerHTML = "<em>You only need " + (Math.round(donut._multiplierCost) - Math.round(donut._count)) + " more cupcakes to upgrade!</em>";
    //When finished this should make a random event occur
    if (seconds == Math.floor(Math.random()*100+30) && secondsLeft<=0){
        clickStormButtonEl.classList.remove("hidden");
        clickStormButtonEl.classList.add("clickStormButtonClass");
    }
    
    while (stormClick == true && secondsLeft >= 0) {
        if
    }
    
}, 1000);


