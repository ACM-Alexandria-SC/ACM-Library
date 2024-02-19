const bookTableBody = document.getElementById("bookTableBody");


// function to populate the table with book data 
function populateTable() {
    books.forEach((book) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td style="text-align: left">${book.title}</td>
                    <td><img src="${book.cover}" width="160" height="200"></td>
                    <td>${book.authors.join("<br>")}</td>
                    <td width="360" height="200" style="text-align: left">${book.description}</td>
                    <td>${book.available ? "✅" : "❌"}</td>
                `;
        bookTableBody.appendChild(row);
    });
}

populateTable();      

const submissionLink = document.getElementById("submissionLink");

submissionLink.addEventListener("click", function (e) {
    e.preventDefault();// prevent redirect to default
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSebRFk6V4KoybWpvtqgcCa48kn6RGFh_qcdon-SQr2-6FU1DQ/viewform?usp=sf_link";
    window.open(googleFormURL, "_blank", "noopener noreferrer");
});
