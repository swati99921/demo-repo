const store = document.getElementById('main-header');
console.log(store);
store.textContent = "New text"
store.innerHTML =  '<h1> Swati singh</h1>'
 const dep = document.getElementsByClassName('list-group');
 console.log(dep);
 for(let i = 0; i < dep.length; i++){

 
     if(i%2 == 0)
     {        
          dep[i].style.color = 'green'
         
     }
     else {
         dep[i].style.color = 'blue'
     }
}
for(let i = 0; i < dep.length; i++)
{
    if(i%2 == 0)
    {
        dep[i].style.fontFamily = 'italic'
        dep[i].style.fontWeight = 'bold'
    }
}
const btn = document.querySelector('#btn1')
//console.log(btn)
 //btn.addEventListener('Click', () => {
  // console.log('btn');
 //})    
//btn.addEventListener('click', onButtonClick)
//function onButtonClick() {
//alert('button was clicked')
//}
    
const item = document.querySelector('#main-header')
console.log(item);
//parent node 
console.log('item.parentElement');
const item2 = document.querySelector('#list')
console.log(item2)
console.log(item2.parentNode)
item2.parentElement.style.backgroundColor = 'red'
console.log(item2.firstChild)
item2.children[1].style.fontFamily = 'cursive'
item2.children[3].textContent =  'Swati Singh'
item2.children[4].style.fontFamily = 'cursive'
item2.children[4].textContent = 'Abyansh'
item2.children[3].style.backgroundColor = 'yellow'
item2.children[3].style.color = 'red'
btn.addEventListener('click', onclick)
function onclick() {
    item2.children[2].textContent = 'swatisingh'
}




      
 