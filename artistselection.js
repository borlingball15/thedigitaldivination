// Load the JSON file
fetch('xxl_freshman.json')
    .then(response => response.json())
    .then(data => {
        const selectedYear = localStorage.getItem("selectedYear");
        document.getElementById("yearDisplay").innerText = selectedYear;

        const artists = data[selectedYear].map(artist => artist.toUpperCase());

        const artistListElement = document.getElementById("artistList");
        artists.forEach(artist => {
            const listItem = document.createElement("li");
            listItem.textContent = artist;
            listItem.style.fontFamily = "Helvetica Neue, Helvetica, Arial, sans-serif";
            listItem.style.fontWeight = "bold";
            artistListElement.appendChild(listItem);
        });
    });
