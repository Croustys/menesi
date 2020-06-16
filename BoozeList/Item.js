export default class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this._id = Math.random() * 4986;
    }
}