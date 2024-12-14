var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var popupcancel=document.querySelector(".popup-cancel")
popupcancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var popuptitle=document.getElementById("popup-title")
var popupauthor=document.getElementById("popup-author")
var popupdescription=document.getElementById("popup-description")
var popupadd=document.querySelector(".popup-add")
var popupcontainer=document.querySelector(".container")
popupadd.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-authored")
    div.innerHTML=`<h2>${popuptitle.value} </h2>
    <h3>${popupauthor.value}</h3>
    <p>${popupdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    popupcontainer.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()

}
