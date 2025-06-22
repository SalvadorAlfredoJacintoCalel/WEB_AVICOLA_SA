function mostrarSeccion(id) {
  // Aquí luego ocultaremos y mostraremos los paneles.
  console.log("Mostrar sección:", id);
}

function mostrarSeccion(id) {
  const secciones = [
    'panel-bienvenida',
    'panel-mision',
    'panel-vision',
    'panel-contactenos',
    'panel-conocenos'
    // más paneles después...
  ];

  secciones.forEach(seccion => {
    const el = document.getElementById(seccion);
    if (el) el.style.display = 'none';
  });

const activo = document.getElementById(id.startsWith("panel-") ? id : `panel-${id}`);
  if (activo) activo.style.display = 'block';
}
