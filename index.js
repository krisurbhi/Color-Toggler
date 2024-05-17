var btn = document.querySelector('#btn')
var b1 = document.querySelector('#b1')
var b2 = document.querySelector('#b2')
var b3 = document.querySelector('#b3')
var he1 = document.querySelector('#b1 h2')
var p1 = document.querySelector('#b1 p')
var he2 = document.querySelector('#b2 h2')
var p2 = document.querySelector('#b2 p')
var he3 = document.querySelector('#b3 h2')
var p3 = document.querySelector('#b3 p')
btn.addEventListener('click', function(){
    if(b1.style.background == 'blueviolet')
    {
        b1.style.background='pink'
        he1.innerText='PINK'
        p1.innerText='Colour changed to Pink'
    }
    else{
        b1.style.background='blueviolet'
        he1.innerText='BlueViolet'
        p1.innerText='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nihil.'
    }
})
btn.addEventListener('click', function(){
    if(b2.style.background == 'green')
    {
        b2.style.background='yellow'
        he2.innerText='YELLOW'
        p2.innerText='Colour changed to Yellow'
    }
    else{
        b2.style.background='green'
        he2.innerText='Green'
        p2.innerText='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nihil.'
    }
})
btn.addEventListener('click', function(){
    if(b3.style.background == 'blueviolet')
    {
        b3.style.background='blue'
        he3.innerText='BLUE'
        p3.innerText='Colour changed to Blue'

    }
    else{
        b3.style.background='blueviolet'
        he3.innerText='BlueViolet'
        p3.innerText='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nihil.'
    }
})
