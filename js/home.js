document.addEventListener("DOMContentLoaded", () =>
{
    const btnMenu = document.querySelector('.toggleButton')
    const menu = document.querySelector('.menu')
    const iconeDoBotao = document.querySelector('#icone')

    btnMenu.addEventListener('click', () =>
    {
        abrirOuFecharMenu()       
    })

    btnMenu.addEventListener('touchend', () =>
    {
        abrirOuFecharMenu()
    })

    function abrirOuFecharMenu()
    {
        if (menu.classList.contains('menuFechado'))
            {
                menu.classList.remove('menuFechado') 
                menu.classList.add('menuAberto')
                
                setTimeout(() =>
                {
                    menu.style.opacity = '1'
                }, 10)
                            
                iconeDoBotao.classList.remove('fa-bars')
                iconeDoBotao.classList.add('fa-caret-down')         
            }
            else
            {
                menu.style.opacity = '0'
    
                setTimeout(() =>
                {
                    menu.classList.remove('menuAberto') 
                menu.classList.add('menuFechado')
                }, 500)
    
                iconeDoBotao.classList.remove('fa-caret-down')
                iconeDoBotao.classList.add('fa-bars')
                  
            }
    }
})
