// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

function hasKey(key,obj){
    if (key in obj){
        return true;
    }else{return false}
}

const obj = {a:1,b:23,c:'someother'}

console.log(hasKey('a', obj))