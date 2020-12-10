<template>
  <q-page class="full-height q-pa-xs q-gutter-sm">
    <!--<img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >-->
    <div>
      <q-list>
        <q-expansion-item
          :group="$q.screen.width > 1000 ? 'a' : 'gerar_dados_exemplo'"
          label="Gerar Dados de Exemplo"
          class="bg-secondary text-center"
          v-model="expansionGerarDadosExemplo"
        >
          <q-card>
            <q-card-section class="full-width text-center">
              <q-btn
                label="Disléxico"
                color="primary"
                style="margin-right:20px;"
                @click="gerarDadosExemplo('disléxico')"
              ></q-btn>
              <q-btn
                label="Não-Disléxico"
                color="primary"
                @click="gerarDadosExemplo('não-disléxico')"
              ></q-btn>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
    <div class="text-center justify-center q-ma-xs">
      <span class=" text-primary q-ma-sm text-center">Entenda as siglas</span>
      <q-btn
        icon="help"
        color="primary"
        @click="popupLegendaSiglas = true"
        flat
        padding="none"
        style="margin-top: -2.5px;"
      />
      <q-dialog v-model="popupLegendaSiglas">
        <q-card class="full-width">
          <q-card-section>
            <div class="text-h6 text-center">Legenda Siglas</div>
          </q-card-section>

          <q-card-section class="q-pt-none text-justify">
            <p>
              logMAR = Unidade de medida para tamanhos de letras que representam
              o ângulo de visão
            </p>
            <p>PPM = Palavras por minuto</p>
            <p>AL = Acuidade de leitura</p>
            <p>LMVL = Tamanho de letra na máxima velocidade de leitura</p>
            <p>VL = Velocidade de leitura</p>
            <p>MVL = Máxima velocidade de leitura</p>
            <p>VTCL = Velocidade de leitura no tamanho crítico de letra</p>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <q-list class="full-width q-pa-xs">
      <q-item>
        <q-item-section>
          <span class="text-primary">AL (logMAR)</span>
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="al"
            :min="0"
            :max="1"
            :step="0.1"
            label-always
            color="primary"
            :style="
              $q.screen.width > 750
                ? 'margin-left:-50%; width:150%;'
                : 'width:105%;'
            "
          />
        </q-item-section>
      </q-item>
      <!--<q-item>
        <q-item-section>
          <span class="text-primary">TCL (logMAR)</span>
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="tcl"
            :min="0"
            :max="1"
            :step="0.1"
            label-always
            color="primary"
            :style="
              $q.screen.width > 750
                ? 'margin-left:-50%; width:150%;'
                : 'width:105%;'
            "
          />
        </q-item-section>
      </q-item>-->
      <q-item>
        <q-item-section>
          <span class="text-primary">LMVL (logMAR)</span>
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="lmvl"
            :min="0"
            :max="1"
            :step="0.1"
            label-always
            color="primary"
            :style="
              $q.screen.width > 750
                ? 'margin-left:-50%; width:150%;'
                : 'width:105%;'
            "
          />
        </q-item-section>
      </q-item>
    </q-list>
    <!--<div class="text-center justify-center q-ma-xs">
      <span class="text-primary q-ma-sm text-center"
        >Velocidade de Leitura</span
      >
      <q-btn
        icon="help"
        color="primary"
        @click="popupLegendaVelocidade = true"
        flat
        padding="none"
        style="margin-top: -2.5px;"
      />
      <q-dialog v-model="popupLegendaVelocidade">
        <q-card class="full-width">
          <q-card-section>
            <div class="text-h6 text-center">Legenda Velocidade de Leitura</div>
          </q-card-section>
          <q-card-section class="q-pt-none text-justify">
            <p>PPM = Palavras por minuto</p>
            <p>VL = Velocidade de leitura</p>
            <p>MVL = Máxima velocidade de leitura</p>
            <p>VTCL = Velocidade de leitura no tamanho crítico de letra</p>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>-->
    <div class="row items-center">
      <q-input
        v-model.number="vl"
        label="VL (PPM)"
        type="number"
        :style="
          $q.screen.width > 750
            ? 'width:98.5%;margin-left:0.5%;'
            : 'width:97%; margin-left:2%;'
        "
        ref="inputVl"
      /><br />
      <q-input
        v-model.number="mvl"
        label="MVL (PPM)"
        type="number"
        style=""
        :style="
          $q.screen.width > 750
            ? 'width:98.5%;margin-left:0.5%;'
            : 'width:97%; margin-left:2%;'
        "
        ref="inputMvl"
      /><br />
      <q-input
        v-model.number="vtcl"
        label="VTCL (PPM)"
        type="number"
        :style="
          $q.screen.width > 750
            ? 'width:98.5%;margin-left:0.5%;'
            : 'width:97%; margin-left:2%;'
        "
        ref="inputVtcl"
      />
      <!--<q-input
        v-model.number="vl"
        label="VL (PPM)"
        type="number"
        :style="
          $q.screen.width > 750
            ? 'width:98.5%;margin-left:0.5%;'
            : 'width:97%; margin-left:2%;'
        "
        @change="validarInputNumero('vl')"
        ref="inputVl"
      /><br />
      <q-input
        v-model.number="mvl"
        label="MVL (PPM)"
        type="number"
        style=""
        :style="
          $q.screen.width > 750
            ? 'width:98.5%;margin-left:0.5%;'
            : 'width:97%; margin-left:2%;'
        "
        @change="validarInputNumero('mvl')"
        ref="inputMvl"
      /><br />
      <q-input
        v-model.number="vtcl"
        label="VTCL (PPM)"
        type="number"
        :style="
          $q.screen.width > 750
            ? 'width:98.5%;margin-left:0.5%;'
            : 'width:97%; margin-left:2%;'
        "
        @change="validarInputNumero('vtcl')"
        ref="inputVtcl"
      />-->
      <q-dialog v-model="popupInputNumero">
        <q-card class="full-width">
          <q-card-section>
            <div class="text-h6 text-center">Erro</div>
          </q-card-section>
          <q-card-section class="q-pt-none text-justify">
            <p>
              O número precisa ser de no máximo 400 . Por favor digite novamente
            </p>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <div class="row items-end justify-center q-pa-xs">
      <q-btn
        label="Limpar Campos"
        color="primary"
        @click="limparCampos()"
        style="margin-right:20px;"
      ></q-btn>
      <q-btn label="Predizer" color="primary" @click="chamarPredicao()"></q-btn>
      <!--<q-dialog v-model="popupResultados">
        <q-card class="full-width">
          <q-card-section>
            <div class="text-h6 text-center">Resultado: {{ resultado }}</div>
          </q-card-section>
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>-->
      <q-dialog v-model="popupCamposBranco">
        <q-card class="full-width">
          <q-card-section>
            <div class="text-h6 text-center">Erro</div>
          </q-card-section>
          <q-card-section class="q-pt-none text-justify">
            <p>
              Por favor preencha todos os 5 campos
            </p>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <div>
      <p
        class="text-h5 text-primary text-center text-bold"
        :style="$q.screen.height > 750 ? 'margin-top:5%;' : ''"
      >
        Resultado: {{ resultado }}
      </p>
    </div>
  </q-page>
