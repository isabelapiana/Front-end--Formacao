const botaoMenu = document.querySelector('.cabecalho__menu') //símbolo/botão de menu
const menu = document.querySelector('.menu-lateral') //menu lateral

//Ao clicar no símbolo de menu, menu lateral deverá desaparecer

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
})
