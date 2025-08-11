submitBtn.onclick = function (event) {
    event.preventDefault();
    validateForm();
};

function validateForm() {
    const dob = document.getElementById('dob').value.trim();
    const address = document.getElementById('address').value.trim();
    const phno = document.getElementById('phno').value.trim();
    const email = document.getElementById('email').value.trim();
    const photo = document.getElementById('photo').value.trim();
    const signature = document.getElementById('signature').value.trim();

    const dobError = document.getElementById('doberror');
    const addressError = document.getElementById('addresserror');
    const phoneError = document.getElementById('phoneerror');
    const emailError = document.getElementById('emailerror');
    const photoError = document.getElementById('photoerror');
    const signatureError = document.getElementById('signatureerror');

    dobError.textContent = dob === "" ? "Please enter DOB" : "";
    addressError.textContent = address === "" ? "Please enter address" : "";
    phoneError.textContent = phno === "" ? "Please enter phone" : "";
    emailError.textContent = email === "" ? "Please enter email" : "";
    photoError.textContent = photo === "" ? "Please upload a photo" : "";
    signatureError.textContent = signature === "" ? "Please upload a signature" : "";

    if (dob && address && phno && email && photo && signature) {
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const fatherName = document.getElementById('fathername').value;
        const motherName = document.getElementById('mothername').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
        const tenth = document.getElementById('tenth').value;
        const twelve = document.getElementById('twelve').value;

        const win = window.open('', '_blank');
        win.document.write(`<h1>Submitted Details</h1>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Father's Name:</strong> ${fatherName}</p>
            <p><strong>Mother's Name:</strong> ${motherName}</p>
            <p><strong>DOB:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>10th Details:</strong> ${tenth}</p>
            <p><strong>12th Details:</strong> ${twelve}</p>
            <p><strong>Phone:</strong> ${phno}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Photo:</strong> ${photo.split('\\').pop()}</p>
            <p><strong>Signature:</strong> ${signature.split('\\').pop()}</p>
        `);
    }
}

function resetForm() {
    document.getElementById('myForm').reset();

    // Clear all error messages
    const errorFields = ['doberror', 'addresserror', 'phoneerror', 'emailerror', 'photoerror', 'signatureerror'];
    errorFields.forEach(id => {
        document.getElementById(id).textContent = '';
    });
}