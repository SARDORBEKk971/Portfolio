const navBurger = document.getElementById('nav_burger');
const navCancel = document.getElementById('nav_cancel');
const navList = document.getElementById('nav_lists');
const navContainer = document.getElementById('nav_container');
const sectionImg = document.getElementById('about');
const faders = document.querySelectorAll('.fade-in');

const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// nav click part
navBurger.addEventListener('click', () => {
    navList.classList.add('active');
})

navCancel.addEventListener('click', () => {
    navList.classList.remove('active');
})
// Nav scroll appear part //
const sectionOne = {
    rootMargin: "-200px 0px 0px 0px"
}
const headerObserber = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navContainer.classList.add('sticky');
        }else {
            navContainer.classList.remove('sticky')
        }
    })  
}, sectionOne)

headerObserber.observe(sectionImg)

// Tabs here
function myFunc(evt, divname) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace('active', '');
    }
    document.getElementById(divname).style.display = "block";
    
    evt.currentTarget.className += 'active';
    
}
document.getElementById('about_me__story').click();

// faders part is here 

const appearOptions = {
    threshhold: 1,
    rootMargin: '0px 0px -250px 0px'
}
const appearFaders = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.toggle('appear');
            appearFaders.unobserve(entry.target)
        }
    })
}, appearOptions)

faders.forEach(fader => {
    appearFaders.observe(fader)
})
