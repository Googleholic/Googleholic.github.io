function rightArrow() {
    console.log('right arrow');
    changeInteractive(1);
}

function leftArrow() {
    console.log('left arrow');
    changeInteractive(-1);
}

function changeInteractive(i) {
    console.log('change interactive');

    var dataCount = document.querySelectorAll('.interactive').length;

    count=1;
    for (var j = 1; j <= dataCount; j++) {
        var element = document.getElementById('i' + j);
        if (element.getAttribute('data-status') == 'visible') {
            break;
        }
        count++;
    }
    
    var newData = count + i;

    if (newData > dataCount) {
        newData = 1;
    } else if (newData < 1) {
        newData = dataCount;
    }

    document.getElementById('i' + newData).setAttribute('data-status', 'visible');
    document.getElementById('i' + count).setAttribute('data-status', 'hidden');

}

addEventListener('mousemove',  (event) => {
    var eye = document.querySelectorAll('.smileyfaceeye');

    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 4);
        let y = (eye.getBoundingClientRect().top) + (eye.clientWidth / 4);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)";

    });

});