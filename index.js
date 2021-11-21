// ----------------------------- Disabling inspect options

document.onkeydown = function(e) {
   if(event.keyCode == 123) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
   }
 }
   document.oncontextmenu = () =>{ return false ;}
   
//  --------------------------------



// light / Dark mode
const a = document.getElementById('mode') ;

a.addEventListener("click",(event)=>{
   if(a.innerHTML == "Dark" )
      a.innerHTML = "Light" ;
   else
      a.innerHTML = "Dark" ;   
   let v = document.getElementsByTagName('body');
   for(let i=0;i<v.length;i++)
   {
      v[i].classList.toggle("light");
      v[i].classList.toggle("dark");
   }
}) ;



// heading glow on/of
const y = document.getElementById('glow_h1') ;

y.addEventListener("click",(event)=>{
   if(y.innerHTML == "Glow" )
      y.innerHTML = "No Glow" ;
   else
      y.innerHTML = "Glow" ;   
   let v = document.getElementsByTagName('body');
   for(let i=0;i<v.length;i++)
      v[i].classList.toggle("glow_h1");
}) ;



// button glow on/off
const z = document.getElementById('glow_btn') ;

z.addEventListener("click",(event)=>{
   if(z.innerHTML == "Glow Button" )
      z.innerHTML = "No Glow" ;
   else
      z.innerHTML = "Glow Button" ;   
   let v = document.getElementsByTagName('body');
   for(let i=0;i<v.length;i++)
      v[i].classList.toggle("glow_btn");
}) ;


// Redirect to Team Page
const team = () =>  window.location.href="team.html";

//  redirect to blog page
const blog = () => window.location.href="blog.html" ;
