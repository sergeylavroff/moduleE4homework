//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
//Данная функция не должна возвращать значение.

function listOwnKeys(obj){
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            console.log(i)
        }
    }
}


const obj = {a:1,b:23,c:'someother'}

const obj2 = Object.create(obj)

obj2.d = 'smthOther'

listOwnKeys(obj2)