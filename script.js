
//Toggle to change theme color
const html = document.getElementById('main');
const toggleButton = document.getElementById('toggle-button');
const toggleText = document.getElementById('toggle-text');
const toggleIcon = document.getElementById('toggle-icon');
toggleButton.addEventListener('click', toggleTheme);

function toggleTheme(){
    html.setAttribute('data-theme', html.getAttribute('data-theme') === 'light-mode' ? 'dark-mode' : 'light-mode');
        if(html.getAttribute('data-theme') === 'light-mode'){
            toggleIcon.setAttribute('class', 'far fa-moon');
            toggleText.innerText = "To Dark Mode";
        } else {
            toggleIcon.setAttribute('class', 'far fa-sun');
            toggleText.innerText = "To Light Mode";
        }
}

//toggle Nav

function toggleNavIcon(){
    const navLinks = document.querySelector("div#nav-links");
    if(navLinks.style.display === "block"){
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}



//job experience vertical tab
function displayJob(evt, companyName){

    const tabContent = document.getElementsByClassName('tab-content');
    const firstElmJob = document.getElementById('misumi-tab');
    
    for(i = 0; i < tabContent.length; i++){
        firstElmJob.style.background = "var(--main-bg-color)";
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab-links");
    for(i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(companyName).style.display = "block";
    evt.currentTarget.className += " active";

}

//clipboard
const clipboard = new ClipboardJS('.cta');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

//display clipboard tooltip
tippy('[data-tippy-content]');


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


