window.addEventListener("load", function () {

    img1Ref = document.querySelector("#img1");
    img2Ref = document.querySelector("#img2");
    img3Ref = document.querySelector("#img3");
    
    img1Ref.addEventListener("click", do_animation);
    img1Ref.addEventListener("click", randomImage1);
    img2Ref.addEventListener("click", do_animation);
    img2Ref.addEventListener("click", randomImage2);
    img3Ref.addEventListener("click", do_animation);
    img3Ref.addEventListener("click", randomImage3);

    randomImage();
    timer();
});

var sec = 10;
var count = 0;
var inputValue = null;

const array=[
   "images/a.png", "images/b.png", "images/c.png", "images/d.png", "images/e.png", "images/f.png", "images/g.png", "images/h.png", "images/i.png"
]

function randomImage1(){
    var i = Math.floor(Math.random()*array.length);
    image = array[i];
    document.getElementById("img1").src = image;
    resetTimer();
    imageUpdate();
}
function randomImage2(){
    var i = Math.floor(Math.random()*array.length);
    image = array[i];
    document.getElementById("img2").src = image;
    resetTimer();
    imageUpdate();
}
function randomImage3(){
    var i = Math.floor(Math.random()*array.length);
    image = array[i];
    document.getElementById("img3").src = image;
    resetTimer();
    imageUpdate();
}

function randomImage(){
    randomImage1();
    randomImage2();
    randomImage3();

}

function do_animation( event ) {
    target = event.srcElement;
    target.classList.remove('spin');
    setTimeout( () => {target.classList.add('spin');}, 0 );
}

function timer(){
    setInterval(function(){
        document.getElementById("time").innerHTML= + sec.toFixed(1) + "s";
        sec -= 0.1;
        if (sec < 0) {
            randomImage();
            if(inputValue!= null){
                sec = inputValue/1000;
            }
            else{
                  sec = 10.0;
            }
        }
        if(sec > 7){
            document.getElementById("time").style.backgroundColor = "green";
        }
        else if (sec > 4 && sec < 7){
            document.getElementById("time").style.backgroundColor = "orange";
        }
        else {
            document.getElementById("time").style.backgroundColor = "red";
        }
    }, 100);
}

function resetTimer(){
    sec = 10.0;
}

function imageUpdate(){
    count++;
    document.getElementById("update").innerHTML = "Image has updated " + count + " times.";
}
function NewTimer() {
    var input = document.getElementById("timer2");
    inputValue = parseInt(input.value);

    if (inputValue >= 500 && inputValue <= 10000) {
        sec = inputValue / 1000;
        timer();
    }
}
