var group = "<section id=\"special_button\"><button  class=\"link\" onclick=goTo(1)>Group 1</button>\
<button class=\"link\" onclick=goTo(2)>Group 2</button></section>";

var x = document.getElementById('whatsappIcon') ;

const showGroups = () => x.innerHTML = group ;

function goTo(n)
{
   switch(n)
   {
      case 1:// whatsapp group 1
         window.location.href="https://chat.whatsapp.com/BzHyFq8rdilAs3it6nTal2" ;
      break;
     
      case 2://whatsapp group 2
         window.location.href= "https://chat.whatsapp.com/COhg3aZyB975z5CTigFxfT" ;
      break;
      case 3:// Insta
         window.location.href="https://instagram.com/dsc_dscsit?utm_medium=copy_link";
      break
      case 4:// Twitter
         window.location.href="https://twitter.com/dsc_dscsit";
      break
      case 5:// Facebook
         window.location.href="https://www.facebook.com/dsc.dscsit/";
      break
      case 6:// Discord
         window.location.href="https://discord.gg/yFGN4nAB";
      break
      case 7:
         window.location.href="https://www.youtube.com/channel/UCszOOylVmsbKjpXoZBP8cbg";
   }
}