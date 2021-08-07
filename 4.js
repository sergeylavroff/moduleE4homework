// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

var socket = new Array();

function Electrical(name, power){
    this.plugged = 'no',
    this.power = power,
    this.name = name
};

Electrical.prototype.plugIn = function(socket){
    this.plugged = 'yes',
    socket.push(this)
};

Electrical.prototype.plugOut = function(socket){
    this.plugged = 'no';
    arrayRemove(socket, this)
};


function arrayRemove(arr, value) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            arr.splice(i, 1)
        }
    } 
};

function consumedPower(socket){
    var consumed = 0;
    socket.forEach((i) => {
        if(i.plugged == 'yes'){
            consumed = consumed + i.power
        }
    });
    return consumed;
}

const lamp = new Electrical('lamp', 80)
const pc = new Electrical('pc', 250)
const fan = new Electrical('fan', 50)

lamp.plugIn(socket)
fan.plugIn(socket)


console.log(consumedPower(socket));

pc.plugIn(socket);

console.log(socket);
fan.plugOut(socket);

console.log(socket);
console.log(consumedPower(socket));
