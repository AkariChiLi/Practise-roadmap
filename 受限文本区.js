const message = document.querySelector('.message');
const counter = document.querySelector('.counter');

message.addEventListener('input', function() {
  const text = message.value;
  const maxLength = 100;

  console.log(text)
  console.log(text.length)

  if (text.length > maxLength) {
    // message.value = text.substring(0, maxLength);
    counter.innerHTML = text.length+ ' /100';
    counter.style.color = 'red';
    message.style.borderColor = 'red';
  } else {
    counter.innerHTML = text.length+ ' /100';
    counter.style.color = 'black';
    message.style.borderColor = '#ccc';
  }

});


