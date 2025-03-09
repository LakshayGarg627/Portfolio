var typed=new Typed(".text",{
    strings:["FrontEnd Developer","Java-Programmer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});

var typed1=new Typed(".text-1",{
    strings:[" My Services"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});

var typed2=new Typed(".text-2",{
    strings:["About Me","Who am I ?"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});

var typed2=new Typed(".text-3",{
    strings:["My Work","Projects made by me"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});


var skillslinks=document.getElementsByClassName("skills-links");
var skillscontents=document.getElementsByClassName("skills-content");

function opentab(tabname){
for(slink of skillslinks){
    slink.classList.remove("active-link");
}
for(scontent of skillscontents){
    scontent.classList.remove("active-content");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-content");

}

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
