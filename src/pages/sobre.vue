<template>
  <q-page class="flex flex-center">
    <div class="text-h5 text-primary q-ma-sm">Sobre o Aplicativo</div>
    <div style="width: 100%; padding-bottom: 135%;">
      <q-list>
        <q-expansion-item
          :group="$q.screen.width > 1000 ? 'a' : 'sobre_app'"
          label="O que é Dislexia ?"
          class="bg-secondary text-justify"
          :default-opened="$q.screen.width > 1000"
          :style="
            $q.screen.width > 1000 ? 'font-size: 18px;' : 'font-size: 16px;'
          "
        >
          <q-card>
            <q-card-section>
              <div class="text-justify">
                <p>
                  A dislexia é uma dificuldade neurológica específica nos processamentos da linguagem[1,2]
                  reconhecer, reproduzir, associar e ordenar sons e formas  das letras organizando-os corretamente
                  Não pode ser descrito por:[1,2]
                  desordem do desenvolvimento intelectual, acuidade visual, desordem neurológica, educação inadequada, proficiência na linguagem ou adversidade psicossocial.
                  Cerca de 10%[3] a 20%[4,5] das pessoas do mundo possui algum grau de dislexia
                  No Brasil essa taxa é de aproximadamente 12%[6]
                </p>
                <p>
                  
                </p>
                <p>
                  
                </p>
                <p>
                  
                </p>
                <p>
                  
                </p>
                <p>
                  
                </p>
                <p>
                  
                </p>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

       <q-list>
        <q-expansion-item
          :group="$q.screen.width > 1000 ? 'b' : 'sobre_app'"
          label="Processo de Criação"
          :class="$q.screen.width > 1000 ? 'bg-secondary text-justify' : 'text-justify'"
          :default-opened="$q.screen.width > 1000"
          :style="
            $q.screen.width > 1000 ? 'font-size: 18px;' : 'font-size: 16px;'
          "
        >
          <q-card>
            <q-card-section>
              <div class="text-justify">
                <p>
                  O aplicativo foi elaborado utilizando as seguintes ferramentas e bibliotecas: 
                  Python, Tensorflow, Quasar, Vue, Cordova, Anaconda, Flask e Docker.

                </p>
                <p>
                 
                </p>
                <p>
                 
                </p>
                <p>
                  Após esta etapa foi realizada a criação de um webservice REST simples 
                  elaborado com a biblioteca Flask para disponibilizar as funcionalidades 
                  do modelo de predição. O código do webservice pode ser acessado através 
                  do link 
                  <a
                href="#"
                v-on:click="
                  abrirLink(
                    'https://github.com/tymonsx/rest_balneabilidade'
                  )
                "
                >Rest_Balneabilidade</a>

                </p>
                <p>
                  A última etapa foi a elaboração de um aplicativo para dispositivos móveis (plataforma Android) utilizando os frameworks Quasar, VueJS e Cordova. O código do aplicativo pode ser acessado através 
                  do link 
                  <a
                href="#"
                v-on:click="
                  abrirLink(
                    'https://github.com/raphaelhendrigo/app_balneabilidade'
                  )
                "
                >App_Balneabilidade</a>

                </p>
                <p>
                  Este projeto foi realizado pela equipe de desenvolvimento do Departamento 
                  de Informática em Saúde - EPM - UNIFESP
                  <ul>
                    <li>
                        Antonio Carlos da Silva Junior: Analista de Tecnologia da Informação no Departamento de Informática em Saúde da UNIFESP.
                    </li>
                    <li>
                        Raphael Hendrigo de Souza Gonçalves: Analista de Tecnologia da Informação no Departamento de Informática em Saúde da UNIFESP.
                    </li>
                    <li>
                        Ivan Calixto Ribeiro: Técnico de Tecnologia da Informação no Departamento de Informática em Saúde da UNIFESP.  
                    </li>
                  </ul>

                </p>
                
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

     
    </div>
  </q-page>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "Sobre_Dislexia",

  data() {
    return {
      slide: 1
    };
  },
  methods: {
    abrirLink(url) {
      openURL(url);
    }
  },
};
</script>