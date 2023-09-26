/* Opgave 1*/


const name = 'Gunnar';
const years = "30";

const message = `Hej ${name} du har nu arbejdet i vores virksomhed i ${years} år`

const messageElement = document.getElementById("message");

messageElement.innerHTML = message;

console.log(message);


/* Opgave 1*/


const myData=[
    { "navn": "T-shirt",
    "beskrivelse": "En t-shirt lavet af bomuld",
    "pris": 99 },
    { "navn": "Jeans",
    "beskrivelse": "Blå denim jeans med straight fit",
    "pris": 299
    },
    { "navn": "Hættetrøje",
    "beskrivelse": "En grå hættetrøje med lynlås",
    "pris": 199 }
    ]             

const produktListe = document.getElementById("produktListe");

console.log(produktListe);

//Fik hjælp fra chatgpt
const produktElements = myData.map((produkt) => {
   
    const produktElement = document.createElement("article");
    produktElement.classList.add("produkt");
  
   
    produktElement.innerHTML = `
      <h2>${produkt.navn}</h2>
      <p>${produkt.beskrivelse}</p>
      <p>Pris: ${produkt.pris} kr.</p>
    `;
  
    return produktElement;
  });
  

  produktElements.forEach((element) => {
    produktListe.appendChild(element);
  });



/* Opgave 3 - skriv videre på koden her: */
//Fik hjælp fra chatgpt
// array med person data
const myPersons = [];

// Funktion til at tilføje en person til myPersons array
function tilføjPerson(navn, alder) {
    myPersons.push({ navn, alder });
}

// Funktion til at vise den sorteret liste
function visSorteretListe() {
    // Sortér myPersons arrayet efter alder
    myPersons.sort((a, b) => a.alder - b.alder);

    // Ryd personList før den sorteret liste vises
    personList.innerHTML = "";

    // Gennemgå den sorteret array og opret listeelementer med template strings
    myPersons.forEach(person => {
        const listeelement = document.createElement("li");
        listeelement.textContent = `${person.navn} (${person.alder} år gammel)`;
        personList.appendChild(listeelement);
    });
}

// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

// Eventlistener til "Indsend" knappen klik
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Find input felterne fra formularen
    const navnInput = myForm.querySelector('#navn');
    const alderInput = myForm.querySelector('#alder');

    const navn = navnInput.value.trim();
    const alder = parseInt(alderInput.value);

    if (navn !== "" && !isNaN(alder)) {
        tilføjPerson(navn, alder);
        navnInput.value = "";
        alderInput.value = "";
        visSorteretListe();
    } else {
        alert("Indtast venligst et gyldigt navn og alder.");
    }
});


