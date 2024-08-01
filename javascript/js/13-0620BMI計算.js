document.querySelector('#in').addEventListener('submit', function (i) {
    i.preventDefault();
    const in_1 = parseFloat(document.querySelector('#input-1').value);
    const in_2 = parseFloat(document.querySelector('#input-2').value);
    let result = in_2 / ((in_1 / 100) * (in_1 / 100));
    const re = ['#heavy-1',`#heavy-2`,`#heavy-3`,`#heavy-4`,`#heavy-5`,`#heavy-6`];
    re.forEach(function(a){
        document.querySelector(a).style.backgroundColor = '#d8ffff';
    });

    if (in_1 < 0 || in_2 < 0) {
        document.querySelector('#out').innerHTML = `請輸入正數`;
    } else {
        document.querySelector('#out').innerHTML = `${result.toFixed(1)}</br>`;
        if (result < 18.5) {
            document.querySelector('#heavy-1').style.backgroundColor = 'red';
        } else if (result < 24) {
            document.querySelector('#heavy-2').style.backgroundColor = '#91ff75'
        } else if (result < 27) {
            document.querySelector('#heavy-3').style.backgroundColor = '#fdff6c';
        } else if (result < 30) {
            document.querySelector('#heavy-4').style.backgroundColor = '#ffb978';
        } else if (result < 35) {
            document.querySelector('#heavy-5').style.backgroundColor = '#ffa47a';
        } else {
            document.querySelector('#heavy-6').style.backgroundColor = 'red';
        }
    }
});