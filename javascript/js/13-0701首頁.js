const subtitleOut = document.querySelector('#subtitle-out');
const titleOut = document.querySelector('#title-out');
const priceOut = document.querySelector('#price-out');
const imageOut = document.querySelector('#image-out');
const numberOut = document.querySelector('#number-out');
const products = document.querySelectorAll('.product-button');
const toCart = document.querySelector('#to-cart');
products.forEach(product => {
    product.addEventListener('click', function () {
        // 暫時儲存主要展示內容
        const subtitle = subtitleOut.innerHTML;
        const title = titleOut.innerHTML;
        const price = priceOut.innerHTML;
        const image = imageOut.src;
        const number = numberOut.innerHTML;
        //取得卡片內容
        const n_subtitle = this.querySelector('.subtitle').innerHTML;
        const n_title = this.querySelector('.titles').innerHTML;
        const n_price = this.querySelector('.price').innerHTML;
        const n_image = this.querySelector('.images').src;
        const n_number = this.querySelector('.number').innerHTML;
        // 將點取的卡片內容交換
        subtitleOut.innerHTML = n_subtitle;
        titleOut.innerHTML = n_title;
        priceOut.innerHTML = n_price;
        imageOut.src = n_image;
        numberOut.innerHTML = n_number;
        //將展示內容賦予給卡片
        this.querySelector('.subtitle').innerHTML = subtitle;
        this.querySelector('.titles').innerHTML = title;
        this.querySelector('.price').innerHTML = price;
        this.querySelector('.images').src = image;
        this.querySelector('.number').innerHTML = number;
    });
});
//購物車按鈕
toCart.addEventListener('click', function () {
    //檢查購物車是否有內容物，沒有則初始化陣列
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    //建立清單項目
    const n_item = {
        title: titleOut.innerHTML,
        price: priceOut.innerHTML,
        image: imageOut.src,
        number: numberOut.innerHTML,
        quantity: 1
    };
    //重複商品加入會+1
    const repeatItem = cartItems.find(item => item.number === n_item.number);
    if (repeatItem) {
        repeatItem.quantity += 1;
    } else {
        cartItems.push(n_item);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
});