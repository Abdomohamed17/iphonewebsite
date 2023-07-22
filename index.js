let imgsrc=document.getElementById("imgsrc");
let img0=document.getElementById("img0");
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
let img4=document.getElementById("img4");
let container=document.getElementsByClassName("container")[0];
let link=document.getElementsByClassName("link")[0]


img0.onclick=function (){
    imgsrc.src=img0.src
    container.style.background="#000" 

}
img1.onclick=function (){
    imgsrc.src=img1.src
    container.style.background="#247ec8"

}
img2.onclick=function (){
    imgsrc.src=img2.src

    container.style.background="#1e1e1e"
}
img3.onclick=function (){
    imgsrc.src=img3.src
    container.style.background="#c79b53"

}
img4.onclick=function (){
    imgsrc.src=img4.src
    container.style.background="#c82525"
}

