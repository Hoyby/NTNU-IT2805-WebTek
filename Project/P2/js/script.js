
//Added after submitting P2
const img = document.createElement("img"); img.id = "subimg";
document.querySelector(".modal-content").appendChild(img);


function onClick(element) {
    document.getElementById("subimg").src = element.src; /* Sets modal image to the image opened */
    document.getElementById("modal").style.display = "block"; /* Display the modal block */
}