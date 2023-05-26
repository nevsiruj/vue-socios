// reciboService.js
const reciboService = {
  recibos: [
    {
      numeroRecibo: 'R001',
      fecha: '2023-05-15',
      monto: 100.0,
      socioDni: '12345678',
    },
    {
      numeroRecibo: 'R002',
      fecha: '2023-05-16',
      monto: 150.0,
      socioDni: '12345678',
    },
    {
      numeroRecibo: 'R003',
      fecha: '2023-05-18',
      monto: 150.0,
      socioDni: '87654321',
    },
    {
      numeroRecibo: 'R004',
      fecha: '2023-05-20',
      monto: 200.0,
      socioDni: '56789012',
    },
    // Agrega más socios si es necesario
  ],

  getRecibos() {
    return this.recibos;
  },

  getRecibosBySocioDni(socioDni) {
    return this.recibos.filter((recibo) => recibo.socioDni === socioDni);
  },

  registrarRecibo(recibo) {
    this.recibos.push(recibo);

    console.log(this.recibos);
  },
};

export default reciboService;
