const dima = new Person('Dima', 400, 5000);
const kata = new Person('Kata', 200, 1000);

const stock = new TraidingShop(199);

const button = document.getElementById('b');
const input = document.getElementById('i');

button.onclick = () => {
    const value = parseInt(input.value);
    if (value < 0){
        stock.priceDown(Math.abs(value))
    }  else {
        stock.priceUp(value);
    }
};

EventEmitter.on('update', dima.updateHandler);
EventEmitter.on('update', kata.updateHandler);
EventEmitter.on('update', dima.print);
EventEmitter.on('update', kata.print);

