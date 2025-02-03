let integ=document.querySelector(".item1")
let diff=document.querySelector(".item2")
let integP=document.querySelector(".item3")
let diffP=document.querySelector(".item4")
let cal=document.querySelector(".item5")
let mean=document.querySelector(".item6")
let median=document.querySelector(".item7")
let prime=document.querySelector(".item8")
let feedback=document.querySelector(".button")

integ.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/integration.html")
})
diff.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/diferential.html")
})
integP.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/integration2.html")
})
diffP.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/differential2.html")
})
cal.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/calculator.html")
})
mean.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/mean.html")
})
median.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/median.html")
})
prime.addEventListener("click",()=>{
    window.open("http://127.0.0.1:5500/primenumber.html")
})
feedback.addEventListener("click",()=>{
    alert("Thank's for sharing your feedback!")
})