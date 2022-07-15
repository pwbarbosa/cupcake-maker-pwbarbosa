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
const randomClickButtonEl = document.querySelector("#randomClickButton");
const randomClickValueEl = document.querySelector("#randomClickValue");
const randomEventPromptEl = document.querySelector("#randomEventPrompt")
const containerEl = document.querySelector("#container");
const getStartedEl = document.querySelector("#getStarted");
const donut = new Donut();
let seconds = 0;
let secondsLeft = 0;
let randomClickValue = 0;

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
    getStartedEl.classList.add("hidden");
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
    randomClickButtonEl.removeAttribute("class");
    randomClickButtonEl.classList.add(`randomClickButton${Math.floor(Math.random()*4)}`)
    randomClickValue = Math.floor(Math.random()*91 + 10);
    randomClickValueEl.innerText = randomClickValue;
    randomEventPromptEl.removeAttribute("class");
    randomEventPromptEl.classList.add("randomEventPrompt");
    containerEl.removeAttribute("class");
    secondsLeft = 30;
    setTimeout(() => {
        randomClickButtonEl.removeAttribute("class");
        randomClickButtonEl.classList.add("hidden");
        randomEventPromptEl.removeAttribute("class");
        randomEventPromptEl.classList.add("hidden");
    }, 30000);
})
const randomClickBtn = document.querySelector("#randomClickImg");
randomClickBtn.addEventListener("click", () => {
    donut._count += randomClickValue;
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
    randomClickButtonEl.removeAttribute("class");
    randomClickButtonEl.classList.add(`randomClickButton${Math.floor(Math.random()*4)}`);
    randomClickValue = Math.floor(Math.random()*91 + 10);
    randomClickValueEl.innerText = randomClickValue;

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
        getStartedEl.removeAttribute("class");

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
    if (seconds == Math.floor(Math.random()*200+30) && secondsLeft<=0){
        clickStormButtonEl.classList.remove("hidden");
        clickStormButtonEl.classList.add("clickStormButtonClass");
        containerEl.classList.add("containerBlur");
    }
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
}, 1000);


