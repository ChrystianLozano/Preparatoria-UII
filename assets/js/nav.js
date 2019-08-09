console.log('hola');
var ps = {
    posicionScroll: 0,
    lemenu: document.querySelector('#lemenu'),
    logo1: document.querySelector('#logoPart1'),
    logo2: document.querySelector('#logoPart2'),
    logo3: document.querySelector('#logoPart3'),
    logo4: document.querySelector('#logoPart4')
}
var ms = {
    inicioScroll: ()=>{
        document.addEventListener('scroll', ms.efectoNav)
    },
    efectoNav: ()=>{
        ps.posicionScroll = window.pageYOffset
        if (ps.posicionScroll > 30 && window.innerWidth > 765){
            ps.lemenu.style.position = 'fixed';
            ps.logo1.style.width = '37px';
            ps.logo2.style.width = '20px';
            ps.logo3.style.width = '110px';
            ps.logo4.style.width = '53px';
            ps.lemenu.style.zIndex = 11;            
        }
        if (ps.posicionScroll < 29 && window.innerWidth > 765) {
            ps.lemenu.style.zIndex = 0;
            ps.lemenu.style.position = '';
            ps.logo1.style.width = '85px';
            ps.logo2.style.width = '46px';
            ps.logo3.style.width = '251px';
            ps.logo4.style.width = '128px';
        }
    }
}
ms.inicioScroll()
