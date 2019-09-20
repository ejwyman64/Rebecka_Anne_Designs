// Current State will be what is seen in the main section of the window.
let currentState = document.getElementById("currentState");

var aboutPage =
    `<div id="aboutPage" class="hide state">
        <h3>Rebecka Anne Pinkham ~ Owner and Chief of Design since 2019</h3>
        <p>Blah blah blah, stuff about Becka.</p>
    </div>`;

var homePage =
    `<div id="homePage" class="hide state">
        <h1 class="greeting">Welcome to my website!</h1>
        <p>Lorem ipsum dolor amet tilde knausgaard helvetica waistcoat poutine neutra try-hard.
        Messenger bag flannel cold-pressed vegan, before they sold out hella palo santo kitsch franzen.
        Blog sartorial cred bicycle rights hella 3 wolf moon. Bushwick narwhal copper mug cred glossier
        mumblecore squid hot chicken brooklyn 3 wolf moon beard distillery everyday carry literally man bun.
        </p>
    </div>`;

var galleryPage =
    `<div id="galleryPage" class="hide state">
        <img class="galImg" src="img/QueenB.jpg" alt="Girl with a crown on her head.">
        <img class="galImg" src="img/Icecream.jpg" alt="Ice cream cone.">
        <img class="galImg" src="img/Psalm1.jpg" alt="Tree with roots.">
        <img class="galImg" src="img/Structures.jpg" alt="Front of building">
    </div>`;

var contactPage =
    `<div id="contactPage" class="hide state">
        <h2>How to contact Rebecka Anne</h2>
        <p>Contact information here. Blah blah blah. 555-555-5555</p>
    </div>`;


//Buttons
let buttons = [];
buttons[0] = document.getElementById("homeButton");
buttons[1] = document.getElementById("aboutButton");
buttons[2] = document.getElementById("galleryButton");
buttons[3] = document.getElementById("contactButton");

buttons.forEach(btn => {
    btn.addEventListener("click", displayPage);
});



//Event listener for loading the home page at start.
let windowLoad = window.addEventListener("load", displayPage);

// This function will allow me to dynamically display each page. 
function displayPage() {
    if (event.target == buttons[0]) {

        console.log(currentState);
        currentState.innerHTML = homePage;
        displayTransitions(currentState);


    } else if (event.target == buttons[1]) {
        console.log(currentState);
        currentState.innerHTML = aboutPage;
        displayTransitions(currentState);


    } else if (event.target == buttons[2]) {
        console.log(currentState);
        currentState.innerHTML = galleryPage;
        displayTransitions(currentState);


    } else if (event.target == buttons[3]) {
        console.log(currentState);
        currentState.innerHTML = contactPage;
        displayTransitions(currentState);


    } else {
        currentState.innerHTML = homePage;
        displayTransitions(currentState);
    }
}


function displayTransitions(state) {
    if (state.firstChild.className == "hide state") {
        state.firstChild.className = "show state";
        console.log(currentState);
    } else {
        state.firstChild.className.firstChild = "hide state";
    }
}

console.log(currentState);