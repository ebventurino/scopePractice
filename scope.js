
//                             Challenge 1
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

// for (let x = 0; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
    
// }

//                             Challenge 2




// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")

//                          Challenge 3
{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }
    const HTMLRepresentation = `<h1>The Mod Squad</h1>`

    document.querySelector(".show-info").innerHTML = HTMLRepresentation
    ModSquad.members.forEach((member) => {
        let HTMLRepresentation = `<div>${member}</div>`
    });
}
