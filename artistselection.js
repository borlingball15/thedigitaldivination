fetch('https://raw.githubusercontent.com/dariusk/corpora/27c133b7b3adb318582103a1895a2c9b1514ea54/data/music/xxl_freshman.json')
    .then(response => response.json())
    .then(data => {
        const selectedYear = localStorage.getItem("selectedYear");
        document.getElementById("selectedYear").innerText = selectedYear;

        const artists = data[selectedYear].map(artist => artist.toUpperCase());

        const artistListElement = document.getElementById("artistList");
        artists.forEach(artist => {
            const listItem = document.createElement("li");
            listItem.textContent = artist;
            listItem.style.fontSize = "30px";
            listItem.style.opacity = "0.8";
            listItem.style.transition = "opacity 0.3s";
            listItem.style.fontWeight = "bold";
            listItem.addEventListener("mouseover", () => {
                listItem.style.opacity = "1";
            });
            listItem.addEventListener("mouseout", () => {
                listItem.style.opacity = "0.8";
            });
            artistListElement.appendChild(listItem);
        });

        // Aspace
        const spacer = document.createElement("span");
        spacer.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; 
        artistListElement.parentNode.insertBefore(spacer, artistListElement);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
