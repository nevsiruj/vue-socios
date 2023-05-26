<template>
  <div class="container mx-auto px-4 py-8">
  <h1 class="text-2xl font-bold mb-4">Lista de Socios</h1>

  <!-- Formulario para registrar nuevo socio -->
  <div class="bg-white shadow-md p-6 rounded-md">
    <h2 class="text-lg font-bold mb-2">Registrar nuevo socio:</h2>
    <form @submit.prevent="registrarSocio">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre" class="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" required>
        </div>
        <div>
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="apellido" class="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" required>
        </div>
        <!-- Agrega más campos para los datos del socio (dirección, correo electrónico, etc.) -->
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Guardar</button>
    </form>
  </div>

  <!-- Búsqueda de socio por DNI -->
  <div class="mt-8">
    <h2 class="text-lg font-bold mb-2">Buscar socio por DNI:</h2>
    <form @submit.prevent="buscarSocio">
      <div class="flex items-center">
        <input type="text" v-model="dni" class="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:border-blue-500" placeholder="Buscar por DNI">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Buscar</button>
      </div>
    </form>


      <!-- Lista de socios -->
<div v-if="sociosFiltrados.length > 0" class="mt-4">
  <h2 class="text-lg font-bold mb-2">Resultados:</h2>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DNI</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="socio in sociosFiltrados" :key="socio.dni">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm font-medium text-gray-900">{{ socio.nombre }}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-500">{{ socio.apellido }}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-500">{{ socio.dni }}</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div v-else class="mt-4">
  <p>No se encontraron socios.</p>
</div>



    </div>
  </div>
</template>

<script>
export default {
  name: 'ListSocio',
  data() {
    return {
      nombre: '',
      apellido: '',
      dni: '',
      socios: [
        { dni: '12345678', nombre: 'Juan', apellido: 'Pérez' },
        { dni: '87654321', nombre: 'María', apellido: 'López' },
        { dni: '56789012', nombre: 'Pedro', apellido: 'Gómez' },
        // Agrega más socios si es necesario
      ]
    };
  },
  computed: {
    sociosFiltrados() {
      if (this.dni === '') {
        return this.socios;
      } else {
        return this.socios.filter(socio => socio.dni.includes(this.dni));
      }
    }
  },
  methods: {
    registrarSocio() {
      // Lógica para guardar la información del nuevo socio en la base de datos
      // Puedes hacer una llamada a la API o realizar las operaciones necesarias aquí
      this.socios.push({
        dni: this.dni,
        nombre: this.nombre,
        apellido: this.apellido
      });

      // Limpia los campos del formulario después de guardar
      this.nombre = '';
      this.apellido = '';
      this.dni = '';
    },
    buscarSocio() {
      // Lógica para buscar al socio por DNI
      // Puedes hacer una llamada a la API o realizar las operaciones necesarias aquí
      console.log('Búsqueda de socio por DNI:', this.dni);
    }
  }
};
</script>

<style>
/* Agrega estilos adicionales según sea necesario */
</style>
