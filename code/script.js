
// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("sectionOne");
section1Element.addEventListener("click", toggleFunction);

const section2Element = document.getElementById("sectionTwo");
section2Element.addEventListener("click", toggleFunction);

const section3Element = document.getElementById("sectionThree");
section3Element.addEventListener("click", toggleFunction); 


const accordionElement = document.getElementById("accordion");

// ----- fetch

const responsePromise = fetch("https://jsonplaceholder.typicode.com/posts"); // får ett promise att vi ska få ett response-objekt... men går inte att använda här, måste använda 'then' som vi gjort nedanför

// i 'then()' har vi fått det riktiga response-objektet
//Sen väntar man på json-omvandling till ett js-objekt (dataPromise).
const dataPromise = responsePromise.then ( (response) => {
  return response.json(); // 
} );

const menuIconElement = document.getElementById("menuIconId");
// i then har du riktiga javascript-datan...
dataPromise.then( (dataArrayOfObjects) => {

  for (let i = 0; i < dataArrayOfObjects.length; i++) {
   /*  console.log(dataArrayOfObjects[i]); */
    const clone_menuIconElement = menuIconElement.cloneNode(true);
    clone_menuIconElement.setAttribute("class", "menuIconClass");

    const divTitle = document.createElement("div");
    divTitle.setAttribute("class", "title");
    if ( i % 2 == 0) {
      /* divTitle.style.backgroundColor = "rgb(192, 192, 192)"; */
      divTitle.setAttribute("class", "titleEven");
    }
    /* divTitle.setAttribute("id", `section${i}`); */ // behöver inte?
    divTitle.addEventListener("click", toggleFunction);
    divTitle.innerHTML = dataArrayOfObjects[i].title;
    divTitle.appendChild(clone_menuIconElement); 


    accordionElement.appendChild(divTitle);
    console.log("title:", dataArrayOfObjects[i].title);

    const divDescription = document.createElement("div");
    divDescription.setAttribute("class", "description");
   /*  divDescriptionParagraph,textContent = dataArrayOfObjects[i].body; */
    divDescription.innerHTML = `<p>${dataArrayOfObjects[i].body}</p>`; 

    accordionElement.appendChild(divDescription);
    console.log("description:", dataArrayOfObjects[i].body);

   /*  console.log(divTitle.innerHTML); */
  }
});


// A function that adds and remove the class "active" on the section you click on.
function toggleFunction(e) {
  const element = e.target;
  element.classList.toggle("active");

  console.log("hej");
  console.log(section1Element.classList);

  
}

