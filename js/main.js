
document.addEventListener("DOMContentLoaded",function(){
    const wr= document.querySelectorAll('.input-container');
    const inp = document.querySelectorAll('.input-container input');
    wr.forEach(element => {
            element.addEventListener('mouseover',function(e){
            element.classList.add("input-container-hover") ; 
            element.children[0].classList.add('span-hover');
       }); 
    });
    wr.forEach(element => {
        element.addEventListener('mouseout',function(e){
        element.classList.remove("input-container-hover") ; 
        element.children[0].classList.remove('span-hover');
   }); 
});
   inp.forEach(element => {
    element.addEventListener('focus',function(e){
        let div =  e.target.parentElement;
        let sp = div.children[0];
        div.classList.add("input-container-hover") ; 
        sp.classList.add('span-hover');
   }); 
});
inp.forEach(element => {
    element.addEventListener('blur',function(e){
        let div =  e.target.parentElement;
        let sp = div.children[0];
        div.classList.remove("input-container-hover") ; 
        sp.classList.remove('span-hover');
   }); 
});
});