let text = document.getElementById('text')
let Downloadbutton = document.getElementById('button')
let imgBox = document.getElementById('imgBox')
let qrImg = document.getElementById('qr-img')
let sizes = document.getElementById("size");

function getQR(){
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${sizes.value}x${sizes.value}&data=${text.value}`
    imgBox.classList.add('show-img')
}

Downloadbutton.addEventListener('click',()=>{
    getQR()
})