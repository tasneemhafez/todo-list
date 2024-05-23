const inputBox =document.getElementById("input-Box");
const listacontainer = document.getElementById("lista-container");

function addTask(){
    if(inputBox.value === ""){
        document.querySelector("h3").style.display="block"
    }
    else{
        document.querySelector("h3").style.display="none"
        let li = document.createElement("li");
        li.innerHTML =inputBox.value;
        listacontainer.appendChild(li);
        inputBox.value ="";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData()
}

listacontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(
        e.target.tagName === "SPAN"){
            e.target.parentElement.remove()
            saveData()

    }

}
,false
);
function saveData(){
    localStorage.setItem("data",listacontainer.innerHTML);
}

function showlist(){
    listacontainer.innerHTML = localStorage.getItem("data");
}
showlist()