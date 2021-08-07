//Написать функцию, которая создает пустой объект, но без прототипа.

function noProto(){
    const emptyObj = Object.create(null);
    return emptyObj;
}

