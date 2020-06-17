export default class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this._id = price + 150
    }
}