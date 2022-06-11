window.onscroll = function() {scroll()};
function scroll() {
  if (document.body.scrollBottom > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("toggle").checked = false
  }
}

function clickGit() {
    document.querySelector('class.card-wrapper')
    window.open('https://github.com/danieloliv1', '_blank')
}

function clickLinkedIn() {
    document.querySelector('class.card-wrapper')
    window.open('https://www.linkedin.com/in/danieloliv1/', '_blank')
}

function clickInstagram() {
    document.querySelector('class.card-wrapper')
    window.open('https://instagram.com/danieloliv1', '_blank')
}

function clickHome() {
    document.getElementById('toggle').checked = false
}
