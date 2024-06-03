import { initializeApp } from "+fui"


console.log(add(122,1))

const appSettings ={
    databaseURL : "https://check-list-19eb3-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const inputFieldEl =document.getElementById("input-field")
const addButtonEl =document.getElementById("add-button")

addButtonEl.addEventListener("click",function () {
    let inputValue =inputFieldEl.value
    console.log(inputValue)

})