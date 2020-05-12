// Import stylesheets
// import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>console.log</h1>`;

// Result 1
const result1 = [
    { value: "0", display: "Jamsheer" },
    { value: "1", display: "Muhammed" },
    { value: "2", display: "Ravi" },
    { value: "3", display: "Ajmal" },
    { value: "4", display: "Ryan" }
]

// Result 2
const result2 = [
    { value: "0", display: "Jamsheer" },
    { value: "1", display: "Muhammed" },
    { value: "2", display: "Ravi" },
    { value: "3", display: "Ajmal" },
]


//Find values that are in result1 but not in result2
const uniqueResultOne = result1.filter(function(obj) {
    return !result2.some(function(obj2) {
        return obj.value == obj2.value;
    });
});

console.log('uniqueResultOne', uniqueResultOne);

// https://stackoverflow.com/questions/21987909/how-to-get-the-difference-between-two-arrays-of-objects-in-javascript