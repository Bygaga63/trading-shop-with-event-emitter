class TraidingShop {
    _price;

    constructor(initialPrice) {
        this._price = initialPrice;
    }

    priceUp = (newValue) => {
        const isIncreased = newValue > this._price;
        this._price = newValue;
        EventEmitter.emit('update', {price: this._price, isIncreased});
    };

    priceDown = (newValue) => {
        const isIncreased = newValue > this._price;
        this._price = newValue;
        EventEmitter.emit('update', {price: this._price, isIncreased});
    };
}
