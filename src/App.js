import React, { useState } from 'react'

//const api = "https://currency.jafari.li/json";


//https://api.openweathermap.org/data/2.5/weather?q=Isfahan&appid=5a873b6b606d9e2aa79aff040a0e7d63



function App() {
  const [query, setQuery] = useState('');
  const [currency, setCurrency] = useState({});
  fetch("https://currency.jafari.li/json")
  .then(res => res.json())
  .then(result => {
    setCurrency(result);
    setQuery('');
    console.log(result);
  });
  const dateBuilder = (d) => {
    let months = ["Jan" , "Feb" , "March" , "April" , "May", "June" , "july" , "August" , "Sep" , "Oct" , "Nov" , "Dec"];
    let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day} ${date} ${month} ${year}`
  }


 return(
<div className="app">
<main>

<div>
<div className="namedollar"></div>
<div className="price-box">
<div className="date">{currency.LastModified} 
</div>
<div className="dollarprice">دلار آمریکا</div>
<section class="container-main-all">
      
      <section class="priceTable-container-main">
           <div class="priceTable-column-1">
               <h3 class="priceTable-header">خرید</h3>
 <h3 class="priceTable-price">{currency[0].Sell}</h3>
 
 
               <ul class="priceTable-ul">
                   
               </ul>
           </div>
       </section>
               <section class="priceTable-container-main">
           <div class="priceTable-column-1">
               <h3 class="priceTable-header">فروش</h3>
 <h3 class="priceTable-price">12</h3>
               <ul class="priceTable-ul">
                   
               </ul>
           </div>
       </section>
   </section>
</div>
</div>


</main>




</div>

 );
}

export default App;