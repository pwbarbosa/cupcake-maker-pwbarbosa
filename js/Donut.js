class Donut{
    constructor() {
        this._count = 90;
        this._autoClickCount = 0;
        this._autoClickCost = 100;
        this._multiplierCount = 0;
        this._multiplierCost = 10;
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
            this._count -= this._autoClickCost;
            this._autoClickCost *= 1.1;
            this._autoClickCount++;
            alert(Math.round(this._autoClickCost));               
    }

    purchaseMultiplier() {
        this._count -= this._multiplierCost;
        this._multiplierCost *= 1.1;
        this._multiplierCount++;
        alert(Math.round(this._multiplierCost));               
     }




    
    

}

export default Donut;