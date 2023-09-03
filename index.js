const input=document.querySelectorAll(".setting input");


for(var i=0;i<input.length;i++){
    input[i].addEventListener('change',handleUpdate);
    input[i].addEventListener('mousemove',handleUpdate);
}

function handleUpdate(){
    const suffix=this.dataset.sizing || '';
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}