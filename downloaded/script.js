let count = 0;
let seconds = 5;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let interval = setInterval(function(){
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`;
        percentText.textContent = `${count}%`;
    }
    else{
        document.querySelector("h2").textContent = "Downloaded.";
        clearInterval(interval);
    }
},
 (seconds * 1000) / 100
);


const themeToggle = document.getElementById('themeToggle');
const THEME_KEY = 'downloadedTheme';

function setTheme(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = 'Light Mode';
    } else {
        document.body.classList.remove('dark');
        themeToggle.textContent = 'Dark Mode';
    }
    localStorage.setItem(THEME_KEY, mode);
}


const savedTheme = localStorage.getItem(THEME_KEY);
setTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeToggle.addEventListener('click', function() {
    const isDark = document.body.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
});