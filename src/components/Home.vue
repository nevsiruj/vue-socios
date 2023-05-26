<template>
  <div class="mt-8">
    <router-link
      to="/list-socio"
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
      Ir a socios
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    goToSocios() {
      // Aquí puedes añadir la lógica para redirigir a la página de socios
      // Por ejemplo, utilizando Vue Router: this.$router.push('/socios')
    },
  },
};
</script>

<style>
/* Estilos adicionales si los necesitas */
</style>
