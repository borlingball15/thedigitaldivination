
const slider = document.getElementById("myRange");
const yearDisplay = document.getElementById("year");
const goButton = document.querySelector("button");

slider.oninput = function() {
    const year = 2000 + parseInt(this.value);
    yearDisplay.innerHTML = year;
    yearDisplay.style.fontSize = "60px"; 
    slider.style.marginBottom = "10px"; // Adjust the value to reduce the gap
}

function goToArtistSelection() {
    const selectedYear = 2000 + parseInt(slider.value);
    console.log(`Accessing xxl_freshman.json for year ${selectedYear}`);
    localStorage.setItem("selectedYear", selectedYear);
    window.location.href = `artistselection.html?year=${selectedYear}`;
}
