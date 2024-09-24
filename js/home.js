document.addEventListener("DOMContentLoaded", () =>
{
    const btnMenu = document.querySelector('button .fa-solid')
    const menu = document.querySelector('.menu')

    btnMenu.addEventListener('click', () =>
    {
        abrirOuFecharMenu()       
    })

    btnMenu.addEventListener('touchEnd', () =>
    {
        abrirOuFecharMenu()
    })

    function abrirOuFecharMenu()
    {
        if (menu.style.display == 'none')
            {
                menu.style.display = 'block' 
                
                setTimeout(() =>
                {
                    menu.style.opacity = '1'
                }, 10)
                            
                btnMenu.classList.remove('fa-bars')
                btnMenu.classList.add('fa-caret-down')         
            }
            else
            {
                menu.style.opacity = '0'
    
                setTimeout(() =>
                {
                    menu.style.display = 'none'
                }, 500)
    
                btnMenu.classList.remove('fa-caret-down')
                btnMenu.classList.add('fa-bars')
                  
            }
    }
})
