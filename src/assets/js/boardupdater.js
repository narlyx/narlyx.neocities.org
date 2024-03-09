const possibleAds = Array(
    "https://tenor.com/view/markiplier-fnaf-jumpscare-reaction-bruh-gif-20887052.gif",
    "https://tenor.com/view/roblox-meme-run-coming-for-your-life-paraszt-nokedli-gif-7116692938257235844.gif"
);
var index = 0;

function fadeIn(element) {
    element.style.opacity = 0;

    var op = 0
    var timer = setInterval(function () {
        if (op >= 0.99) {
            clearInterval(timer);
        }
       op += 0.01;
       element.style.opacity = op;
    }, 5);

    element.style.opacity = 1;
}

function fadeOut(element) {
    element.style.opacity = 1;

    var op = 1
    var timer = setInterval(function () {
        if (op <= 0.01) {
            clearInterval(timer);
        }
       op -= 0.01;
       element.style.opacity = op;
    }, 5);

    element.style.opacity = 0;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function update() {
    const screenElement = document.getElementById('boardContent');

    fadeOut(screenElement);

    await sleep(1000);

    if (index==possibleAds.length-1) {
        index = 0;
    } else {
        index +=1;
    }
 
    var chosenAd = chosenAd = possibleAds[index];
    
    screenElement.src = chosenAd;

    fadeIn(screenElement);
    
}
update();

setInterval(update,20000);