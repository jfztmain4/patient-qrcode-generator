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
        Weight: ${data.weight}\n
        Gender: ${data.gender}
    `;
    if (confirm(confirmationMessage)) {
        var qrCodeData = JSON.stringify(data);

        // Clear previous QR code if any
        var qrcodeContainer = document.getElementById("qrcodeContainer");
        qrcodeContainer.innerHTML = "";

        // Generate new QR code
        var qrCode = new QRCode(qrcodeContainer, {
            text: qrCodeData,
            width: 128,
            height: 128
        });

        // Get the QR code as an image for saving and displaying
        var qrImage = document.getElementById("qrImage");
        var qrCanvas = qrcodeContainer.querySelector("canvas");
        var qrDataURL = qrCanvas.toDataURL("image/png");
        qrImage.src = qrDataURL;
        qrImage.style.display = "block";

        // Set the download link
        var downloadLink = document.getElementById("downloadLink");
        downloadLink.href = qrDataURL;

        // Scroll to QR code
        qrcodeContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        // Allow user to edit their information
        alert("Please correct your information and try again.");
    }
}

function maximizeQRCode() {
    var qrImage = document.getElementById("qrImage");
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popupImage");

    popupImage.src = qrImage.src;
    popup.style.display = "flex";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
