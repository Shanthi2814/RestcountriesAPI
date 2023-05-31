
let heading = document.createElement("h1");

heading.setAttribute("id","title");

heading.setAttribute("class","text-center");

heading.innerHTML = "Rest Countries-API";

document.body.append(heading);

const Container1 = document.createElement("div");

Container1.setAttribute("class","container");

Container1.setAttribute("id","hidden")

document.body.append(Container1);

const Row = document.createElement("div");

Row.classList.add("row");

Container1.append(Row);

async function countryAPI(){

   const countries = await fetch("https://restcountries.com/v3.1/all");

   const data = await countries.json();
   
   data.forEach(country => { 
    
   const Column1 = document.createElement("div");

   Column1.setAttribute("class","col-4 col-sm-6 col-md-4 col-lg-4 col-xl-4 g-5");

   const card1 =document.createElement("div");

   card1.setAttribute("class","card h-100 ");

   card1.setAttribute("style","width: 18rem;");

   card1.innerHTML = ` 
       <div class="card-header">
           <h4 class="card-text">${country.name.common}</h4>
       </div>
       <img class="card-img-top" src="${country.flags.png}" alt="">
       <div class="card-body">
         <div class="card-text">
         <h6>Capital: ${country.capital}</h6>
           <h6>Region : ${country.region}</h6>
           <h6>Country Code: ${country.cca3}</h6>
         </div>
       </div>`;


   const button = document.createElement("button");

   button.classList.add("btn", "btn-primary");

   button.textContent = "Click for Weather";

   card1.append(button);

   Column1.append(card1);

   Row.append(Column1);

 button.addEventListener("click", weatherReport); 


 async function weatherReport(){

   const weather = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=a5004c345143bf373b4af35556f3cb5c
   `);
   const weatherData = await weather.json();

   document.getElementById("hidden").innerHTML = ""; 

   const Container2 = document.createElement("div");

   Container2.setAttribute("class","container");

   document.body.append(Container2);
   
   let Row2 = document.createElement("div");

   Row2.classList.add("row","g-3","container");

   Container2.append(Row2);

   let Column2 = document.createElement("div");

   Column2.setAttribute("class","col col-lg-4 col-sm-12");

   Row2.append(Column2);

   let card2 =document.createElement("div");

   card2.setAttribute("class","card h-100");

   card2.setAttribute("style","width: 18rem;");

   card2.innerHTML = ` <div class="card-header">

     <h4 class="card-text">${country.name.common}</h4>

     </div>
        <img src="${country.flags.svg}" alt="">
       <div class="card-body">
       <h6 class="card-text">Temp-Max: ${weatherData.main.temp_max}</h6>
       <h6 class="card-text">Temp-Min: ${weatherData.main.temp_min}</h6>
      </div>`;
   Column2.append(card2);

   let button1 = document.createElement("button");

   button1.setAttribute("class","btn btn-primary");

   button1.innerText = "Reset";

   card2.append(button1);

   button1.addEventListener("click",()=>{

     location.reload()
   })
}
});
}
countryAPI()