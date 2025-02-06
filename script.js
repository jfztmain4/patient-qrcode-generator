function generateQRCode() {
    var form = document.getElementById('patientForm');
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
        Weight: ${data.weight}\n
        Gender: ${data.gender}
    `;
    if (confirm(confirmationMessage)) {
        var qrCodeData = JSON.stringify(data);

        // Clear previous QR code if any
        var qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";

        // Generate new QR code
        var qrCode = new QRCode(qrcodeContainer, {
            text: qrCodeData,
            width: 128,
            height: 128
        });

        // Scroll to QR code
        qrcodeContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        // Allow user to edit their information
        alert("Please correct your information and try again.");
    }
}
