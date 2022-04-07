let amount = 100;
console.log("je suis dans la fct");
let body = document.querySelectorAll('section')
let i=0;var j;
for(j=0;j<body.length;j++){
    while(i < amount){
        let drop = document.createElement('i');
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random()* -20;
        //jareb 20 bach tfham lblan 😂
        let duration = Math.random()*5;
        drop.style.left = posX + 'px';
        drop.style.width =0.5 * size +'px'; 
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';
        body[j].appendChild(drop);
        console.log(j)
        i++;
    }
    i=0;
    console.log(j)
}
