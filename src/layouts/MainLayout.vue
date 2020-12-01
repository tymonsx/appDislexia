<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <img
          src="logo_dislexia.jfif"
          alt="Logo Dislexia"
          id="logoDislexia"
          clickable
          v-ripple
          @click="$router.replace('/')"
        />
        <q-toolbar-title
          id="tituloGeral"
          clickable
          v-ripple
          @click="$router.replace('/')"
        >
          App Dislexia
        </q-toolbar-title>
        <q-btn id="botaoSobre" icon="info" to="/sobre" flat />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>
          <div>
            <img
              id="logoEpm"
              src="epm.png"
              style="margin-top: 5px; "
              width="40px"
            />
          </div>

          <div
            class="desktop-only text-caption text-center float-left"
            style="width:80%"
          >
            Rua Botucatu, 862-Térreo, Vila Clementino, São Paulo (SP). Cep:
            04023-062 - Email: contato@dis.epm.br - CNPJ:60.453.032/0001-74
          </div>
          <img
            id="logoUnifesp"
            class="text-right"
            src="logo_unifesp.png"
            style="margin-top: 5px; "
            width="75px"
          />
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
