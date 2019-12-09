
let divs = document.getElementsByClassName('navbar-brand');
for (let i = 0; i < divs.length; i++) {
  divs[i].innerHTML = "ifarse";
}

const onReady = () => 
  setTimeout(() => {
    updateAttributes(8,1);
  }, 60);
onReady();

const updateAttributes = (currentStatus, newStatus) => {
  let arr = [...document.querySelectorAll(`[currparkingstatus="${currentStatus}"]`)];
  if (arr.length > 0)
    for (const x of arr)
      x.setAttribute('currparkingstatus', newStatus);
      chevronClick();
  if (arr.length < 1)
    onReady();
}

function chevronClick(){
  let chevright = document.getElementsByClassName('calendar-month-navigation');
  for (let i = 0; i < chevright.length; i++) {
    chevright[i].addEventListener ('click', onReady);
  }
}
