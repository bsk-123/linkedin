document.querySelector(".see").addEventListener("click",function(){
    document.querySelector(".mc").style.display="inline";
    document.querySelector(".see").style.display="none";
})
var click=0
document.querySelector(".ham").addEventListener("click",function(){
    click+=1
    console.log(click)
    if(click%2!=0)
    document.querySelector(".ham-menu").style.transform = "translateX(0)" ;
    else
    document.querySelector(".ham-menu").style.transform = "translatex(-500px)"
})
