// document.addEventListener("DOMContentLoaded", function () {
//     fetchAsync();

//     let newNumInt = JSON.parse(localStorage.getItem("number"));

//     async function fetchAsync() {
//         try {
//             // fetch call
//             let response = await fetch('./2016freshman.json');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             // 
//             const data = await response.json();
//             // 
//             showArtist(data);
//         } catch (error) {
//             console.error("fetch error:,", error);
//         }
//     }

//     function showArtist(newData) {
//         console.log(newData);
//         const artist = newData.artist[newNumInt];
//         document.getElementById("name").innerText = artist.name;
//         document.getElementById("label").innerText = artist.label;
//         document.getElementById("age").innerText = artist.age;
//         document.getElementById("famous-song").innerText = artist["famous song"];
//         document.getElementById("art").src = artist.art;
//     }
// });

document.addEventListener("DOMContentLoaded",function(){

    fetchAsync();

    let newNumInt = JSON.parse(localStorage.getItem("number"));

    async function fetchAsync () {
        try {
            // await response of fetch call
            let response = await fetch('./2016freshman.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // only proceed once promise is resolved
            const data = await response.json();
            // only proceed once second promise is resolved

            console.log(data);
            showArtist(data);
            //return data;
            
        } catch (error) {
        console.error("fetch error:,", error);
        }
    }

    function showArtist(newData){
    
        console.log(newData);
        document.querySelector("#artistInfo").innerHTML = `<h1 style="font-family: Helvetica, Arial, sans-serif; font-weight: bold; text-transform: uppercase;">${newData.artist[9].name}</h1>
        <p style="font-family: Helvetica, Arial, sans-serif;">${newData.artist[9].label}</p>
        <p style="font-family: Helvetica, Arial, sans-serif;">${newData.artist[9].age}</p>
        <img src="${newData.artist[9].art}" style="border-radius: 10px;" width="500" height="600"> 
        `
    }
    
});