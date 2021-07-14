
//circle
const container = document.getElementById('container');
const text = document.getElementById('text');


const totalTime = 8400;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime/5;

breatheAnimation();

function breatheAnimation() {

  text.innerText = 'Breathe In';
  container.className = 'container grow fadeOut';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);

}

setInterval(breatheAnimation, totalTime);

