const form = document.getElementById("bookingForm");


form.addEventListener("submit", function(event){

    event.preventDefault();


    // Merr të dhënat nga formulari

    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let service = document.getElementById("service").value;

    let date = document.getElementById("date").value;

    let time = document.getElementById("time").value;



    // Vendose numrin tënd këtu
    // pa + dhe pa hapësira

    let myNumber = "38348190423";



    let message =
`Përshëndetje 👋
Dua të caktoj një termin.

👤 Emri: ${name}

📞 Telefoni: ${phone}

💅 Shërbimi: ${service}

📅 Data: ${date}

🕒 Ora: ${time}`;



    let whatsappURL =
    "https://wa.me/" + myNumber +
    "?text=" + encodeURIComponent(message);



    window.open(whatsappURL, "_blank");


});