function hello(name){
    let welcome = `Bem bindo ${name}`;
    write(welcome, 2);
}

function write(phrase, type){
    switch(type){
        case 1: console.log(phrase); break;
        case 2: alert(phrase); break;
        default: document.write(phrase); break;
    }
}


hello("Yuri");