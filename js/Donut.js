class Donut{
    constructor() {
        this._count = 90;
        this._autoClickCount = 0;
        this._autoClickCost = 100;
    }

    get count() {
        return this._count;
    }
    get aCCount() {
        return this._aCCount;
    }

    click() {
        this._count++;
    }

    purchaseAutoClicker() {
        if (this._count >= this._autoClickCost) {
            this._count -= this._autoClickCost;
            this._autoClickCost *= 1.1;
            this._autoClickCount++;
        }
        else {
            alert("Oops! You need " + (this._autoClickCost - this._count) + " more donuts to purchase this!");
        }
        


    }

}

export default Donut;