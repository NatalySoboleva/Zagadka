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

function getGame() {

    let acount = 0;
    let discount = 0;
    let strInput = document.getElementById("otvet");
    let zagadka = "";
    let answer = "";
    const modal = document.querySelector(".modal");
    let time;
    let timerId;
    let diff;

    function guess() {
        zagadka = "";
        strInput.value = "";
        answer = "";
        let rand = Math.floor(Math.random() * baseZagadok.length);
        zagadka = baseZagadok[rand][0];
        answer = baseZagadok[rand][1];
        document.getElementById("zagadka").innerHTML = zagadka;
        modal.classList.remove("modal_active");
    }

    guess();
    getTimes();

    btn.addEventListener('click', getRezult);
    strInput.addEventListener('change', getRezult);

    function getRezult() {
        let getStringFromInput = function (input) {
            return input.value;
        }
        let key = getStringFromInput(strInput).toLowerCase();

        if (key === answer) {
            acount += 1;
            if (acount < 5 && discount < 5) {
                guess();
            } else {
                getAnswer();
            }
        } else {
            discount += 1;
            if (acount < 5 && discount < 5) {
                guess();
            } else {
                getAnswer();
            }
        }
    }

    function getAnswer() {
        const btn = document.getElementById("btn");
        const btnYes = document.getElementById("btn_yes");
        const btnNo = document.getElementById("btn_no");

        if (time == 0 && acount === 5 && discount < 5) {
            modal.classList.add("modal_active");
            document.getElementById("rezult").innerText = "Вы выиграли! Ещё?";
            clearInterval(timerId);

        } else if (acount < 5 && discount === 5 || time === 1) {
            modal.classList.add("modal_active");
            document.getElementById("rezult").innerText = "Вы проиграли! Ещё?";
            clearInterval(timerId);
        }

        btnYes.addEventListener("click", function () {
            location.reload();

        });

        btnNo.addEventListener("click", function () {
            document.getElementById("rezult").innerText = "До свидания!";
            btnYes.classList.add("modal_btn_close");
            btnNo.classList.add("modal_btn_close");
            setTimeout(function () {
                modal.classList.remove("modal_active");
            }, 3000);
            setTimeout(function () {
                window.close();
            }, 2000);
            setTimeout(function () {
                window.close();
            }, 1000);

        });
    }

    function getTimes() {
        const deadline = new Date(Date.now() + 90999); //конечное время
        timerId = null; //id таймера
        //получение элементов на странице
        const $minut = document.querySelector('.timer_minut');
        const $sec = document.querySelector('.timer_second');
        //вычисление разницы времени и установка оставшегося времени в элементы на странице
        function countDownTimer() {
            diff = deadline - new Date();
            time = 0;
            if (diff <= 0) {
                clearInterval(timerId);
                time = 1;
                getAnswer();
            }
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
            const second = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
            // изменение содержимого страницы
            $minut.textContent = minutes < 10 ? "0" + minutes : minutes;
            $sec.textContent = second < 10 ? "0" + second : second;
        }
        // вызов фунции
        countDownTimer();
        timerId = setInterval(countDownTimer, 1000);
    }

}

getGame();
