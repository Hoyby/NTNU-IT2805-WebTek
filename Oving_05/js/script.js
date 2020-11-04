/* Part 2 */
console.log('PART 2');

    //print the numbers 1-20
for (let i = 1; i < 21; i++){ /*loop, variable i = 1, keep running as long as i is less than 21, add 1 to i each cycle*/
    console.log([i]); /*print i each cycle*/
}




/* Part 3 */
console.log('PART 3');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let x in numbers){
    if (numbers[x] % 3 === 0 && numbers[x] % 5 === 0){ /*If x is divisable by 3 and 5, print eplekake*/
        console.log("eplekake");
    }else if (numbers[x] % 3 === 0 && !numbers[x] % 5 === 0){ /*If x is divisable by 3 and not 5, print eple*/
        console.log("eple");
    } else if (numbers[x] % 5 === 0 && !numbers[x] % 3 === 0){ /*If x is divisable by 5 and not 3, print kake*/
        console.log("kake");
    } else{
        console.log(numbers[x]); /* Prints to console*/
    }}

/* Part 4 */

document.getElementById("title").innerText = "Hello Javascript"; /*Puts text in element*/


/* Part 5 */
function changeDisplay () {
    document.getElementById("magic").style.display = "none"; /*Function is called in HTML*/
}

function changeVisibility () {
    document.getElementById("magic").style.visibility = "hidden"; /*Sets the visibility attribute to "hidden"*/
}

function reset () {
    document.getElementById("magic").style.display = "block"; /*Resets attributes to default*/
    document.getElementById("magic").style.visibility = "visible";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

for (let i in technologies){
    const element = document.createElement("li"); /*Create tag*/
    let text = document.createTextNode(technologies[i]); /*Create text*/
    element.appendChild(text); /*Put text in tag*/
    document.getElementById("tech").appendChild(element); /*Put tag containing text in element "tech"*/
}

