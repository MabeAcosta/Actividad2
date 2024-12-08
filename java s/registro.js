
const registrarUsuario = () => {
    const id = document.getElementById('id').value;
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const ciudad = document.getElementById('ciudad').value;

    const tabla = `
        <table border="1">
            <tr>
                <th>ID</th><th>Cédula</th><th>Nombre</th><th>Fecha de Nacimiento</th><th>Ciudad</th>
            </tr>
            <tr>
                <td>${id}</td><td>${cedula}</td><td>${nombre}</td><td>${fecha}</td><td>${ciudad}</td>
            </tr>
        </table>
    `;
    document.getElementById('resultado-registro').innerHTML = tabla;
};