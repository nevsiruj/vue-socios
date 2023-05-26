// socioService.js
const socioService = {
  socios: [
    { dni: '12345678', nombre: 'Juan', apellido: 'Pérez' },
    { dni: '87654321', nombre: 'María', apellido: 'López' },
    { dni: '56789012', nombre: 'Pedro', apellido: 'Gómez' },
    // Agrega más socios si es necesario
  ],

  getSocios() {
    return this.socios;
  },

  registrarSocio(socio) {
    this.socios.push(socio);

    console.log(this.socios);
  },
};

export default socioService;
