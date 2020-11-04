function calc_tax() {
    income_value = document.querySelector("#income").value;
    wealth_value = document.querySelector("#wealth").value;
    document.querySelector("#tax").value = (0.35 * income_value) + (0.25 * wealth_value);
}
