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
let popupOpen2=false

function openPopup2(html){ $("popupContent2").innerHTML=html; $("popupOverlay2").classList.remove("hidden"); $("popupOverlay2").classList.add("is-visible"); }
function closePopup2(){ $("popupOverlay2").classList.remove("is-visible"); $("popupOverlay2").classList.add("hidden"); }

const backdrop = $("ad-backdrop");

function openAd() {
    backdrop.classList.add("is-visible");
    backdrop.hidden = false;
}

window.addEventListener("message", (e) => {
    if (e.data?.type === "close-ad") {
        backdrop.classList.remove("is-visible");
        backdrop.hidden = true;
    }
});

let popupIndex = 0;

const popups = [
    `
    <img src="img/EPI-USE.png" alt="EPI-USE Logo">
    <h2>The sponsor of this website!</h2><br>
    <p>EPI-USE is a global company, and a member of Group Elephant, that specializes in implementing, managing, and optimizing SAP® and SAP SuccessFactors® systems, with a particular, historically strong focus on HR and Payroll. The logo is very creative.Thank you EPI-USE for sponsoring!</p><br>
    <button onclick="nextPopup()">Continue</button>
    `,
    `
    <div style="width: 500px; height: 500px;">
        <canvas id="pieChart"></canvas>
    </div>
    `
];

function nextPopup() {
    popupIndex++;
    if (popupIndex < popups.length) {
        openPopup2(popups[popupIndex]);
        if (popupIndex === 1) {
            renderPieChart();
        }
    } else {
        closePopup2();
    }
}

openPopup2(popups[0]); 

/* Pie Chart via Chart.js */

const data = {
    labels: [
        'Visitors',
        'S',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [55, 50, 100], // These values determine the size of the slices
        backgroundColor: [
            '#036bfc',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

// Configuration options
const config = {
    type: 'pie', // Specify the chart type as 'pie'
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sample Pie Chart'
            }
        }
    },
};

// Render the chart
function renderPieChart() {
    const ctx = $('pieChart').getContext('2d');
    // It's safer to define your 'config' outside or inside this function
    new Chart(ctx, config);
}