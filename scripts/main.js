let mi = document.querySelector('img')
mi.onclick = function() {
    let mis = mi.getAttribute("src");
    if (mis === "images/gray-owl.jpg")
        mi.setAttribute("src", "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg");
    else
        mi.setAttribute("src", "images/gray-owl.jpg");
}

var buttonUserChange = document.querySelector("button");
var pageHeading = document.querySelector("h1");

function formHiText (un)
{
    localStorage.setItem("userName", un);
    pageHeading.textContent = "Приветствую Вас, уважаемый " + un +"!";
}

function setPageHeadingText()
{
    let un = prompt("Пожалуйста, укажите свое имя:");
    if (un == "") 
        un = "Неизвестный"
    formHiText( un );
}

userChangeBtn.onclick = function () {
    setPageHeadingText();
}

let un = localStorage.getItem("userName"); 
if (un == null)
{
    setPageHeadingText();
}
else {
    formHiText( un );
}

// if(!localStorage.getItem('userName')) {
//     setPageHeadingText();
// } 
// else {
//     let storedName = localStorage.getItem('userName');
//     pageHeading.textContent = formHiText(storedName);
// }