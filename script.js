document.getElementById("jobForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // You can add validation or fake processing here
    alert("Application submitted successfully!");

    // Redirect to thank you page
    window.location.href = "thankyou.html";
});
