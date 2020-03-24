let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/MC.jpg') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/MC.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Welcome, ' + myName + '!';
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName + '!';
  }

  myButton.onclick = function() {
    setUserName();
  }