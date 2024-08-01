var re = 0;
var r = 20;
document.querySelector('#re-button').addEventListener('click', function () {
    re = 0;
    r = 20;
    document.querySelector('#out-num-0').innerHTML = `0`;
    document.querySelector('#out-num-1').innerHTML = `0`;
    document.querySelector('#out-num-2').innerHTML = `0`;
    document.querySelector('#out-num-3').innerHTML = `0`;
    document.querySelector('#r').innerHTML = `20`;
    var new_span = document.querySelectorAll('.new-span');
    new_span.forEach(function (span) {
        span.remove();
    });
});
document.querySelector('#in-button').addEventListener('click', function (i) {
    i.preventDefault();
    for (var i = 0; i <= 20; i++) {
        let num_1 = Math.round(Math.random() * 6);
        let num_2 = Math.round(Math.random() * 6);
        let num_3 = Math.round(Math.random() * 6);
        if (re == 21) {
            break;
        } else if (re == 20) {
            document.querySelector('#out-num-0').innerHTML = `輸了!請清除重來!`;
            break;
        } else if (re < 20) {
            re++;
            r--;
            document.querySelector('#out-num-0').innerHTML = `${re}`;
            document.querySelector('#out-num-1').innerHTML = `${num_1}`;
            document.querySelector('#out-num-2').innerHTML = `${num_2}`;
            document.querySelector('#out-num-3').innerHTML = `${num_3}`;
            document.querySelector('#r').innerHTML = `${r}`;
            if (num_1 == num_2 && num_2 == num_3) {
                var new_span = document.createElement('span');
                new_span.className = "new-span";
                new_span.innerHTML = ` 次數:${re} 骰出: ${num_1} ${num_2} ${num_3} </br>`;
                document.querySelector('#foot-box').appendChild(new_span);
                re = 21;
                document.querySelector('#out-num-0').innerHTML = `恭喜!你WIN了!`;
                break;
            } else {
                var new_span = document.createElement('span');
                new_span.className = "new-span";
                new_span.innerHTML = ` 次數:${re} 骰出: ${num_1} ${num_2} ${num_3} </br>`;
                document.querySelector('#foot-box').appendChild(new_span);
            }
        }
    }
});