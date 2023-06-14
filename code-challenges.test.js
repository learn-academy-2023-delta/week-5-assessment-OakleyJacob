// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
describe("", ()=>{
    it("", () => {
        expect().toEqual()
    })
})
// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.







describe("encodeString", ()=>{
    it("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"

        expect(encodeString(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(encodeString2(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(encodeString2(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

const encodeString = (string) => {
    return string.split('').map(value =>{
        switch(value.toLowerCase()) {
            case 'a':
                return '4'
            case 'e':
                return '3'
            case 'i':
                return '1'
            case 'o':
                return '0'
            default:
                return value
          }}).join('')
}
const encodeString2 = (string) => {
    return string.split('').reduce((acc, value) =>{
        testLetter = value.toLowerCase()
        testLetter==='a'?acc = acc + '4':
        testLetter==='e'?acc = acc + '3':
        testLetter==='i'?acc = acc + '1':
        testLetter==='o'?acc = acc + '0':
        acc = acc + value
        return acc
    }
, "")
}

// b) Create the function that makes the test pass.

// Pseudo code: 
// Create a function that takes in a string
// Split the string with a blank string as the delimiter, this means we are working with an array of the letters that made up the original word
// Utilize map (or reduce) to iterate over the array of letters, replacing the appopriate letters with their number counterparts
// When using map, join the array back together with the same blank delimiter and return the new word.
// No join is necessary for reduce as we are building the string inside the function


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.


describe("filterArray", ()=>{
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const filterLetterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const filterLetterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]

        expect(filterArray(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(filterArray(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

const filterArray = (array, letter) => array.filter(value => value.toLowerCase().includes(letter))


//Could have also done this with reduce or a for loop or even map if you tried hard, but this one liner is too clean for me to be unhappy with




// b) Create the function that makes the test pass.
// Pseudo code:
// Create a function that has two parameters
// We are expecting an array of strings and a standalone string(single letter)
// Iterate over the array with the .filter method only returning the words that include the letter we received





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.



// a) Create a test with expect statements using the variable provided.

describe("checkForFullHouse", ()=>{
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
        expect(checkForFullHouse(hand1)).toEqual(true)
        expect(checkForFullHouse2(hand2)).toEqual(false)
        expect(checkForFullHouse(hand3)).toEqual(false)
        expect(checkForFullHouse2(hand4)).toEqual(true)
    })
})


const checkForFullHouse = (array) => {
    if (array.length !== 5){
        return false
    }
    class cardInHand{
       constructor(cardNumber){
        this.cardNumber=cardNumber;
        this.quantity = 1
        }
        addCard = () => {
            this.quantity+=1
        }
    }
    let cardStacks = array.reduce((cardObjectsArray, value) => {
        if (!cardObjectsArray.some(cardObject => cardObject.cardNumber === value)){
            cardObjectsArray.push(new cardInHand(value))
        } else {
            cardObjectsArray.map(cardObject => {
                cardObject.cardNumber === value?cardObject.addCard():null
            })
        }
        return cardObjectsArray
        }, [])
    
    if (cardStacks.length !== 2 || cardStacks.some(cardObject => cardObject.quantity > 3)){
        return false
    }
    else {
        return true
    }
}

// TBH my first pass at this problem feels overly complicated and long, but it is robust


const checkForFullHouse2 = (array) => {
    if (array.length !== 5) {
      return false;
    }
    const cardCounts = array.reduce((acc, value) => { 
        acc[value] = (acc[value] || 0) + 1;
        return acc
    }, {})

    if (Object.keys(cardCounts).length !== 2) {
        return false
    }
    if (Object.values(cardCounts).filter(value => value !== 3 && value !==2).length !==0){
        return false
    }
    else {
        return true}
}



// b) Create the function that makes the test pass.


// Pseudo code:
// Create a function called checkForFullHouse that takes in an array of numbers
// Create a class within the function called cardInHand
// This class will hold the card number and the number of times the card appears in the hand
// Iterate over the original array(the hand of cards) 
// For each card, check if the card already has a corresponding object in teh cardObjectsArray
// If it does add one to the count for that card
// If it does not create a card object and stick it into the array
// Once we have our array of card stacks we do some conditional checks to ensure the original hand was a full house
// Namely we cannot have more than 2 cards in teh cardstack, and the quanity of those cards cannot be higher than 3


//After a little research and a bit of thinking I got this solution which I think is much cleaner
// In the second solution we use reduce to iterate over the array
// As we iterate we create a single object, with key value pairs corresponding to the card numbers and their quanitities
// After Iterating we make sure the number keys (different cards) is 2, the only valid count for different cards in a full house
// We also ensure the values of those different cards is 3 or 2
// Returning true if we pass all conditions
