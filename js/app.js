import Donut from "./Donut.js"
// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');
const countEl = document.querySelector("#count");
const donut = new Donut();

countEl.innerHTML = donut.count;

const makeBtn = document.querySelector("#make");
makeBtn.addEventListener("click", () => {
    donut._count++;
    countEl.innerHTML = donut._count;
})

