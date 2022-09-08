/* Author: 

*/
//for bubbling demonstration 
let parent = document.querySelector(".bubbling .parent");
let child = document.querySelector(".bubbling .child");
// let body = document.querySelector("body");
parent.addEventListener('click', () => {
    alert("parent clicked");
});

child.addEventListener('click', () => {
    alert("child clicked");
});

// body.addEventListener('click', () => {
//     alert("body clicked");
// });

//bubbling demonstration ends here

//event target 
parent = document.querySelector(".event-target .parent");
child = document.querySelector(".event-target .child");

parent.addEventListener('click', (e) => {
    alert("target = " + e.target.className + ", this=" + e.currentTarget.className);
});

child.addEventListener('click', (e) => {;
    alert("target = " + e.target.className + ", this=" + e.currentTarget.className);
});

//event target ends here

//stop bubbling
parent = document.querySelector(".stop-bubbling .parent");
child = document.querySelector(".stop-bubbling  .child");

parent.addEventListener('click', (e) => {
    alert("parent clicked");
    e.stopPropagation();
});

child.addEventListener('click', (e) => {
    alert("child clicked");
    e.stopPropagation();
});

// stop immediate propagation
// child.addEventListener('click', (e) => {
//     alert("child clicked");
//     e.stopImmediatePropagation();
// });
// child.addEventListener('click', () => {
//     alert("child clicked 2");
// })

//bubbling ends here