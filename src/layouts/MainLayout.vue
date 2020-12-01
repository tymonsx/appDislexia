<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title
          clickable
          v-ripple
          @click="$router.replace('/')"
          active-class="my-menu-link"
        >
          <div style="width:110px; float:left; ">
            <img
              style="display:block; margin-right:auto;  "
              width="100px"
              src="logo_dislexia.jfif"
            />
          </div>
          <div
            style="width:50%; margin-left:50%; margin-right:50%; word-break: break-all; padding-top: 12px"
          >
            <!--<span style="font-size:15px; "
              >App Balnealidade das Praias do Estado de São Paulo</span
            >-->
            <span style="font-size:15px; ">App Dislexia</span>
            <br />
          </div>
        </q-toolbar-title>

        <q-btn icon="info" to="/sobre" flat />
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div style="min-width:40px;width:10%; float:left; ">
            <img
              style="margin-top: 5px; "
              width="40px"
              src="~assets/logo_epm.png"
            />
          </div>
          <div
            class="desktop-only text-caption text-center float-left"
            style="width:80%"
          >
            Rua Botucatu, 862-Térreo, Vila Clementino, São Paulo (SP). Cep:
            04023-062 - Email: contato@dis.epm.br - CNPJ:60.453.032/0001-74
          </div>
          <div
            class="text-right"
            style="min-width:75px; width:10%;float:right;"
          >
            <img
              style="margin-top: 5px; "
              width="75px"
              src="~assets/logo_unifesp.png"
            />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view :teste="3" />
    </q-page-container>
  </q-layout>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default {
  name: "MainLayout"
};
</script>
