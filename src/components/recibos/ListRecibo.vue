<template>
  <div>
    <h2 class="text-lg font-bold mb-2">Lista de Recibos</h2>
    <div class="mb-4">
      <label for="buscarDni" class="block text-sm font-medium text-gray-700"
        >Buscar por DNI del socio:</label
      >
      <input
        type="text"
        id="buscarDni"
        v-model="filtroDni"
        class="
          border border-gray-300
          p-2
          rounded-md
          focus:outline-none focus:border-blue-500
        "
      />
    </div>
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Número de Recibo</th>
          <th class="py-2 px-4 border-b">Fecha</th>
          <th class="py-2 px-4 border-b">Monto</th>
          <th class="py-2 px-4 border-b">DNI del Socio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recibo in filteredRecibos" :key="recibo.id">
          <td class="py-2 px-4 border-b">{{ recibo.numeroRecibo }}</td>
          <td class="py-2 px-4 border-b">{{ recibo.fecha }}</td>
          <td class="py-2 px-4 border-b">{{ recibo.monto }}</td>
          <td class="py-2 px-4 border-b">{{ recibo.socioDni }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import reciboService from '../../services/reciboService';

export default {
  data() {
    return {
      recibos: [], // Lista de recibos cargados
      filtroDni: '', // Valor del input de búsqueda por DNI del socio
    };
  },
  computed: {
    filteredRecibos() {
      // Filtrar los recibos basado en el valor del input de búsqueda

      var data = reciboService.getRecibos();
      console.log(data);
      return data.filter((recibo) =>
        recibo.socioDni.includes(this.filtroDni.toLowerCase())
      );
    },
  },
  created() {
    // Lógica para obtener la lista de recibos desde el servicio correspondiente
    this.recibos = reciboService.getRecibos();
  },
};
</script>
