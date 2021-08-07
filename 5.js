// Переписать консольное приложение из предыдущего юнита на классы.

class Socket{
    constructor(name){
        this.name = name;
        this.array = new Array();
    };

    listPluggedIn(){
        var outStr = 'This socket gives power to ';
        if(this.array.length > 0){
            this.array.forEach((i) => {
               outStr = outStr.concat(i.name + ' ')
            })
        }else{ outStr = outStr.concat('nothing.')}
        return outStr;
    }

    consumedPower(){
        var consumed = 0;
        this.array.forEach((i) => {
            if(i.plugged == 'yes'){
                consumed = consumed + i.power
            }
        });
        return `Devices pluged in this socket consume ${consumed} Watts.`;
    }

    deviceRemove(value) {
        for (let i = 0; i < this.array.length; i++){
            if (this.array[i] === value){
                this.array.splice(i, 1)
            }
        } 
    }


}

class Electrical{
    constructor(name, power){
        this.plugged = 'no',
        this.power = power,
        this.name = name
    };

    plugIn(socket){
        this.plugged = 'yes',
        socket.array.push(this)
    };

    plugOut(socket){
        this.plugged = 'no';
        socket.deviceRemove(this)
    };
}

const socket = new Socket('room');

const lamp = new Electrical('lamp', 80)
const pc = new Electrical('pc', 250)
const fan = new Electrical('fan', 50)

lamp.plugIn(socket)
fan.plugIn(socket)

console.log(socket.listPluggedIn())

console.log(socket.consumedPower())

pc.plugIn(socket);
console.log(socket.listPluggedIn())

fan.plugOut(socket);
console.log(socket.listPluggedIn())

console.log(socket.consumedPower());