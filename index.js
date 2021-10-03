let screen= document.getElementById('screen');
buttons= document.querySelectorAll('button');
screen.value= "";
for(items of buttons){
    items.addEventListener('click',(e)=>{
        buttonText= e.target.innerText;
        console.log(buttonText);
        if(buttonText=="AC"){
            screen.value= "";
        }
        else if(buttonText=="="){
            screen.value= eval(screen.value);
        }
        else{
            screen.value=screen.value+buttonText;
        }
    })
}