// Registro del service worker (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('Service worker registrado'))
      .catch(err => console.error('Error al registrar el SW:', err));
  });
}

// Estado de conexión
const status = document.getElementById('status');
function actualizarEstado() {
  const online = navigator.onLine;
  status.textContent = online ? 'En línea' : 'Sin conexión (modo offline)';
  status.className = 'badge ' + (online ? 'online' : 'offline');
}
window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);
actualizarEstado();

// Clasificador de servicios
const servicios = {
  drive: 'SaaS: software listo para usar; solo gestionas tus archivos.',
  github: 'SaaS: plataforma lista para alojar repositorios y colaborar.',
  ec2: 'IaaS: máquina virtual; tú gestionas el SO, el runtime y la app.',
  heroku: 'PaaS: subes tu código y la plataforma lo ejecuta y escala.',
  m365: 'SaaS: Word, Excel, Outlook y Teams listos desde la nube.',
  firebase: 'PaaS (BaaS): backend gestionado con base de datos, auth y hosting.',
  vercel: 'PaaS: despliega apps web desde GitHub sin administrar servidores.'
};
document.getElementById('servicio').addEventListener('change', e => {
  document.getElementById('resultado').textContent = servicios[e.target.value] || '';
});

// Contador de visitas local
try {
  const n = Number(localStorage.getItem('visitas') || 0) + 1;
  localStorage.setItem('visitas', n);
  document.getElementById('visitas').textContent = n;
} catch (e) { /* almacenamiento no disponible */ }
