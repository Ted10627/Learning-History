const reset = document.querySelector('#reset');
const main = document.querySelector('#main-box');
const out = document.querySelector('#score');
var r = 2;
var lv = 1;
var score = 0;
function color() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
function grid(size) {
    const getcolor = color();
    const random = Math.floor(Math.random() * size * size);
    main.innerHTML = '';
    main.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let a = 0; a !== size * size; a++) {
        const n_div = document.createElement('div');
        n_div.className = 's-box';
        n_div.style.backgroundColor = getcolor;
        if (a === random) {
            const opacity = 0.1 + (0.08 * size);
            if (opacity < 0.91) {
                n_div.style.opacity = opacity;
            } else {
                n_div.style.opacity = 0.1;
            }
            n_div.addEventListener('click', function (event) {
                event.stopPropagation();
                if (size < 10 && lv == 2) {
                    size += 1;
                    lv = 0;
                }
                lv += 1;
                score += 10 * lv;
                grid(size);
                out.innerHTML = `<span>分數:</span><span>${score}</span>`;
            });
        } else {
            n_div.addEventListener('click', function () {
                if (lv > 0 && size > 2) {
                    lv -= 1;
                    size -= 1;
                }
                grid(size);
            });
        }
        main.appendChild(n_div);
    }
}

reset.addEventListener('click', function () {
    r = 2;
    lv = 1;
    score = 0;
    out.innerHTML = `<span>分數:</span><span>0</span>`;
    grid(r);

});

grid(r);