// Update time every second
setInterval(() => {
    document.querySelector(".time").innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}, 1000);

//content for the clipbord
const email = "gvenkatesh.on.dev@gmail.com";
const changeContentHTML = `
  <div class="flex items-center justify-center gap-2">
    <span id="email-text">${email}</span>
    <i class="bi bi-copy hover:text-[#07bdeb6b]" id="copy-icon"></i>
  </div>
`;

document.getElementById("toggle-contact").addEventListener("click", () => {
    document.getElementById("contact-me").innerHTML = changeContentHTML;

    // Attach event listener to the new copy icon
    document.getElementById("copy-icon").addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents the parent button click
        navigator.clipboard.writeText(email);
        document.getElementById("email-text").innerHTML = "Copied!";
        setTimeout(() => {
            document.getElementById("email-text").innerHTML = email;
        }, 1000);
    });
});
