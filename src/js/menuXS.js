let body = document.getElementById('body');;
let menuXS = document.getElementById('menuXS');
let mobileMenuButton = document.getElementById('mobileMenuButton');
let closeMenuButton = document.getElementById('closeMenuButton');

mobileMenuButton.onclick = function(){
  if(!mobileMenuButton.classList.contains('hiddenBody')) {
    mobileMenuButton.classList.add('hiddenBody');
    closeMenuButton.classList.remove('hiddenMenuXS');
    body.style.overflow = 'hidden';
    menuXS.style.display = 'grid';
    mobileMenuButton.style.display = 'none';
  }
}
closeMenuButton.onclick = function(){
  if(!closeMenuButton.classList.contains('hiddenMenuXS')) {
    closeMenuButton.classList.add('hiddenMenuXS');
    mobileMenuButton.classList.remove('hiddenBody');
    body.style.overflow = 'scroll';
    menuXS.style.display = 'none';
    mobileMenuButton.style.display = 'flex';
  }
}