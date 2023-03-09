const inputBox = document.querySelector("#country-name-input");
const mainSection = document.querySelector("#main-section");
const countryInfo = document.querySelector("#country-info");
const enterButton = document.querySelector("#enter-button");

// const getCountryByName = (countryName) => {
//     fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => response.json())
//     .then(data => countryInfo.innerText = JSON.stringify(data[0]));
// }

const fetchCountryByName = async (countryName) =>{
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();
    console.log(typeof jsonData);
    countryInfo.innerText = JSON.stringify(jsonData);
}

enterButton.addEventListener("click",()=>{
    fetchCountryByName(inputBox.value)
 });