</template>

<script>
import Matrix from "ml-matrix";
import LogisticRegressionTwoClasses from "ml-logistic-regression";

export default {
  name: "PageIndex",
  data() {
    return {
      lmvl: 0,
      //tcl: 0,
      al: 0,
      vl: "",
      mvl: "",
      vtcl: "",
      //popupLegendaTamanho: false,
      //popupLegendaVelocidade: false,
      popupLegendaSiglas: false,
      popupInputNumero: false,
      popupResultados: false,
      popupCamposBranco: false,
      resultado: "",
      expansionGerarDadosExemplo: false
    };
  },
  methods: {
    /* validarInputNumero(param) {
      if (param == "vl") {
        console.log("param ", this.vl);
        if (this.vl > 400) {
          this.popupInputNumero = true;
          this.vl = "";
          this.$refs.inputVl.focus();
        }
      } else if (param == "mvl") {
        console.log("param ", this.mvl);

        if (this.mvl > 400) {
          this.popupInputNumero = true;
          this.mvl = "";
          this.$refs.inputMvl.focus();
        }
      } else if (param == "vtcl") {
        console.log("param ", this.vtcl);

        if (this.vtcl > 400) {
          this.popupInputNumero = true;
          this.vtcl = "";
          this.$refs.inputVtcl.focus();
        }
      }
    }, */
    limparCampos() {
      this.lmvl = 0;
      //this.tcl = 0;
      this.al = 0;
      this.vl = "";
      this.mvl = "";
      this.vtcl = "";
      this.resultado = "";
      this.expansionGerarDadosExemplo = false;
    },
    chamarPredicao() {
      console.log("LMVL: ", this.lmvl);
      //console.log("TCL: ", this.tcl);
      console.log("AL: ", this.al);
      console.log("VL: ", this.vl);
      console.log("MVL: ", this.mvl);
      console.log("VTCL: ", this.vtcl);

      if (this.vl != "" && this.mvl != "" && this.vtcl != "") {
        //this.popupResultados = true;

        this.resultado = this.metodoPredicao(
          this.lmvl,
          this.al,
          this.vl,
          this.mvl,
          this.vtcl
        );
      } else {
        if (this.vl == "") {
          this.$refs.inputVl.focus();
        } else if (this.mvl == "") {
          this.$refs.inputMvl.focus();
        } else if (this.vtcl == "") {
          this.$refs.inputVtcl.focus();
        }
        this.popupCamposBranco = true;
      }
    },
    metodoPredicao(lmvl, al, vl, mvl, vtcl) {
      let model = require("assets/modelo.json");
      model = JSON.parse(JSON.stringify(model));
      console.log("=> JSON carregado.", model);

      let logreg = LogisticRegressionTwoClasses.load(model);
      console.log("=> Regressão logistica Carregada.", logreg);

      /* let LMVL = 0.5;
      let AL = 0.4;
      let VL = 116.6283796;
      let MVL = 152.881223;
      let VTCL = 116.6283796; */

      let Xtest = new Matrix([[al, vl, lmvl, mvl, vtcl]]);
      let finalResults = logreg.predict(Xtest);
      console.log(finalResults[0]);
      //console.log(finalResults[0] == 1 ? "Disléxico" : "Não-Disléxico");
      return finalResults[0] == 1 ? "Disléxico" : "Não-Disléxico";
    },
    gerarDadosExemplo(param) {
      this.resultado = "";

      if (param == "disléxico") {
        this.al = 0.4;
        this.lmvl = 0.5;
        this.vl = 116.62838;
        this.mvl = 152.881223;
        this.vtcl = 116.62838;
      } else if (param == "não-disléxico") {
        this.al = 0.2;
        this.lmvl = 0.6;
        this.vl = 121.875;
        this.mvl = 241.044526;
        this.vtcl = 229.591837;
      }

      this.expansionGerarDadosExemplo = false;
    }
  }
};
</script>
