
//Filtro de Productos

const filtroBtn = document.querySelector("#filtroBtn").children;
const items = document.querySelector(".containers").children;

for (let i = 0; i < filtroBtn.length; i++) {
    filtroBtn[i].addEventListener("click", function () {
        for (let j = 0; j < filtroBtn.length; j++) {
            filtroBtn[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")
   
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "Todos") {
                items[k].style.display = "block";
            }
        }
   
    }) }