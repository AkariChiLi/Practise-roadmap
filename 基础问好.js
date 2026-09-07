const firstname = document.querySelector('.firstname')
const lastname = document.querySelector('.lastname')
const timeofday = document.querySelector('.timeofday')
const button = document.querySelector('.submit')
const greeting = document.querySelector('.message')

function formatName(firstname, lastname) {
  const name = firstname.trim() + ' ' + lastname.trim()
  return name
}

console.log(formatName('  John ', ' Doe '))

function getGreeting(timeofday) {
  if (timeofday == 'morning') {
    return 'Good morning'
  } else if (timeofday == 'afternoon') {
    return 'Good afternoon'
  } else if (timeofday == 'evening') {
    return 'Good evening'
  } 
}


function creatGreeting(firstname, lastname, timeofday) {
  return `${getGreeting(timeofday)} ${formatName(firstname, lastname)}!`
}

button.addEventListener('click', () => {
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const timeofdayValue = timeofday.value.trim()
    const result = creatGreeting(firstnameValue, lastnameValue, timeofdayValue)
    greeting.textContent = result
})