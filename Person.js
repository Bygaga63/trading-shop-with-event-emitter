class Person {
    _name;
    _maxStockPrice;
    _stockAmount = 0;
    _wallet;


    constructor(name, maxStockPrice, wallet) {
        this._name = name;
        this._maxStockPrice = maxStockPrice;
        this._wallet = wallet;
    }

    updateHandler = ({price, isIncreased}) => {
        if (isIncreased) {
            this.sellStocks(price);
        } else {
            this.buyStocks(price)
        }
    };

    buyStocks = (price) => {
        const canBuy = this._maxStockPrice > price && this._wallet > price;
        if (canBuy) {
            this._stockAmount++;
            this._wallet -= price;
        }
    };

    sellStocks(price) {
        if (this._stockAmount > 0){
            this._stockAmount--;
            this._wallet += price;
        }
    }

    print = () => {
        console.log(`
        name: ${this._name} 
        amount: ${this._stockAmount}
        wallet: ${this._wallet}
        `);
    };


}
