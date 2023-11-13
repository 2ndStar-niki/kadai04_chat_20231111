// ブックマーク情報を格納する変数
let bookmarks = [];

// アンパンマンのお気に入りに関する処理
var bm_status = 0;
document.getElementById("am_bm").addEventListener("click", function() {
    const bookmarkedText = "アンパンマン";

    if (bookmarks.includes(bookmarkedText)) {
        // 特定の文字が既にブックマークされている場合、削除
        bm_status = 0;
        bookmarks = bookmarks.filter(bookmark => bookmark !== bookmarkedText);
        this.src = "imgs/bookmark_no.jpeg"; // 通常の画像に切り替え
        alert("お気に入りから削除しました");
    } else {
        // 特定の文字がブックマークされていない場合、追加
        bm_status = 1;
        bookmarks.push(bookmarkedText);
        this.src = "imgs/bookmark_yes.jpeg"; // ブックマーク済みの画像に切り替え
        alert("お気に入りに追加しました"); 
    }

    // ブックマーク情報をローカルストレージに保存
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    // localStorageからデータを取得
    var bm_Value = localStorage.getItem("bookmarks");
    if (bm_Value) {
        // データが存在する場合、HTMLに表示
        document.getElementById("bm_list").textContent = bm_Value;
    }
});


// しょくぱんまんのお気に入りに関する処理
document.getElementById('sm_bm').addEventListener('click', function() {
    const bookmarkedText = "しょくぱんまん";
  
    if (bookmarks.includes(bookmarkedText)) {
        bookmarks = bookmarks.filter(bookmark => bookmark !== bookmarkedText);
        this.src = 'imgs/bookmark_no.jpeg';
        alert('お気に入りから削除しました');
    } else {
        bookmarks.push(bookmarkedText);
        this.src = 'imgs/bookmark_yes.jpeg';
        alert('お気に入りに追加しました'); 
    }
  
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    var bm_Value = localStorage.getItem("bookmarks");
    if (bm_Value) {
        document.getElementById("bm_list").textContent = bm_Value;
    }
});

// カレーパンマンのお気に入りに関する処理
document.getElementById('km_bm').addEventListener('click', function() {
    const bookmarkedText = "カレーパンマン";
  
    if (bookmarks.includes(bookmarkedText)) {
        bookmarks = bookmarks.filter(bookmark => bookmark !== bookmarkedText);
        this.src = 'imgs/bookmark_no.jpeg';
        alert('お気に入りから削除しました');
    } else {
        bookmarks.push(bookmarkedText);
        this.src = 'imgs/bookmark_yes.jpeg';
        alert('お気に入りに追加しました'); 
    }
  
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    var bm_Value = localStorage.getItem("bookmarks");
    if (bm_Value) {
        document.getElementById("bm_list").textContent = bm_Value;
    }
});

// バイキンマンのお気に入りに関する処理
document.getElementById('bm_bm').addEventListener('click', function() {
    const bookmarkedText = "バイキンマン";
  
    if (bookmarks.includes(bookmarkedText)) {
        bookmarks = bookmarks.filter(bookmark => bookmark !== bookmarkedText);
        this.src = 'imgs/bookmark_no.jpeg';
        alert('お気に入りから削除しました');
    } else {
        bookmarks.push(bookmarkedText);
        this.src = 'imgs/bookmark_yes.jpeg';
        alert('お気に入りに追加しました'); 
    }
  
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    var bm_Value = localStorage.getItem("bookmarks");
    if (bm_Value) {
        document.getElementById("bm_list").textContent = bm_Value;
    }
});

// どきんちゃんのお気に入りに関する処理
document.getElementById('dc_bm').addEventListener('click', function() {
    const bookmarkedText = "どきんちゃん";
  
    if (bookmarks.includes(bookmarkedText)) {
        bookmarks = bookmarks.filter(bookmark => bookmark !== bookmarkedText);
        this.src = 'imgs/bookmark_no.jpeg';
        alert('お気に入りから削除しました');
    } else {
        bookmarks.push(bookmarkedText);
        this.src = 'imgs/bookmark_yes.jpeg';
        alert('お気に入りに追加しました'); 
    }
  
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    var bm_Value = localStorage.getItem("bookmarks");
    if (bm_Value) {
        document.getElementById("bm_list").textContent = bm_Value;
    }
});

// かびるんるんのお気に入りに関する処理
document.getElementById('kr_bm').addEventListener('click', function() {
    const bookmarkedText = "かびるんるん";
  
    if (bookmarks.includes(bookmarkedText)) {
        bookmarks = bookmarks.filter(bookmark => bookmark !== bookmarkedText);
        this.src = 'imgs/bookmark_no.jpeg';
        alert('お気に入りから削除しました');
    } else {
        bookmarks.push(bookmarkedText);
        this.src = 'imgs/bookmark_yes.jpeg';
        alert('お気に入りに追加しました'); 
    }
  
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    var bm_Value = localStorage.getItem("bookmarks");
    if (bm_Value) {
        document.getElementById("bm_list").textContent = bm_Value;
    }
});

