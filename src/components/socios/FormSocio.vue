<template>
  <!-- Formulario para registrar nuevo socio -->
  <div class="bg-white shadow-md p-6 rounded-md">
    <h2 class="text-lg font-bold mb-2">Registrar nuevo socio:</h2>
    <form @submit.prevent="registrarSocio">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            v-model="nombre"
            class="
              border border-gray-300
              p-2
              rounded-md
              focus:outline-none focus:border-blue-500
            "
            required
          />
        </div>
        <div>
          <label for="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            v-model="apellido"
            class="
              border border-gray-300
              p-2
              rounded-md
              focus:outline-none focus:border-blue-500
            "
            required
          />
        </div>
        <div>
          <label for="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            v-model="dni"
            class="
              border border-gray-300
              p-2
              rounded-md
              focus:outline-none focus:border-blue-500
            "
            required
          />
        </div>
        <!-- Agrega más campos para los datos del socio (dirección, correo electrónico, etc.) -->
      </div>

      <button
        type="submit"
        class="
          bg-blue-500
          text-white
          px-4
          py-2
          rounded-md
          mt-4
          hover:bg-blue-600
          focus:outline-none focus:bg-blue-600
        "
      >
        Guardar
      </button>
    </form>
  </div>
</template>

<script>
import socioService from '../../services/socioService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'FormSocio',
  setup() {
    const nombre = ref('');
    const apellido = ref('');
    const dni = ref('');
    const router = useRouter();

    const registrarSocio = () => {
      const nuevoSocio = {
        nombre: nombre.value,
        apellido: apellido.value,
        dni: dni.value,
        // Agrega más propiedades según los campos adicionales del socio
      };

      socioService.registrarSocio(nuevoSocio);

      // Limpia los campos del formulario después de registrar el socio
      nombre.value = '';
      apellido.value = '';
      dni.value = '';

      // Navegar hacia la ruta "/list-socio"
      router.push('/list-socio');
    };

    return {
      nombre,
      apellido,
      dni,
      registrarSocio,
    };
  },
};
</script>
