let lang = localStorage.getItem("lang");
let headerLoaded = false;

// Fetches the header and footer from index.html, and inserts in into current page
function myLoad() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        let indexPage = document.createElement("DIV");
        indexPage.innerHTML = xhr.responseText;

        const header = indexPage.querySelector("#header");
        const footer = indexPage.querySelector("#footer");

        // Pre-inserts language content
        for(let elem of ["header", "footer"])
        for (let key of Object.keys(language[elem][lang])) {
            try{
                if (elem === "header")
                    header.querySelector("#" + key).innerText = language[elem][lang][key];
                else if (elem === "footer")
                    footer.querySelector("#" + key).innerText = language[elem][lang][key];
            }catch (err) {console.log(err.message, "->", lang, key)
            }}

        // Pre-inserts selects colour of language button, and nav buttons to selected language and page
        header.querySelector("#header_"+page).style.color = "#317A85";
        const engBtn = indexPage.querySelector("#btn_lang_eng");
        const norBtn = indexPage.querySelector("#btn_lang_nor");
        if (lang === "no"){
            norBtn.style.color = "#317A85";
            engBtn.style.color = "#FFFFFF";
        }else if (lang === "en"){
            norBtn.style.color = "#FFFFFF";
            engBtn.style.color = "#317A85";
        }

        let target = document.querySelector(".main-wrapper");
        target.prepend(header);
        target.append(footer);

        if(page === "contact"){
            const footer_copy = footer.cloneNode(true);
            footer_copy.setAttribute("id", "contact_header");
            footer_copy.setAttribute("class", "footer");
            document.getElementById("footer_content").replaceWith(footer_copy)
        }

    };
    xhr.open("GET", "index.html", true);
    xhr.send();
    headerLoaded = true;
}

// Iterates through the language object, then adds then to the DOM
function addLangContent(lang, elem) {
    const engBtn = document.getElementById("btn_lang_eng");
    const norBtn = document.getElementById("btn_lang_nor");
    // Changes colour of language buttons based on "lang"
    if (headerLoaded || page === "index"){
        if (lang === "no"){
            norBtn.style.color = "#317A85";
            engBtn.style.color = "#FFFFFF";
        }else if (lang === "en"){
            norBtn.style.color = "#FFFFFF";
            engBtn.style.color = "#317A85";
        }
    }
    // Add content to page based on "page" and "lang"
    for (let key of Object.keys(language[elem][lang])) {
        try{
            document.getElementById(key).innerText = language[elem][lang][key];
        }catch (err) {console.log(err.message, "->", key)
        }}
}

// Sets the language from the buttons and saves it in local memory for later.
function engBtn() {
    let lang = "en";
    localStorage.setItem("lang", "en");
    addLangContent(lang, page);
    addLangContent(lang, "header");
    addLangContent(lang, "footer");
}

// Sets the language from the buttons and saves it in local memory for later.
function norBtn() {
    let lang = "no";
    localStorage.setItem("lang", "no");
    addLangContent(lang, page);
    addLangContent(lang, "header");
    addLangContent(lang, "footer");
}

// When "send mail" is pressed in "contact" page, show popup.
function submitForm() {
    if (lang === "en")
        alert("Message sendt");
    else if (lang === "no")
        alert("Melding sendt");
}

// Shows and hides the navigation bar when on small screen, and dropdown menu is pressed.
function hideNavBar() {
    const header = document.getElementById("header");
    const logo = document.getElementById("logo");
    const languageBtn = document.querySelector(".langSelect");
    if (header.className === "nav") {
        logo.style.display = "none";
        languageBtn.style.display = "none";
        header.className += " responsive";
    } else {
        header.className = "nav";
        logo.style.display = "block";
        languageBtn.style.display = "block";
    }
}

// Changes colour of button depending on current page
function pageSelectorColour(page){
    document.getElementById("header_"+page).style.color = "#317A85"
}

// Cycle hover effect on multiple images
let imageCycle = 0;
let lastImageCycle = 1;
const cycle = document.querySelectorAll(".cycle");
function hoverCycle() {
        if (imageCycle < cycle.length) {
            cycle[lastImageCycle].className = "cycle";
            cycle[imageCycle].className += " hover";
            lastImageCycle = imageCycle;
            imageCycle++;
            setTimeout(hoverCycle, 5000);
        } else {
            imageCycle = 0;
            hoverCycle()
        }
}
function hover() {
    cycle[imageCycle - 1].className = "cycle";
}

// On reload or open subsite. Checks the "lang" variable and sets "lang" accordingly.
function main(){
    if(lang){
        addLangContent(lang, page);
        if(page === "index") {
            addLangContent(lang, "header");
            addLangContent(lang, "footer");
        }
    }else{
        lang = "no";
        addLangContent(lang, page);
        if(page === "index") {
            addLangContent("no", "header");
            addLangContent("no", "footer");
        }
    }
    // If page is not index, load header and footer
    if(page !== "index"){
        myLoad();
    }
    if(page === "index"){
        pageSelectorColour(page)
    }
    if(page === "projects"){
        hoverCycle()
    }

}
main();
