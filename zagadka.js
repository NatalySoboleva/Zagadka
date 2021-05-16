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

let question = ["да", "нет"];

function guess() {
    let rand = Math.floor(Math.random() * baseZagadok.length);
    let zagadka = baseZagadok[rand][0];
    document.getElementById("zagadka").innerHTML = zagadka;
    let strInput = document.getElementById("otvet");
    let btn = document.getElementById("btn");
    btn.addEventListener('click', function () {
        let getStringFromInput = function (input) {
            return input.value;
        }
        let key = getStringFromInput(strInput);
        console.log(key);
        let again;
        if (key === baseZagadok[rand][1]) {
            again = prompt("Правильно!!! Ещё?");
        } else {
            again = prompt("Неправильно!!! Ещё?");
        }
        if (again == question[0]) {
            guess();
            key = "";
        } else {
            alert("До свидания!");
        }

    });
}





guess();
