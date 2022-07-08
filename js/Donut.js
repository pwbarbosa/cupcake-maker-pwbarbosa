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

    // activateAutoClicker() {
    //     setInterval(() => {
    //         for(let i = 0; i < this._autoClickCount; i++) {
    //             this._count++;
    //         }
    //     }, 1000);
    // }
    purchaseAutoClicker() {
            this._count -= this._autoClickCost;
            this._autoClickCost *= 1.1;
            this._autoClickCount++;
            alert(this._autoClickCost);        
       
    }

    
    

}

export default Donut;