<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">Lista de Socios</h1>

    <!-- Botón para agregar un nuevo socio -->
    <div class="mt-8">
      <router-link
        to="/form-socio"
        class="
          bg-blue-500
          text-white
          px-4
          py-2
          rounded-md
          hover:bg-blue-600
          focus:outline-none focus:bg-blue-600
        "
      >
        Agregar nuevo socio
      </router-link>
    </div>
    <!-- Búsqueda de socio por DNI -->
    <div class="mt-8">
      <h2 class="text-lg font-bold mb-2">Buscar socio por DNI:</h2>
      <form @submit.prevent="buscarSocio">
        <div class="flex items-center">
          <input
            type="text"
            v-model="dni"
            class="
              border border-gray-300
              p-2
              rounded-l-md
              focus:outline-none focus:border-blue-500
            "
            placeholder="Buscar por DNI"
          />
          <button
            type="submit"
            class="
              bg-blue-500
              text-white
              px-4
              py-2
              rounded-r-md
              hover:bg-blue-600
              focus:outline-none focus:bg-blue-600
            "
          >
            Buscar
          </button>
        </div>
      </form>

      <!-- Lista de socios -->
      <div v-if="sociosFiltrados.length > 0" class="mt-4">
        <table class="w-full bg-white border border-gray-300">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Nombre
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Apellido
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                DNI
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                ACCIONES
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="socio in sociosFiltrados" :key="socio.dni">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">
                  {{ socio.nombre }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ socio.apellido }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ socio.dni }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button
                  id="dropdownMenuIconButton"
                  data-dropdown-toggle="dropdownDots"
                  class="
                    inline-flex
                    items-center
                    p-2
                    text-sm
                    font-medium
                    text-center text-gray-900
                    bg-white
                    rounded-lg
                    hover:bg-gray-100
                    focus:ring-4 focus:outline-none
                    dark:text-white
                    focus:ring-gray-50
                    dark:bg-gray-800
                    dark:hover:bg-gray-700
                    dark:focus:ring-gray-600
                  "
                  type="button"
                >
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                    ></path>
                  </svg>
                </button>

                <!-- Dropdown menu -->
                <div
                  id="dropdownDots"
                  class="
                    z-10
                    hidden
                    bg-white
                    divide-y divide-gray-100
                    rounded-lg
                    shadow
                    w-44
                    dark:bg-gray-700 dark:divide-gray-600
                  "
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          px-4
                          py-2
                          hover:bg-gray-100
                          dark:hover:bg-gray-600 dark:hover:text-white
                        "
                        >Dashboard</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          px-4
                          py-2
                          hover:bg-gray-100
                          dark:hover:bg-gray-600 dark:hover:text-white
                        "
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          px-4
                          py-2
                          hover:bg-gray-100
                          dark:hover:bg-gray-600 dark:hover:text-white
                        "
                        >Earnings</a
                      >
                    </li>
                  </ul>
                  <div class="py-2">
                    <a
                      href="#"
                      class="
                        block
                        px-4
                        py-2
                        text-sm text-gray-700
                        hover:bg-gray-100
                        dark:hover:bg-gray-600
                        dark:text-gray-200
                        dark:hover:text-white
                      "
                      >Separated link</a
                    >
                  </div>
                </div>
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
import socioService from '../../services/socioService';

export default {
  name: 'ListSocio',
  data() {
    return {
      dni: '',
    };
  },
  computed: {
    sociosFiltrados() {
      if (this.dni === '') {
        console.log(socioService.socios);
        return socioService.socios;
      } else {
        return socioService.socios.filter((socio) =>
          socio.dni.includes(this.dni)
        );
      }
    },
  },
  methods: {
    buscarSocio() {
      // Lógica para buscar al socio por DNI
      // Puedes hacer una llamada a la API o realizar las operaciones necesarias aquí
      console.log('Búsqueda de socio por DNI:', this.dni);
    },
  },
};
</script>

<style>
/* Agrega estilos adicionales según sea necesario */
</style>
