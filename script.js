//  offer banner
let offer = document.querySelector(".offer")
let closeX = document.getElementById("Xbtn")

closeX.addEventListener("click", ()=> {
    offer.style.display= "none"
}
)
// side navbar
let navIcon = document.getElementById("navicon")
let navClose = document.getElementById("navclose")
let sideNav = document.querySelector(".sidenav")

navIcon.addEventListener("click",function() {
    sideNav.style.left = 0
}
)
navClose.addEventListener("click", function() {
    sideNav.style.left = "-40%";
});

// Collection page search Functionality

let search = document.getElementById("search")
let container = document.querySelector(".shirt__images-1")
let collectionList = document.querySelectorAll(".shirt__images__s1")

search.addEventListener("keypress", ()=> {
    var enteredValue = event.target.value.toUpperCase()
    console.log(enteredValue)

    for( i=0; i<collectionList.length; i++) {
       var productName = collectionList[i].querySelector("h2").textContent

       if (productName.toUpperCase().indexOf(enteredValue) <0) {
            collectionList[i].style.display = "none"
       } else {
        collectionList[i].style.display = "block"
       }
    }

}
)



