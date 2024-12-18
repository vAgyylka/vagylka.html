document.getElementById('theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
// Determine score color
let scoreColor;
if (averageScore >= 7) {
    scoreColor = "green";
} else if (averageScore >= 4) {
    scoreColor = "orange";
} else {
    scoreColor = "red";
}


