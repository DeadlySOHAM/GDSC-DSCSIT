const blogList = [
   {
      title : "How to Become a Pirate King" ,
      description :"In this we would give You a brief routemap to become a Pirate king in 2020",
      blogImg : "https://i.ytimg.com/vi/_fvsf1zln4k/maxresdefault.jpg",
      speakerName : "Gold D Roger",
      speakerImg : "https://api.duniagames.co.id/api/content/upload/file/3918607211609322898.jpg" ,
   },
   {
      title : "How to Fuck the World" ,
      description :"A giude to fuck this world",
      blogImg : "https://i.pinimg.com/originals/1c/64/a1/1c64a139e9714037e5bc87495fc7bffb.jpg",
      speakerName : "Madara Uchiha",
      speakerImg : "https://preview.redd.it/efj7lyd8k6u61.jpg?auto=webp&s=a65ca6e29d62bbcff3cba2d3a340771bffb72831" ,
   },
   {
      title : "Proper Way to Navigate Routes" ,
      description :"We will have a short meeting where we will se how we can be a professional Navigator",
      blogImg : "https://previews.123rf.com/images/scanrail/scanrail1209/scanrail120900017/15523805-gps-navigation-tourism-and-travel-route-planning-concept-color-city-map-and-blue-magnetic-compass-ic.jpg",
      speakerName : "Roranoa Zoro",
      speakerImg : "https://api.duniagames.co.id/api/content/upload/file/6273775381578653278.jpg" ,
   },
   {
      title : "Daily Diet",
      description : "We will guide how much , when and what to eat to lead a healthy loif style .",
      blogImg : "https://i.pinimg.com/originals/32/a7/b1/32a7b1ce361ee73c4feb0eb41ebd1143.jpg",
      speakerName : "Monkey D Luffy",
      speakerImg : "https://i.pinimg.com/550x/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" ,
   },
   {
      title : "How to Become Responsible",
      description : "In this we will guide about what is Responsibility how to become responsible",
      blogImg : "https://cutewallpaper.org/21/little-naruto/Little-naruto-so-cute-Naruto-cute-Kid-naruto-Naruto-kakashi.jpg",
      speakerName : "Sarutobi Hiruzen",
      speakerImg : "http://pm1.narvii.com/6591/6625ec1a6dc54a7acfe1bbc0e0bec3dfdc20b061_00.jpg" ,
   },
   {
      title : "Art and Creativity",
      description : "In this we will get to know about art and creativity .",
      blogImg : "https://static1.comicvine.com/uploads/original/11117/111173561/5104041-2595438628-0c1ac.jpg",
      speakerName : "Deidara",
      speakerImg : "https://i.imgflip.com/5jjuyv.jpg" ,
   },
]




















var i=0 ;

const Cards = document.getElementById('Cards');

window.addEventListener('scroll',()=>{
   const {scrollHeight,scrollTop,clientHeight}=document.documentElement ;
   if( scrollTop+clientHeight >= (scrollHeight-100))
      show(i+3);
}) ;


window.onload = show(i+2) ;


function show(x)
{
   while( x-i>=0 && i<blogList.length)
   {
      render(blogList[i++]) ;
   }
}


function render(x)
{
   let element = " <section class=\"spaceBetween\" ></section> \
      <section class=\"Card\"> \
         <section class=\"InsideCard\"> \
            <section class=\"Image\"><img src=\""+x.blogImg+"\" /></section> \
            <h1 class=\"title\">"+x.title+"</h1> \
            <section class=\"Description\">"+x.description+"</section> \
            <section class=\"Speaker\"> \
               <img src=\""+x.speakerImg+"\"/> \
               <section class=\"SpeakerName\">"+x.speakerName+"</section> \
            </section> \
         </section> \
      </section>" ;

   Cards.insertAdjacentHTML("beforeend",element);
}
