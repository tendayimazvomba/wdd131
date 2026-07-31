const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 8;
const windSpeed = 10;

document.getElementById("temperature").textContent = temperature;
document.getElementById("windspeed").textContent = windSpeed;

function calculateWindChill(temp, speed) {
    return (
        13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windchill").textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    document.getElementById("windchill").textContent = "N/A";
}
