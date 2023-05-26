<template>
  <div class="bg-white shadow-md p-6 rounded-md">
    <h2 class="text-lg font-bold mb-2">Formulario de carga de recibo</h2>
    <form @submit.prevent="submitForm">
      <div class="grid grid-cols-1 gap-4">
        <div>
          <label for="numeroRecibo" class="text-sm font-medium text-gray-700"
            >Socio Dni:</label
          >
          <input
            type="text"
            id="numeroRecibo"
            v-model="socioId"
            class="form-input mt-1 block w-full text-gray-300"
            disabled
          />
        </div>
        <div>
          <label for="numeroRecibo" class="text-sm font-medium text-gray-700"
            >Número de recibo:</label
          >
          <input
            type="text"
            id="numeroRecibo"
            v-model="numeroRecibo"
            class="form-input mt-1 block w-full"
            required
          />
        </div>
        <div>
          <label for="fecha" class="text-sm font-medium text-gray-700"
            >Fecha:</label
          >
          <input
            type="date"
            id="fecha"
            v-model="fecha"
            class="form-input mt-1 block w-full"
            required
          />
        </div>
        <div>
          <label for="monto" class="text-sm font-medium text-gray-700"
            >Monto:</label
          >
          <input
            type="number"
            id="monto"
            v-model="monto"
            class="form-input mt-1 block w-full"
            required
          />
        </div>
        <!-- Agrega más campos para la información del recibo si es necesario -->
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
        Cargar recibo
      </button>
    </form>
  </div>

  <div
    v-if="showModal"
    class="
      fixed
      inset-0
      flex
      items-center
      justify-center
      bg-black bg-opacity-50
    "
  >
    <div class="bg-white p-6 rounded-lg">
      <!-- Contenido del modal -->
      <h2 class="text-lg font-bold mb-4">Recibo guardado exitosamente</h2>
      <p>¿Qué acción deseas realizar?</p>
      <div class="mt-4 flex justify-between">
        <button
          @click="irAListaSocios"
          class="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Ir a lista de socios
        </button>
        <button
          @click="irAListaRecibos"
          class="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Ir a lista de recibos
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import reciboService from '../../services/reciboService';

export default {
  setup() {
    const numeroRecibo = ref('');
    const fecha = ref('');
    const monto = ref(0);
    const showModal = ref(false);

    const route = useRoute();
    const socioId = computed(() => route.params.dni);
    const submitForm = async () => {
      const reciboData = {
        numeroRecibo: numeroRecibo.value,
        fecha: fecha.value,
        monto: monto.value,
        socioId: socioId.value,
      };

      try {
        await reciboService.registrarRecibo(reciboData);
        // Recibo guardado exitosamente
        showModal.value = true; // Mostrar el modal después de un registro exitoso
      } catch (error) {
        // Manejo de error al guardar el recibo
      }
    };

    return {
      numeroRecibo,
      fecha,
      monto,
      submitForm,
      socioId,
      showModal,
    };
  },
};
</script>
