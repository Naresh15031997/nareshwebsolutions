const gMenuToggle = document.getElementById('gMenuToggle');
const gMainNav = document.getElementById('gMainNav');
if(gMenuToggle){
  gMenuToggle.addEventListener('click', ()=>{
    gMainNav.style.display = gMainNav.style.display === 'block' ? '' : 'block';
  });
}
function contactSubmit(e){
  e.preventDefault();
  alert('Thanks! Form demo only.');
  return false;
}
