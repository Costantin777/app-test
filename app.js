const knightRider = document.querySelector('.knight-rider');

(function init(){
    for (let i = 0; i < 8; i++) {
        const span = document.createElement('span');
        knightRider.append(span);
    }
})();

let step = 0;
const knightRiderSpans = document.querySelectorAll('.knight-rider > span');

function anim () {
    
    knightRiderSpans.forEach(item => {
        item.style.filter = 'contrast(50%)'
        item.style.boxShadow = 'none'
    });


    knightRiderSpans[step].style.filter = 'contrast(150%)';
    knightRiderSpans[step].style.boxShadow = '0px 0px 30px #ff4766';

    
    step++;
    
    if (step === knightRiderSpans.length) step = 0;

    setTimeout(anim, 600);
}

anim();