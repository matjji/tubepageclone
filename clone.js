const toggleBtn = document.querySelector(".contents-titleandbutton .contents-title__button");
const titlehidden = document.querySelector(".contents-titleandbutton .contents-title");

toggleBtn.addEventListener("click", () => {
    titlehidden.classList.toggle("hidden");
    toggleBtn.classList.toggle("clicked");
});


const tag1 = document.getElementById("#IU");
const tag2 = document.getElementById("#K-Musician")
const tagcontent1 = tag1.innerText.substr(1,10);
const tagcontent2 = tag2.innerText.substr(1,10);


function gotoTag1(event) {
    tag1.href=(`https://www.youtube.com/hashtag/${tagcontent1}`);
}
function gotoTag2(event){
    tag2.href=(`https://www.youtube.com/hashtag/${tagcontent2}`);
}
tag1.addEventListener("click", gotoTag1);
tag2.addEventListener("click", gotoTag2);


const subBtn = document.querySelector(".subscribe");
subBtn.addEventListener("click", ()=>{
    subBtn.style.color="rgba(0,0,0,0.6)"
    if(subBtn.innerText === "SUBSCRIBE"){
        subBtn.innerText = "SUBSCRIBING"
    } else{
        subBtn.innerText = "SUBSCRIBE"
        subBtn.style.color = "red"
    }
})