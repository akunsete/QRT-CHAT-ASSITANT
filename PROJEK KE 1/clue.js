document.addEventListener("DOMContentLoaded", function() {
    let copyButtons = document.querySelectorAll(".copyButton");

    copyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let textToCopy = this.parentNode.firstChild.textContent.trim();
            copyTextToClipboard(textToCopy);
        });
    });
});

function copyTextToClipboard(text) {
    let tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
