document.getElementById('input').addEventListener('submit', function (event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);
    let all = (num1 + num2 + num3 + num4 + num5) / 5;
    let all2 = (num1 * 1.4 + num2 * 1.6 + num3 * 1.4 + num4 * 2.2 + num5 * 1.8) / 8.4;

    if (num1 > 100 || num2 > 100 || num3 > 100 || num4 > 100 || num5 > 100 ) {
        document.getElementById('out-1').innerHTML = `</br> 輸入超過範圍的數!`;
        document.getElementById('out-2').innerHTML = `</br> 請輸入100內的數`;
        document.getElementById('out-3').innerHTML = `</br>`;
        document.getElementById('out-4').innerHTML = `</br>`;
    
    } else if (num1 < 0 || num2 < 0 || num3 < 0 || num4 < 0 || num5 < 0 ) {
        document.getElementById('out-1').innerHTML = `</br> 不能輸入負數!`;
        document.getElementById('out-2').innerHTML = `</br> 請輸入大於0的數`;
        document.getElementById('out-3').innerHTML = `</br>`;
        document.getElementById('out-4').innerHTML = `</br>`;
    }else {
        document.getElementById('out-1').innerHTML = `</br> 原成績平均: ${all}`;
        document.getElementById('out-2').innerHTML = `</br> 加權成績平均: ${Math.round(all2)}`;
        if (all2 >= 60) {
            document.getElementById('out-3').innerHTML = `</br> 及格`;
        } else {
            document.getElementById('out-3').innerHTML = `</br> 不及格`;
            if (all2 >= 90) {
                document.getElementById('out-4').innerHTML = `</br> A級分`;
            } else if (all2 >= 80) {
                document.getElementById('out-4').innerHTML = `</br> B級分`;

            } else if (all2 >= 70) {
                document.getElementById('out-4').innerHTML = `</br> C級分`;

            } else if (all2 >= 60) {
                document.getElementById('out-4').innerHTML = `</br> D級分`;

            } else {
                document.getElementById('out-4').innerHTML = `</br> E級分`;
            }
        }
    }
});