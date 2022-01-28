var buttonColor = document.getElementById('change')
var colorBox = document.getElementById('color-box')


buttonColor.addEventListener('click' , () =>{
    var rgb1 = Math.floor(Math.random() * 255).toString()
    var rgb2 = Math.floor(Math.random() * 255).toString()
    var rgb3 = Math.floor(Math.random() * 255).toString()
    colorBox.style.backgroundColor = `rgb(${rgb1},${rgb2},${rgb3})`
})

