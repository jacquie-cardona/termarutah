const scriptURL = "https://script.google.com/macros/s/AKfycbylrCPf08s7X_eWDhuJRUWkvnl3-FIY3df_zoO-fFpwM_7Tdm_H2hHkxfc9hP8D0GCN/exec";

document
.getElementById("deliveryForm")
.addEventListener("submit", async (e) => {

e.preventDefault();

const form = e.target;

const formData = new FormData(form);

const data = Object.fromEntries(formData.entries());

try {

await fetch(scriptURL, {
method: "POST",
body: JSON.stringify(data)
});

alert("Delivery request submitted!");

form.reset();

} catch (error) {

alert("Error submitting form.");

}

});