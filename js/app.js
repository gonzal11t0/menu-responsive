const bmore=document.querySelector("#bmore");
const links=document.querySelector("#links");
bmore.addEventListener("click", (e)=>{
    links.classList.toggle("collapse");
});