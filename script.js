const button = document.getElementById('button');
const abas = document.querySelectorAll(".aba");
/* const pontos = document.querySelectorAll(".ponto"); */
var contador = document.getElementById("span");

//mostrador da quantidade de notificações não vistas
contador.textContent = document.getElementsByClassName("aba").length;

// Função para marcar todas as notificações como "lido"
button.addEventListener("click", function(){
    const elements = document.getElementsByClassName("aba")
    this.style.color = "hsl(213, 31%, 87%)"
    contador.textContent = 0;
    for(let i = 0; elements.length > i; i++){
        elements[i].classList.add("lido");
    }
});

// Função para marcar uma notificação especifica como lido
document.addEventListener('DOMContentLoaded', function() {
    abas.forEach((aba) => {
        aba.addEventListener("click", function () {
            
            //impedir que a notificação fique negativa e que tire a notificação duas vezes
            var classeExiste = aba.classList.contains('lido');
            console.log(classeExiste)
            if (contador.textContent > 0 && classeExiste == false){
                    contador.textContent = contador.textContent -1;
                    this.classList.add("lido");
                    const ponto = this.querySelector(".ponto");
                    ponto.style.display = "none";
                
            }
        })
    });
    
});

