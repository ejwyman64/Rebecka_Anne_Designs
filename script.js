var d = new Date();
var time = document.getElementById("time").innerHTML = "<h1>Time: " + d.getHours() + ":" + d.getMinutes() + "</h1>";

var currentState = document.getElementById("currentState");

var aboutPage =
    `<div id="aboutPage" class="hide">
        <h3>Rebecka Anne Pinkham ~ Owner and Chief of Design since 2019</h3>
        <p>Blah blah blah, stuff about Becka.</p>
    </div>`;

var homePage =
    `<div id="homePage" class="hide">
        <h1 class="greeting">Welcome to my website!</h1>
        <p>Lorem ipsum dolor amet tilde knausgaard helvetica waistcoat poutine neutra try-hard.
        Messenger bag flannel cold-pressed vegan, before they sold out hella palo santo kitsch franzen.
        Blog sartorial cred bicycle rights hella 3 wolf moon. Bushwick narwhal copper mug cred glossier
        mumblecore squid hot chicken brooklyn 3 wolf moon beard distillery everyday carry literally man bun.
        </p>
    </div>`;

var storePage = 
    `<div id="storePage" class="hide">
        <p>This will have a gallery and a way for customers to order items.</p>
    </div>`;

var contactPage = 
    `<div id="contactPage" class="hide">
        <h2>How to contact Rebecka Anne</h2>
        <p>Contact information here. Blah blah blah. 555-555-5555</p>
    </div>`;

//Buttons
var aboutButton = document.getElementById("aboutButton");
var homeButton = document.getElementById("homeButton");
var storeButton = document.getElementById("storeButton");
var contactButton = document.getElementById("contactButton");


//Event Listeners
window.addEventListener("load", displayPage);
homeButton.addEventListener("click", displayPage);
aboutButton.addEventListener("click", displayPage);
storeButton.addEventListener("click", displayPage);
contactButton.addEventListener("click", displayPage);

// window.addEventListener("unload", unDisplayPage);


// This function will allow me to dynamically display each page.
function displayPage() {
    if(event.target == homeButton){
        currentState.innerHTML = homePage;
        displayTransitions(currentState)

    } else if(event.target == aboutButton){
        currentState.innerHTML = aboutPage;
        displayTransitions(currentState)

    } else if (event.target == storeButton){
        currentState.innerHTML = storePage;
        displayTransitions(currentState)

    } else if (event.target == contactButton){
        currentState.innerHTML = contactPage;
        displayTransitions(currentState)
 
    } else {
        currentState.innerHTML = homePage;
        displayTransitions(currentState)
    }
}

function unDisplayPage() {
    displayTransitions(event.target);
    console.log(event.target);
}

function displayTransitions(state) {
    if(state.firstChild.className == "hide"){
        state.firstChild.className = "show";
        console.log(currentState);
    } else {
        state.firstChild.className = "hide";
    }
}

console.log(currentState);