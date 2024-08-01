var b1 = 0;
var b2 = 1;
var b3 = 2;
document.querySelector('#b-1').addEventListener('click', function (i) {
    i.preventDefault();

    let pc = Math.round(Math.random() * 2);
    if (b1 == pc) {
        document.querySelector('#out').innerHTML = `電腦出剪刀，與您平手!`;
    } else if (pc == 1) {
        document.querySelector('#out').innerHTML = `電腦出石頭，您輸了!`;
    } else {
        document.querySelector('#out').innerHTML = `電腦出布，您WIN!`;
    }
});
document.querySelector('#b-2').addEventListener('click', function (i) {
    i.preventDefault();

    let pc = Math.round(Math.random() * 2);
    if (b2 == pc) {
        document.querySelector('#out').innerHTML = `電腦出石頭，與您平手!`;
    } else if (pc == 2) {
        document.querySelector('#out').innerHTML = `電腦出布，您輸了!`;
    } else {
        document.querySelector('#out').innerHTML = `電腦出剪刀，您WIN!`;
    }
});
document.querySelector('#b-3').addEventListener('click', function (i) {
    i.preventDefault();

    let pc = Math.round(Math.random() * 2);
    if (b3 == pc) {
        document.querySelector('#out').innerHTML = `電腦出布，與您平手!`;
    } else if (pc == 0) {
        document.querySelector('#out').innerHTML = `電腦出剪刀，您輸了!`;
    } else {
        document.querySelector('#out').innerHTML = `電腦出石頭，您WIN!`;
    }
});