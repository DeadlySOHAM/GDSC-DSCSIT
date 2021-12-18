var light = localStorage.getItem("gdsc-dscsit-light-mode") ;




onload=()=>{
   if(light=="false")
      lightDarkEventHandler("false");
   else if (light==null)
      localStorage.setItem("gdsc-dscsit-light-mode","true");
}





// ----------------------------- Disabling inspect options
/*
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
   */
//  --------------------------------



// light / Dark mode
const a = document.getElementById('mode') ;

a.addEventListener("click",(event)=>{
   light = light=="true" ? "false":"true";
   lightDarkEventHandler(light);
   localStorage.setItem("gdsc-dscsit-light-mode",light);
}) ;



// heading glow on/of
const y = document.getElementById('glow_h1') ;

y.addEventListener("click",(event)=>{
   if(y.textContent == "Glow" )
      y.textContent = "No Glow" ;
   else
      y.textContent = "Glow" ;   
   let v = document.getElementsByTagName('body');
   for(let i=0;i<v.length;i++)
      v[i].classList.toggle("glow_h1");
}) ;



// button glow on/off
const z = document.getElementById('glow_btn') ;

z.addEventListener("click",(event)=>{
   if(z.textContent == "Glow Button" )
      z.textContent = "No Glow" ;
   else
      z.textContent = "Glow Button" ;   
   let v = document.getElementsByTagName('body');
   for(let i=0;i<v.length;i++)
      v[i].classList.toggle("glow_btn");
}) ;


// Redirect to Team Page
const team = () =>  window.location.href="OtherHtml/team.html";

//  redirect to blog page
const blog = () =>{ window.location.href="OtherHtml/blog.html";console.log("fuck")} ;



// Light / Dark mode Event Handler
function lightDarkEventHandler(d)
{
   if(a.textContent == "Dark" )
      a.textContent = "Light" ;
   else
      a.textContent = "Dark" ;   
   let v = document.getElementsByTagName('body');
   for(let i=0;i<v.length;i++)
   {
      v[i].classList.toggle("light");
      v[i].classList.toggle("dark");
   }
   localStorage.setItem("gdsc-dscsit-light-mode",d);
}