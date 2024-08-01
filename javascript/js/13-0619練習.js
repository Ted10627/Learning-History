//各項變數
//var(全域變數) let(區域變數，設定的值可以取代) const(區域變數)
//字串""與''兩種引號，其中''常用於變數，
let test = null;
console.log(typeof(test));

//點擊事件
function click() {
    const box_element = document.querySelector('.box');
    box_element.addEventListener('click', function () {
        box_element.style.backgroundColor = "rad";
    }
    );
}
//呼叫
click();


