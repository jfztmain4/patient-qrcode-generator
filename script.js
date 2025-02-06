function generateQRCode() {
    var form = document.getElementById('patientForm');
    
    // Check if all fields are filled
    if (!form.checkValidity()) {
        alert("Please fill in all the required fields.");
        return;
    }

    var data = {
        name: form.name.value,
        age: form.age.value,
        address: form.address.value,
        contact: form.contact.value,
        weight: form.weight.value,
        gender: form.gender.value
    };

    // Prompt user to confirm information
    var confirmationMessage = `
        Please confirm your information:\n
        Name: ${data.name}\n
        Age: ${data.age}\n
        Address: ${data.address}\n
        Contact Number: ${data.contact}\n
        Weight: ${data.weight} kg\n
        Gender: ${data.gender}
    `;
    if (confirm(confirmationMessage)) {
        var qrCodeData = JSON.stringify(data);

        // Redirect to qr.html with QR code data
        var encodedData = encodeURIComponent(qrCodeData);
        window.location.href = `qr.html?data=${encodedData}`;
    } else {
        // Allow user to edit their information
        alert("Please correct your information and try again.");
    }
}
