// App Dev Member
const app_dev_member = [
   {
      name:"Md Zaid Siddique" ,
      img : "assets/Members/App Dev/Zaid.jfif " ,
   },
   {
      name:"Ekhagni Mukherjee" ,
      img : "assets/Members/App Dev/Ekhagni.jfif " ,
   },

] ;


// Cloud Platform
const cloud_platform_members = [
   {
      name:"Anusha Bera",
      img:"assets/Members/Cloud Platform/Anusha.jfif",
   },
] ;


// Competitive Coding
const competitive_coding_members = [
   {
      name:"Sugato" ,
      img:"assets/Members/Competitive Coding/Sugato.jfif" ,
   },
] ;


//   Design Member
const design_member = [
   {
      name : "Subhanjan Dutta" ,
      img : "assets/Members/Design/Subhanjan.jfif" ,
   } ,
   {
      name : "Ankit Saha" ,
      img : "assets/Members/Design/Ankit_2.jfif" ,
   },
 ] ;



// Outreach
const outreach_members = [
   {
      name:"Snehapriya Jha" ,
      img:"assets/Members/Outreach/Snehapriya.jfif" ,
   } ,
] ;


// Problem Solving
const problem_solving_members = [
   {
      name:"Anubhav Mishra" ,
      img:"assets/Members/Problem Solving/Anubhav.jfif" ,
   },
];


// Program Management
const program_management_members = [
   {
      name:"Soumita Basu",
      img:"assets/Members/Program Management/Soumita.jfif" ,
   },
]


// Public Relation
const public_relation_members = [
   {
      name:"Rimika Chowdhary" ,
      img:"assets/Members/Public Relations/Rimika.jfif",
   },
]


// Web Dev
const web_dev_Members = [
   {
      name : "Soham Saha" ,
      img : "assets/Members/Web Dev/Soham.jfif" ,
   },
]




// Woman Empowerment
const woman_empowerment_members = [
   {
      name : "Abhishikta Pradhan" ,
      img:"assets/Members/Woman Empowerment/Abhishikta.jfif" ,
   },
   // {
   //    name : "MotherFuker Chuitya" ,
   //    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5Y9449ctL2wjAbYL4Df8AsCDSU1onuqAbA&usqp=CAU" ,
   // },
] ;


// On Screen Display


onload = () => show() ;

const coreMembers = document.getElementById('coreMembers') ;




function show()
{
   //  ( heading , id )
   make("App Developers" ,"appDev") ;
   make("Cloud Platform","cloudPlatform") ;
   make("Competitive Coding ","competitiveCoding") ;
   make("Design","Design") ;
   make("Outreach","outreach") ;
   make("Problem Solving","problemSolving") ;
   make("Program Management","programManagement") ;
   make("Public Relations","publicRelation") ;
   make("Web Developers","webDev");
   make("Woman Empowerment","womanEmpowerment") ;


   const appDev = document.getElementById('appDev') ;
   const cloudPlatform = document.getElementById('cloudPlatform') ;
   const competitiveCoding = document.getElementById('competitiveCoding') ;
   const design = document.getElementById('Design') ;
   const outreach = document.getElementById('outreach') ;
   const problemSolving = document.getElementById('problemSolving') ;
   const programManagement = document.getElementById("programManagement");
   const publicRelation = document.getElementById("publicRelation");
   const webDev = document.getElementById("webDev");
   const womanEmpowerment = document.getElementById("womanEmpowerment");


   //    (place , list)
   render(appDev,app_dev_member) ;
   render(cloudPlatform,cloud_platform_members) ;
   render(competitiveCoding,competitive_coding_members) ;
   render(design,design_member) ;
   render(outreach,outreach_members) ;
   render(problemSolving,problem_solving_members) ;
   render(programManagement , program_management_members) ;
   render(publicRelation , public_relation_members) ;
   render(webDev , web_dev_Members ) ;
   render(womanEmpowerment , woman_empowerment_members ) ;

}

function make(heading , id )
{
   let element = "<h1 class=\"heading\">"+heading+"</h1> \
   <section class=\"Members\" id=\""+id+"\">  </section>" ;

   coreMembers.insertAdjacentHTML("beforeend",element) ;
}


function render(tag,x)
{
   for (let i=0;i<x.length;i++)
   {
      let element = "<section class=\"card\"><img src=\" "+x[i].img+"\" alt=\" "+x[i].name+"\"><section>"+x[i].name+"</section></section>" ;
      tag.insertAdjacentHTML("beforeend",element) ;
   }
}