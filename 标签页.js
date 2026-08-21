//找到页面上所有 .tab-choose-item 元素，并把它们保存到 tabs 这个变量里。
const tabs = document.querySelectorAll('.tab-choose-item');

tabs.forEach(function(tab, index){
    tab.addEventListener('click', function(){
        console.log('点击了第' + (index + 1) + '个标签页');

        tabs.forEach(function(tab){
            tab.style.color = '#ccc';
            tab.style.borderBottom = 'none';
        });

        tab.style.color = 'black';
        tab.style.borderBottom = '2px solid black';

        const main = document.querySelector('.main');
        main.innerHTML = tab.innerText + ' Content to be displayed here.';
        main.style.color = 'white';
        main.style.fontSize = '20px';
    })
});

const closeButton = document.querySelector('.cookies-close');
const cookiesbutton = document.querySelector('.cookies-button');
const cookies = document.querySelector('.cookies');

closeButton.addEventListener('click', function(){
    cookies.style.display = 'none';
});

cookiesbutton.addEventListener('click', function(){
    cookies.style.display = 'none';
});
    
const accepted = localStorage.getItem("cookieAccepted");
if (accepted === "true") {
    cookies.style.display = 'none';
}
else {
    cookies.style.display = 'block';
}

cookiesbutton.addEventListener('click', function(){
    localStorage.setItem("cookieAccepted", "true");
    cookies.style.display = "none";
});