// お気に入り商品を表示する処理
const buttonOpen = document.getElementById('bookmark');
const modal = document.getElementById('bm_Modal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

    // 「お気に入り」がクリックされた時
    buttonOpen.addEventListener('click', bookmark);
    function bookmark() {
    modal.style.display = 'block';
    }

    // バツ印がクリックされた時
    buttonClose.addEventListener('click', modalClose);
    function modalClose() {
    modal.style.display = 'none';
    }

    // モーダルコンテンツ以外がクリックされた時
    addEventListener('click', outsideClose);
    function outsideClose(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
    }

// お気に入り削除に関する処理
$("#clear").on("click", function(){
    localStorage.removeItem("bookmarks");
    $("#bm_list").empty();
    // それぞれをブックマーク未の画像に変更
    $('#am_bm').attr('src', "imgs/bookmark_no.jpeg");
    $('#sm_bm').attr('src', "imgs/bookmark_no.jpeg");
    $('#km_bm').attr('src', "imgs/bookmark_no.jpeg");
    $('#bm_bm').attr('src', "imgs/bookmark_no.jpeg");
    $('#dc_bm').attr('src', "imgs/bookmark_no.jpeg");
    $('#kr_bm').attr('src', "imgs/bookmark_no.jpeg");
});


// カート情報を格納する変数
let carts = [];

// アンパンマンのカートに関する処理
document.getElementById("am").addEventListener("click", function() {
    const cartedText = "アンパンマン";

        // 特定の文字をカートに追加
        carts.push(cartedText);
        alert("カートに追加しました"); 

        // カート情報をローカルストレージに保存
        localStorage.setItem("carts", JSON.stringify(carts));

        // localStorageからデータを取得
        var cart_Value = localStorage.getItem("carts");
        if (cart_Value) {
            // データが存在する場合、HTMLに表示
            document.getElementById("cart_list").textContent = cart_Value;
        }
});

// しょくぱんまんのカートに関する処理
document.getElementById("sm").addEventListener("click", function() {
    const cartedText = "しょくぱんまん";

        carts.push(cartedText);
        alert("カートに追加しました"); 

        localStorage.setItem("carts", JSON.stringify(carts));

        var cart_Value = localStorage.getItem("carts");
        if (cart_Value) {
            document.getElementById("cart_list").textContent = cart_Value;
        }
});

// カレーパンマンのカートに関する処理
document.getElementById("km").addEventListener("click", function() {
    const cartedText = "カレーパンマン";

        carts.push(cartedText);
        alert("カートに追加しました"); 

        localStorage.setItem("carts", JSON.stringify(carts));

        var cart_Value = localStorage.getItem("carts");
        if (cart_Value) {
            document.getElementById("cart_list").textContent = cart_Value;
        }
});

// バイキンマンのカートに関する処理
document.getElementById("bm").addEventListener("click", function() {
    const cartedText = "バイキンマン";

        carts.push(cartedText);
        alert("カートに追加しました"); 

        localStorage.setItem("carts", JSON.stringify(carts));

        var cart_Value = localStorage.getItem("carts");
        if (cart_Value) {
            document.getElementById("cart_list").textContent = cart_Value;
        }
});

// どきんちゃんのカートに関する処理
document.getElementById("dc").addEventListener("click", function() {
    const cartedText = "どきんちゃん";

        carts.push(cartedText);
        alert("カートに追加しました"); 

        localStorage.setItem("carts", JSON.stringify(carts));

        var cart_Value = localStorage.getItem("carts");
        if (cart_Value) {
            document.getElementById("cart_list").textContent = cart_Value;
        }
});

// かびるんるんのカートに関する処理
document.getElementById("kr").addEventListener("click", function() {
    const cartedText = "かびるんるん";

        carts.push(cartedText);
        alert("カートに追加しました"); 

        localStorage.setItem("carts", JSON.stringify(carts));

        var cart_Value = localStorage.getItem("carts");
        if (cart_Value) {
            document.getElementById("cart_list").textContent = cart_Value;
        }
});

// カート商品を表示する処理
const buttonOpen_cart = document.getElementById('cart');
const modal_cart = document.getElementById('cart_Modal');
const buttonClose_cart = document.getElementsByClassName('modalClose_cart')[0];

    // 「カート」がクリックされた時
    buttonOpen_cart.addEventListener('click', cart);
    function cart() {
    modal_cart.style.display = 'block';
    }

    // バツ印がクリックされた時
    buttonClose_cart.addEventListener('click', modalClose_cart);
    function modalClose_cart() {
    modal_cart.style.display = 'none';
    }
    

    // モーダルコンテンツ以外がクリックされた時
    addEventListener('click', outsideClose_cart);
    function outsideClose_cart(e) {
    if (e.target == modal_cart) {
        modal_cart.style.display = 'none';
    }
    }

// カート削除に関する処理
$("#clear_cart").on("click", function(){
    localStorage.removeItem("carts");
    $("#cart_list").empty();
});

// 注文に関する処理
let orderds = [];

// 注文ボタンが押された時の処理
$("#order").on("click", function(){
    localStorage.setItem("ordereds", JSON.stringify(carts));
    localStorage.removeItem("carts");
    $("#cart_list").empty();
    modal_cart.style.display = 'none';
});

const buttonOpen_ordered = document.getElementById('ordered');
const modal_ordered = document.getElementById('ordered_Modal');
const buttonClose_ordered = document.getElementsByClassName('modalClose_ordered')[0];

    // 「カート」がクリックされた時
    buttonOpen_ordered.addEventListener('click', ordered);
    function ordered() {
    modal_ordered.style.display = 'block';
    
    var ordered_Value = localStorage.getItem("ordereds");
    if (ordered_Value) {
        document.getElementById("ordered_list").textContent = ordered_Value;
    }
    }

    // バツ印がクリックされた時
    buttonClose_ordered.addEventListener('click', modalClose_ordered);
    function modalClose_ordered() {
    modal_ordered.style.display = 'none';
    }
    
    // モーダルコンテンツ以外がクリックされた時
    addEventListener('click', outsideClose_ordered);
    function outsideClose_ordered(e) {
    if (e.target == modal_ordered) {
        modal_ordered.style.display = 'none';
    }
    }

$("#reset").on("click", function(){
    localStorage.clear();
})