class Donut{
    constructor() {
        this._count = 0;
    }

    get count() {
        return this._count;
    }

    click() {
        this._count++;
    }

}

export default Donut;