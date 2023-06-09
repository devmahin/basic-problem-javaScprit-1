function getNumber (min, max){

    return Math.floor(Math.random() * (max - min +1)) + min;
}

console.log(getNumber(1,1000))








const array = ["Mahin", "Adib", "Tushar", "Johir", "Sazzad", "Antor"]

console.log(array.sort())


const rollNum =[3,4,1,4,2,5,6,7,98]
console.log(rollNum.sort((a,b)=> {
    return a-b
}))



// leap years 
function leapYear (year){
    if(year % 400 === 0 || (year % 4 === 0 ) && (year %100 !== 0)){
        console.log(`${year} is a leap year`)
    }
    else{
       console.log( `${year} is not a leap year`)
    }
}
leapYear(1832)




////// vowels chake 

const vowels = ["a", "b", "c", "d", "e" , "A", "B", "C", "D", "E"]
function countVowels(sentence){
    let count = 0 ;
    const letters = Array.from(sentence)

    letters.forEach( (value, index, array) => {
        if(vowels.includes(value) ){
            count++
        }
    })
    return count
  
}
console.log(countVowels("I love you Bangladesh."))




////// dublicate array kivabe ber kore anb
const numbers = [1,2,3,4,1,2,3,4,5,6,7,8,6,7,9]

const num = numbers.filter((value, index, array)=> {
    return array.indexOf(value) !== index 
 })

 console.log(num)







///// sumit koto bar ace sentence er vitore 
let sen = "Lorem sumit ipsum dolor sit, amet consectetur adipisicing elit. Animi iusto accusantium numquam sumit pariatur nobis laboriosam nulla suscipit dolores? Velit, et earum cupiditate cumque sumit quisquam aspernatur repudiandae ab, provident vitae itaque doloribus perferendis sumit praesentium assumenda numquam dolorum reprehenderit. Doloremque laborum adipisci, dignissimos quo eius exercitationem! Reiciendis laudantium doloribus ad facere quasi!";

let sentenceMatch = sen.match(/sumit/gi)
let sentenceCount = sentenceMatch ? sentenceMatch.length : false;
// console.log(sentenceCount)


////search
let position = sen.search(/sumit/i)
position= position >= 0? position : "Not found;"
console.log(position)



//////linearSearch(["a","b","c"], "c")


function linearSearch(arr, val){
    const length = arr.length
    for(i=0; i<length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return "Not Found!"
}

console.log(linearSearch(["a","b","c","d"], "b"))






///// sob theke boro string ber kora 
function longesString (names){
    let longesWord = "";

    for(name of names){
        if(name.length > longesWord.length ){
            longesWord = name ;
        }
    }
    return [longesWord,names.indexOf(longesWord) ]

}
console.log(longesString(["Mahin","sumit","hablu","learn with sumit", "hablu programmer", "pro coder"])
)






////fizzBazz
// function fizzBazz(number){
//     for( i=1 ; i<=number; i++){
//         if(i % 15 === 0){
//             console.log(`${i} is fizzBuzz`)
//         }
//         else if (i % 3 === 0){
//             console.log(`${i} is Fizz`)
//         }
//         else if (i % 5 === 0){
//             console.log(`${i} is Buzz`)
//         }
//         else{
//             console.log(i)
//         }
//     }
// }
// fizzBazz(100)








const mixedArr= [
    "lws",
    undefined,
    "lear with mahin",
    false,
    016,
    "",
    "thanks all",
    true,
    NaN

]

// const trueArray = mixedArr.filter((el) => {
//     if(el){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(trueArray)












const trueArray = mixedArr.filter(Boolean)
console.log(trueArray)

const mixedobj= {
    a:  "lws",
    b:  undefined,
    c:  "lear with mahin",
    d:  false,
    e:  016,
    f:  "",
    g:  "thanks all",
    h:  true,
    i:  NaN

}

const truthyObject = function (obj){
    for(let i in obj){

        if(!obj[i]){
            delete obj[i]
        }
    }
    return obj
}
console.log(truthyObject(mixedobj))