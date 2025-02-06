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
}
