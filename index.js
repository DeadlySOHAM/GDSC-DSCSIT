// Disable Right Click
document.oncontextmenu = new Function("return false;");


const nav = document.getElementById('navbar') ;
const hamIcon = () => nav.classList.toggle('active') ;

const a = document.getElementById('mode') ;

a.addEventListener("click",(event)=>{
   if(a.innerHTML == "Dark" )
      a.innerHTML = "Light" ;
   else
      a.innerHTML = "Dark" ;   
   let v = document.getElementsByTagName('body');
   for(let i=0;i<v.length;i++)
      v[i].classList.toggle("light");
}) ;

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