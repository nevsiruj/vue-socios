<template>
  <nav
    class="
      fixed
      top-0
      z-50
      w-full
      bg-white
      border-b border-gray-200
      dark:bg-gray-800 dark:border-gray-700
    "
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="
              inline-flex
              items-center
              p-2
              text-sm text-gray-500
              rounded-lg
              sm:hidden
              hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-200
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
            "
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <a href="/" class="flex ml-2 md:mr-24">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="FlowBite Logo"
            />
            <span
              class="
                self-center
                text-xl
                font-semibold
                sm:text-2xl
                whitespace-nowrap
                dark:text-white
              "
              >Cooperadora</span
            >
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div>
              <button
                type="button"
                class="
                  flex
                  text-sm
                  bg-gray-800
                  rounded-full
                  focus:ring-4 focus:ring-gray-300
                  dark:focus:ring-gray-600
                "
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
            </div>
            <div
              class="
                z-50
                hidden
                my-4
                text-base
                list-none
                bg-white
                divide-y divide-gray-100
                rounded
                shadow
                dark:bg-gray-700 dark:divide-gray-600
              "
              id="dropdown-user"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p
                  class="
                    text-sm
                    font-medium
                    text-gray-900
                    truncate
                    dark:text-gray-300
                  "
                  role="none"
                >
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a
                    href="#"
                    class="
                      block
                      px-4
                      py-2
                      text-sm text-gray-700
                      hover:bg-gray-100
                      dark:text-gray-300
                      dark:hover:bg-gray-600
                      dark:hover:text-white
                    "
                    role="menuitem"
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
                      text-sm text-gray-700
                      hover:bg-gray-100
                      dark:text-gray-300
                      dark:hover:bg-gray-600
                      dark:hover:text-white
                    "
                    role="menuitem"
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
                      text-sm text-gray-700
                      hover:bg-gray-100
                      dark:text-gray-300
                      dark:hover:bg-gray-600
                      dark:hover:text-white
                    "
                    role="menuitem"
                    >Earnings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      block
                      px-4
                      py-2
                      text-sm text-gray-700
                      hover:bg-gray-100
                      dark:text-gray-300
                      dark:hover:bg-gray-600
                      dark:hover:text-white
                    "
                    role="menuitem"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside
    id="logo-sidebar"
    class="
      fixed
      top-0
      left-0
      z-40
      w-64
      h-screen
      pt-20
      transition-transform
      -translate-x-full
      bg-white
      border-r border-gray-200
      sm:translate-x-0
      dark:bg-gray-800 dark:border-gray-700
    "
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <a
            href="#"
            class="
              flex
              items-center
              p-2
              text-gray-900
              rounded-lg
              dark:text-white
              hover:bg-gray-100
              dark:hover:bg-gray-700
            "
          >
            <svg
              aria-hidden="true"
              class="
                w-6
                h-6
                text-gray-500
                transition
                duration-75
                dark:text-gray-400
                group-hover:text-gray-900
                dark:group-hover:text-white
              "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">Dashboard</span>
          </a>
        </li>
        <li>
          <router-link to="/">
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-gray-900
                rounded-lg
                dark:text-white
                hover:bg-gray-100
                dark:hover:bg-gray-700
              "
            >
              <svg
                aria-hidden="true"
                class="
                  flex-shrink-0
                  w-6
                  h-6
                  text-gray-500
                  transition
                  duration-75
                  dark:text-gray-400
                  group-hover:text-gray-900
                  dark:group-hover:text-white
                "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Home</span>
            </a>
          </router-link>
        </li>

        <li>
          <router-link to="/list-socio">
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-gray-900
                rounded-lg
                dark:text-white
                hover:bg-gray-100
                dark:hover:bg-gray-700
              "
            >
              <svg
                aria-hidden="true"
                class="
                  flex-shrink-0
                  w-6
                  h-6
                  text-gray-500
                  transition
                  duration-75
                  dark:text-gray-400
                  group-hover:text-gray-900
                  dark:group-hover:text-white
                "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <span class="flex-1 ml-3 whitespace-nowrap">Socios</span>
            </a>
          </router-link>
        </li>

        <li>
          <router-link to="/list-recibo">
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-gray-900
                rounded-lg
                dark:text-white
                hover:bg-gray-100
                dark:hover:bg-gray-700
              "
            >
              <!-- Ícono para el recibo -->

              <i class="fas fa-receipt text-gray-500"></i>

              <span class="flex-1 ml-3 whitespace-nowrap">Recibos</span>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>

  <div class="p-4 sm:ml-64"><router-view></router-view></div>
</template>

<script>
import { ref } from 'vue';

const isOpen = ref(false);

// import { initFlowbite } from 'flowbite';

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

// initialize components based on data attribute selectors

export default {
  name: 'HelloWorld',
  setup() {
    onMounted(() => {
      initFlowbite();
    });
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  mounted() {
    // initFlowbite();
  },
  methods: {
    handleClickOutside(event) {
      if (!event.target.closest('.bg-gray-800')) {
        this.showSidebar = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
