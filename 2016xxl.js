document.addEventListener("DOMContentLoaded", function () {
    fetchAsync();

    let newNumInt = JSON.parse(localStorage.getItem("number"));

    async function fetchAsync() {
        try {
            // await response of fetch call
            let response = await fetch('xxl2016.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // only proceed once promise is resolved
            const data = await response.json();
            // only proceed once second promise is resolved
            showArtist(data);
        } catch (error) {
            console.error("fetch error:,", error);
        }
    }

    function showArtist(newData) {
        console.log(newData);
        const artist = newData.artist[newNumInt];
        document.getElementById("name").innerText = artist.name;
        document.getElementById("label").innerText = artist.label;
        document.getElementById("age").innerText = artist.age;
        document.getElementById("famous-song").innerText = artist["famous song"];
        document.getElementById("art").src = artist.art;
    }
});
