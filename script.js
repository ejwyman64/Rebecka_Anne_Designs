var d = new Date();
var time = document.getElementById("time").innerHTML = "<h1>Time: " + d.getHours() + ":" + d.getMinutes() + "</h1>";

window.addEventListener("load", displayHomePage);
document.getElementById("aboutButton").addEventListener("click", displayAboutPage);
document.getElementById("homeButton").addEventListener("click", displayHomePage);
// This function will allow me to dynamically display the about page.
function displayAboutPage() {
    document.getElementById("currentState").innerHTML =
        "<h3>Rebecka Anne Pinkham ~ Owner and Chief of Design since 2019</h3>" + "<p>Blah blah blah, stuff about Becka.</p>";
}

function displayHomePage() {
    document.getElementById("currentState").innerHTML =
        `            <h1 class="greeting">Welcome to my website!</h1>
    <p>Lorem ipsum dolor amet tilde knausgaard helvetica waistcoat poutine neutra try-hard.
        Messenger bag flannel cold-pressed vegan, before they sold out hella palo santo kitsch franzen.
        Blog sartorial cred bicycle rights hella 3 wolf moon. Bushwick narwhal copper mug cred glossier
        mumblecore squid hot chicken brooklyn 3 wolf moon beard distillery everyday carry literally man bun.
    </p>`;
}