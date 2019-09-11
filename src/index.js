import './styles/general.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AOS from 'aos';
import 'aos/dist/aos.css';

ReactDOM.render(<App />, document.querySelector('#root'));

AOS.init({
  duration : 600
});

AOS.refresh();

let mainNavLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
  
    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        if(!link.classList.contains("current")) {
          link.classList.add("current");
        }
      } else {
        link.classList.remove("current");
      }
    });
  });