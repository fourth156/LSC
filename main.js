let dateCB = document.getElementById('cb2');
let timeCB = document.getElementById('cb3');
let locationsCB = document.getElementById('cb4');
let objectsCB = document.getElementById('cb5');
let actionsCB = document.getElementById('cb6');
let biometricsCB = document.getElementById('cb7');



document.addEventListener('DOMContentLoaded', () => {
    dateCB.addEventListener('change', () => {
        let dateTB = document.querySelectorAll('#date input[type="text"]');
        for (let textbox of dateTB) {
            textbox.disabled = !textbox.disabled;
        }
    });

    timeCB.addEventListener('change', () => {
        let timeCheckBoxes = document.querySelectorAll('#time input[type="checkbox"]');
        for (let i = 1; i < timeCheckBoxes.length; i++) {
            timeCheckBoxes[i].disabled = !timeCheckBoxes[i].disabled;
        }
    });

    locationsCB.addEventListener('change', () => {
        let locationsTB = document.querySelectorAll('#locations input[type="text"]');
        for (let textbox of locationsTB) {
            textbox.disabled = !textbox.disabled;
        }
    });

    objectsCB.addEventListener('change', () => {
        let objectsTB = document.querySelectorAll('#objects input[type="text"]');
        for (let textbox of objectsTB) {
            textbox.disabled = !textbox.disabled;
        }
    });

    actionsCB.addEventListener('change', () => {
        let actionsTB = document.querySelectorAll('#actions input[type="text"]');
        for (let textbox of actionsTB) {
            textbox.disabled = !textbox.disabled;
        }
    });

    biometricsCB.addEventListener('change', () => {
        let biometricsTB = document.querySelectorAll('#biometrics input[type="text"]');
        for (let textbox of biometricsTB) {
            textbox.disabled = !textbox.disabled;
        }
    });
});