import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import { BrowserRouter  } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import axios from 'axios';

localStorage.setItem("host", "https://api.legalfirst.id/");

axios.defaults.baseURL = "https://api.legalfirst.id/api"
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Authorization'] = 'Basic ODgwY2ZjMWE4ZWFmYTVkYzBkNDM2MDFjNDg3YWZhZThjMWYzZDhhYw==';

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
 