// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
const nouns = ["cat", "dog", "tree", "house", "car"];
const verbs = ["ran", "jumped", "sang", "ate", "laughed"];
const adjectives = ["happy", "big", "red", "funny", "beautiful"];
const nouns2 = ["apple", "book", "flower", "shoes", "friend"];
const places = ["park", "beach", "mountain", "city", "forest"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // Get the array element and display it
    choosenNoun1.textContent = nouns[noun1Count];
    
    // Increment the count and reset if it exceeds the array length
    noun1Count++;
    if (noun1Count === nouns.length) {
        noun1Count = 0;
    }
}

function verb_on_click() {
    choosenVerb.textContent = verbs[verbCount];
    verbCount++;
    if (verbCount === verbs.length) {
        verbCount = 0;
    }
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectives[adjectiveCount];
    adjectiveCount++;
    if (adjectiveCount === adjectives.length) {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    choosenNoun2.textContent = nouns2[noun2Count];
    noun2Count++;
    if (noun2Count === nouns2.length) {
        noun2Count = 0;
    }
}

function setting_on_click() {
    choosenSetting.textContent = places[settingCount];
    settingCount++;
    if (settingCount === places.length) {
        settingCount = 0;
    }
}

// Concatenate the user story and display
function playback_on_click() {
    const userStory = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} in ${choosenSetting.textContent}.`;
    storyDisplay.textContent = userStory;
}

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = places[Math.floor(Math.random() * places.length)];
    
    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} in ${randomSetting}.`;
    storyDisplay.textContent = randomStory;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);

// Function to add student ID/name dynamically
function addStudentInfo() {
    const studentInfo = "Student: Your Name (Your Student ID)";
    const studentId = document.getElementById("studentId");
    studentId.textContent = studentInfo;
}

// Call the function to add student info when the page loads
window.addEventListener("load", addStudentInfo);


// ...

/* Function to add student ID/name dynamically */
function addStudentInfo() {
    const studentInfo = "Student: Ishan Sharma (200518162)";
    const studentId = document.getElementById("studentId");
    studentId.textContent = studentInfo;
}

// Call the function to add student info when the page loads
window.addEventListener("load", addStudentInfo);
