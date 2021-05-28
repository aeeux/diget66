
// Add active class to the current 'a' element (highlighting the element)
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length

for (let i = 0; i < menuLength; i++) {

    if(menuItem[i].href === currentLocation) {
        menuItem[i].className = 'active';
    }
}

// Gsap.js

TweenMax.from("h1", 2, {
    delay: .1,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from("p", 2, {
    delay: .25,
    x: -100,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from("img", 2, {
    delay: .25,
    x: 100,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".menu-icon", 2, {
    delay: .25,
    x: -100,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from("iframe", 2, {
    delay: .25,
    x: 100,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from("button", 2, {
    delay: .1,
    x: 0,
    opacity: -1,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("ul li a", 2, {
      delay: .01,
      opacity: -1,
      y: 0,
      ease: Expo.easeInOut
});