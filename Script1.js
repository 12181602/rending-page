// JavaScript source code

let target = document.querySelector("#dynamic");
let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript",
    "Learn to Python", "Learn to Ruby"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");


function randomString() {
    let target = document.querySelector("#dynamic");
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript",
        "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//Ÿ���θ���
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

//�ѱ��ھ� �ؽ�Ʈ ��� �Լ�
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function () {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());


//Ŀ�� ������ ȿ��
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);