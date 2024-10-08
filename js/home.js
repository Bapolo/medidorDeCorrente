$(document).ready(function()
{      
    $('.toggleButton').click(function(event)
    {
        //evita que o evento se propague para outras areas da DOM
        event.stopPropagation()
        $('.menu').fadeToggle(500)
    })
})









































// document.addEventListener("DOMContentLoaded", () =>
// {
//     const btnMenu = document.querySelector('.toggleButton')
//     const menu = document.querySelector('.menu')
//     const iconeDoBotao = document.querySelector('#icone')

//     btnMenu.addEventListener('click', () =>
//     {
//         abrirOuFecharMenu()       
//     })

//     btnMenu.addEventListener('touchend', () =>
//     {
//         abrirOuFecharMenu()
//     })

//     function abrirOuFecharMenu()
//     {
//         menu.classList.toggle('menuFechado')
//     }
// })
