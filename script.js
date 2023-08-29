const thermoMation= () =>
{
   const tharmometer= document.getElementById("thermo");
   tharmometer.innerHTML= "&#xf2cb";
   tharmometer.style.color= "#f9ddb1";
   
   setTimeout(() =>
   {
      tharmometer.innerHTML= "&#xf2ca";      
      tharmometer.style.color= "#f1b04c";
   }, 1000)
   
   setTimeout(() =>
   {
      tharmometer.innerHTML= "&#xf2c9";      
      tharmometer.style.color= "#ec9006";
   }, 2000)
   
   setTimeout(() =>
   {
      tharmometer.innerHTML= "&#xf2c8";      
      tharmometer.style.color= "#e27602";
   }, 3000)
   
   setTimeout(() =>
   {
      tharmometer.innerHTML= "&#xf2c7";      
      tharmometer.style.color= "#d24e01";
   }, 4000)
}

thermoMation();

setInterval(thermoMation, 5000);