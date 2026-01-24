/* ---------- HELPERS ---------- */
const $ = id => document.getElementById(id);

function getRandom(arr) {
  // Check if the array is empty to prevent errors
  if (arr.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

/* ---------- POPUPS ---------- */
let popupOpen1=false,popupOpen2=false

function openPopup1(html){ $("popupContent1").innerHTML=html; $("popupOverlay1").classList.remove("hidden"); $("popupOverlay1").classList.add("is-visible"); }
function closePopup1(){ $("popupOverlay1").classList.remove("is-visible"); $("popupOverlay1").classList.add("hidden"); }

function openPopup2(html){ $("popupContent2").innerHTML=html; $("popupOverlay2").classList.remove("hidden"); $("popupOverlay2").classList.add("is-visible"); }
function closePopup2(){ $("popupOverlay2").classList.remove("is-visible"); $("popupOverlay2").classList.add("hidden"); }

const backdrop = document.getElementById("ad-backdrop");

function openAd() {
    backdrop.classList.add("is-visible");
    backdrop.hidden = false;
}

window.addEventListener("message", (e) => {
    if (e.data?.type === "close-ad") {
        setTimeout(() => ad.remove(), 300);
        backdrop.classList.remove("is-visible");
        backdrop.hidden = true;
    }
});

const popups = [
    `
    `,
    `
    `
];

function nextPopup() {
    popupIndex++;
    if (popupIndex < popups.length) {
        openPopup2(popups[popupIndex]);
    } else {
        closePopup2();
    }
}

openPopup2(popups[0]);