function calc_tax() {
    let income_value = document.querySelector("#income").value;
    let wealth_value = document.querySelector("#wealth").value;
    document.querySelector("#tax").value = (0.35 * income_value) + (0.25 * wealth_value);
}
