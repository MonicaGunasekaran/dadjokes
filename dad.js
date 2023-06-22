const btnE1=document.getElementById("btn")
const apikey="EFsgb14BBeCrRvZEIN1+Rw==EIBI7NoiwQBllKuj";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apikey
    }
}
const jokeEle=document.getElementById("joke")
//var limit = 3
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
//     headers: { 'X-Api-Key': 'EFsgb14BBeCrRvZEIN1+Rw==EIBI7NoiwQBllKuj'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){
try {   jokeEle.innerText="wait to laugh"
btnE1.disabled=true
btnE1.innerText="Loading.."
const response=await fetch(apiURL,options)
const data=await response.json()
// console.log(data[0].joke)
jokeEle.innerText=data[0].joke;
btnE1.innerText="Generate Joke"
btnE1.disabled=false

}
     catch (error) {
    jokeEle.innerText="Oops! Looks like the internet went on vacation without you"
    
}

}
btnE1.addEventListener("click",getjoke)
