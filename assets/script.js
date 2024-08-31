const nav = document.querySelector('.navigation-menu');

function openMenu(){
    nav.style.right = "0";
}
function closeMenu(){
    nav.style.right = "-200px";
}

const surah = document.getElementById('surah');
const juz = document.getElementById('juz');

function showSurahs(){
    if(!surah.classList.contains('active-navigator')){
        surah.classList.add('active-navigator');
        juz.classList.remove('active-navigator');
    }
}

function showJuzs(){
    if(!juz.classList.contains('active-navigator')){
        juz.classList.add('active-navigator');
        surah.classList.remove('active-navigator');
    }
}