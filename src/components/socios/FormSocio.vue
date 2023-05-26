<template>
  <div class="bg-white shadow-md p-6 rounded-md">
    <h2 class="text-lg font-bold mb-2">Registrar nuevo socio:</h2>
    <form @submit.prevent="registrarSocio">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="nombre" class="text-sm font-medium text-gray-700"
            >Nombre:</label
          >
          <input
            type="text"
            id="nombre"
            v-model="nombre"
            class="form-input"
            required
          />
        </div>
        <br />
        <div>
          <label for="apellido" class="text-sm font-medium text-gray-700"
            >Apellido:</label
          >
          <input
            type="text"
            id="apellido"
            v-model="apellido"
            class="form-input"
            required
          />
        </div>
        <br />
        <div>
          <label for="dni" class="text-sm font-medium text-gray-700"
            >DNI:</label
          >
          <input
            type="text"
            id="dni"
            v-model="dni"
            class="form-input"
            required
          />
        </div>
        <!-- Agrega más campos para los datos del socio (dirección, correo electrónico, etc.) -->
      </div>
      <button
        type="submit"
        class="
          bg-blue-500
          hover:bg-blue-600
          text-white
          px-4
          py-2
          rounded-md
          mt-4
        "
      >
        Registrar
      </button>
    </form>
  </div>
</template>

<style>
.form-input {
  border: 1px solid #d1d5db;
  padding: 0.5rem;
  border-radius: 0.375rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #3b82f6;
}
</style>

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
