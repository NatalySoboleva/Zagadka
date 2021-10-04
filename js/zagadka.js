"use strict"
//игра в загадки

let baseZagadok = [
    ['Странный дождь порой идет:сотней струй он кверху бьет.', 'фонтан'],
    ['Чем больше из неё берёшь, тем больше она становится.', 'яма'],
    ['Кто может поднять и передвинуть и коня, и слона?', 'шахматист'],
    ['Что принадлежит вам, однако другие этим пользуются чаще, чем вы сами?', 'имя'],
    ['Кто ходит сидя?', 'шахматист'],
    ['Завязать можно, а развязать не получится.', 'разговор'],
    ['Когда всё видишь, то её не видишь. А когда ничего не видишь, то её видишь.', 'темнота'],
    ['Что вчера было «завтра», а завтра будет «вчера»?', 'сегодня'],
    ['Сижу верхом, не ведаю на ком.', 'шапка'],
    ['Ношу их много лет, А счету им не знаю.', 'волосы'],
    ['Кругом вода, а с питьем беда.', 'море'],
    ['Три глаза - три приказа, Красный - самый опасный.', 'светофор'],
    ['Зубов много, а ничего не ест.', 'расческа'],
    ['В нее льется, из нее льется, сама по земле плетется.', 'река'],
    ['Без ног и без крыльев оно, Быстро летит, не догонишь его.', 'время'],
    ['Вчера было, сегодня есть и завтра будет.', 'время'],
    ['Днем спит, ночью летает.', 'сова']
];

let acount = 0;
let discount = 0;

function getGame() {
    if (acount < 5 && discount < 5) {
        guess();
    } else {
        getAnswer();
    }
}

function getAnswer() {
    const modal = document.getElementsByClassName("modal");
    const btn = document.getElementById("btn");
    const btnYes = document.getElementById("btn_yes");
    const btnNo = document.getElementById("btn_no");

    if (acount == 5 && discount < 5) {
        modal.classList.add("modal_active");
        document.getElementById("rezult").innerText = "Вы выиграли! Ещё?";
    } else if (acount < 5 && discount == 5) {
        modal.classList.add("modal_active");
        document.getElementById("rezult").innerText = "Вы проиграли! Ещё?";
    }

    btnYes.addEventListener("click", function () {
        getAnswer();
    });

    btnNo.addEventListener("click", function () {
        document.getElementById("rezult").innerText = "До свидания!";
    });

}

function guess() {
    let strInput = document.getElementById("otvet");
    let rand = Math.floor(Math.random() * baseZagadok.length);
    let zagadka = baseZagadok[rand][0];
    let answer = baseZagadok[rand][1];

    document.getElementById("zagadka").innerHTML = zagadka;

    btn.addEventListener('click', function () {
        let getStringFromInput = function (input) {
            return input.value;
        }
        let key = getStringFromInput(strInput);

        if (key === answer) {
            acount += 1;
            console.log("acount: " + acount);
            console.log("discount: " + discount);
            answer = undefined;
            strInput.value = "";
            getGame();
        } else {
            discount += 1;
            console.log("discount: " + discount);
            answer = "";
            strInput.value = "";
            return;
        }
    });
}

getGame();
