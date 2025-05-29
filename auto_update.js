// update-data.js - Actualización horario Chile
const ZONA_HORARIA = 'America/Santiago';
const UPDATE_HOURS = [8, 12, 16, 20];

function getChileTime() {
    return new Date(new Date().toLocaleString("en-US", {timeZone: ZONA_HORARIA}));
}

function autoUpdate() {
    const now = getChileTime();
    if (UPDATE_HOURS.includes(now.getHours())) {
        console.log(`Actualizando a las ${now.toLocaleTimeString('es-CL')}...`);
        // Aquí iría la lógica real de actualización
        // Para este ejemplo, solo simulamos
        console.log("Simulación: Se actualizarían los datos reales");
    }
}

setInterval(autoUpdate, 60 * 60 * 1000);
autoUpdate();