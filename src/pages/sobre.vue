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
                  A dislexia é uma dificuldade neurológica específica nos processamentos da linguagem
                  reconhecer, reproduzir, associar e ordenar sons e formas  das letras organizando-os corretamente.
                  Não pode ser descrito por:
                  desordem do desenvolvimento intelectual, acuidade visual, desordem neurológica, educação inadequada, proficiência na linguagem ou adversidade psicossocial.
                                   
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
                  Quasar, Vue, Cordova, Node.js.

                </p>
                <p>
                 
                </p>
                <p>
                 
                </p>
                <p>
                Na primeira etapa foi realizado o treinamento do modelo de regressão logística no Node.js e o modelo treinado
                exportado em JSON. 
                </p>
                Após a primeira etapa o modelo foi importado para a o Quasar.
                <p>
                  A última etapa foi a elaboração de um aplicativo para dispositivos móveis (plataforma Android) utilizando os frameworks Quasar, VueJS e Cordova. O código do aplicativo pode ser acessado através 
                  do link 
                  <a
                href="#"
                v-on:click="
                  abrirLink(
                    'https://github.com/tymonsx/appDislexia.git'
                  )
                "
                >AppDislexia</a>

                </p>
                <p>
                  O protocolo MNREAD (Minnesota Low Vision Reading Test)[18] foi desenvolvido especificamente para avaliar FVL, 
                  onde são apresentados uma sequência de textos, montados com um vocabulário controlado, em tamanhos decrescentes 
                  (em escala logMAR ) e em cada leitura é medido a velocidade em palavras por minuto (ppm). Na Figura 1 é apresentado 
                  um exemplo de medidas de velocidade de leitura deste teste, onde pode ser extraído a máxima velocidade de leitura 
                  (MVL), caracterizado pela maior velocidade obtida em todos os textos, a linha máxima de velocidade de leitura 
                  (LMVL), caracterizado pelo tamanho da letra durante a maior velocidade de leitura, o tamanho crítico de letra 
                  (TCL) caracterizado pelo tamanho de letra em que a velocidade de leitura começa a decair, a velocidade de leitura 
                  durante o tamanho crítico de letra (VTCL) e a acuidade de leitura (AL) o menor tamanho de letra lido.
                </p>
                <p>
                  <img alt="Quasar logo" src="~assets/função_visual_sobre.png" >
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