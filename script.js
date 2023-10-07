const bookTableBody = document.getElementById("bookTableBody");
const sheetName = "booksheet";
const url = "https://sheets.googleapis.com/v4/spreadsheets/";
const sheetId = "1s1nqYpAwDQKK9cEucb-LGNiID-VkXd0zLThyhwTU_ko";
const apiKey = "AIzaSyC55L8EqTgt1_LspLCTcGGc0I-7RyJhDpc";
const range = "A2:E100";

function callSheets(){
    fetch(url + sheetId + "/values/" + sheetName + "!" + range + "?key=" + apiKey)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        populateTable(data.values);
    });
}

// function to populate the table with book data 
function populateTable(data) {
    data.forEach((book) => {
        const row = document.createElement("tr");
        console.log(book);
        // <td>${book[2].join("<br>")}</td>
        row.innerHTML = `
                    <td style="text-align: left">${book[0]}</td>
                    <td><img src="images/${book[1]}" width="160" height="200"></td>
                    <td>${book[2]}</td>
                    <td width="360" height="200" style="text-align: left">${book[3]}</td>
                    <td>${book[4] ? "✅" : "❌"}</td>
                    `;
                    bookTableBody.appendChild(row);
                });
}
            

callSheets();
const submissionLink = document.getElementById("submissionLink");

submissionLink.addEventListener("click", function (e) {
    e.preventDefault();// prevent redirect to default
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScUJJhHS3nSsYZo-6kHufEa7YuGw0dEIwOm_SUguR7xz3320A/viewform?usp=sf_link";
    window.open(googleFormURL, "_blank", "noopener noreferrer");
});