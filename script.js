const inputBox = document.querySelector("#country-name-input");
const mainSection = document.querySelector("#main-section");
const countryInfo = document.querySelector("#country-info");
const enterButton = document.querySelector("#enter-button");
const allCountriesButton = document.querySelector("#all-countries-button");

const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => countryInfo.innerText = data[0].name.common +" has a population of : "+data[0].population);
 }

const fetchCountryByName = async (countryName) =>{
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    countryInfo.innerText = countryInfo.innerText = data[0].name.common +" has a population of : "+data[0].population;
}

enterButton.addEventListener("click",()=>{
    fetchCountryByName(inputBox.value)
 });

 const fetchAllCountries = async () =>{
    countryInfo.innerHTML = ""
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    for (let country of data){
        countryData = document.createElement("p");
        countryData.innerText = country.name.common +" has a population of : "+country.population;
        countryInfo.appendChild(countryData);
    }
 }
allCountriesButton.addEventListener("click",()=>{
    fetchAllCountries();
})