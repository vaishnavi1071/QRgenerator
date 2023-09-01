// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
const imgText= document.querySelector("#qrText");
const qrlImage= document.querySelector("#imgbox");
const qrl = document.querySelector("#qrlimage");
const button = document.querySelector("button")


function  generator(){

qrl.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ 
imgText.value;
imgbox.classList.add("show-img");


}

button.addEventListener("click" ,()=>{
generator();
})
