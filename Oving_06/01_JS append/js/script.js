

// Select form
const target = document.querySelector("#form_1");

// Creates div containing lable and input elements
function create_div(label) {
    let c_div = document.createElement("div");
    let c_label = document.createElement("label");
    let c_input = document.createElement("input");
    let c_txt = document.createTextNode(label);
    c_label.appendChild(c_txt);
    c_div.appendChild(c_label); c_div.appendChild(c_input);
    return c_div;
}

// Adds element to DOM at position x
function add_label(pos, label){
    target.insertBefore(label, target.childNodes[pos])
}

function calc_tax() {
    income_value = document.querySelector("#income").value;
    wealth_value = document.querySelector("#wealth").value;
    document.querySelector("#tax").value = (0.35 * income_value) + (0.25 * wealth_value);
}

// Create fields
const income = create_div("Income");
const wealth = create_div("Wealth");
const tax = create_div("Tax");

// Set attributes for income, wealth and tax
// Lable
income.childNodes[0].setAttribute("for", "income");
wealth.childNodes[0].setAttribute("for", "wealth");
tax.childNodes[0].setAttribute("for", "tax");

// Input
income.childNodes[1].setAttribute("id", "income");
income.childNodes[1].setAttribute("name", "income");
income.childNodes[1].setAttribute("type", "number");
income.childNodes[1].setAttribute("min", "0");
income.childNodes[1].setAttribute("required","");
income.childNodes[1].setAttribute("onchange","calc_tax()");

wealth.childNodes[1].setAttribute("id", "wealth");
wealth.childNodes[1].setAttribute("name", "wealth");
wealth.childNodes[1].setAttribute("type", "number");
wealth.childNodes[1].setAttribute("min", "0");
wealth.childNodes[1].setAttribute("required","");
wealth.childNodes[1].setAttribute("onchange","calc_tax()");

tax.childNodes[1].setAttribute("id", "tax");
tax.childNodes[1].setAttribute("name", "tax");
tax.childNodes[1].setAttribute("disabled", "");

// Add fields to DOM
add_label(18, tax);
add_label(18, wealth);
add_label(18, income);

