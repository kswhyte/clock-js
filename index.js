const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60)* 360);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getminutes();
  const minDegrees = ((mins/60* 360)+ 90));
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

}

setInterval(setDate, 1000);
