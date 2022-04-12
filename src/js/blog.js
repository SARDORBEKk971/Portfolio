const navBurger = document.getElementById('nav_burger');
const navCancel = document.getElementById('nav_cancel');
const navList = document.getElementById('nav_lists');
const navContainer = document.getElementById('nav_container');
const sectionImg = document.querySelector('.content_image')
const faders = document.querySelectorAll('.fade-in');


const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = (event) => {
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
const headerObserber = new IntersectionObserver((entries, sectionOneObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navContainer.classList.add('sticky');
        }else {
            navContainer.classList.remove('sticky')
        }
    })  
}, sectionOne)

headerObserber.observe(sectionImg)
