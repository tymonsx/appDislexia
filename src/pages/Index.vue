<template>
  <q-page class="full-height q-pa-xs q-gutter-sm">
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
    <q-form
      @submit.stop="chamarPredicao"
      @reset="limparCampos"
      class="flex flex-center"
    >
      <div class="full-width row q-pa-sm q-mt-md">
        <span class="text-primary col-xs-5">AL (logMAR)</span>
        <q-slider
          v-model="al"
          :min="0"
          :max="1"
          :step="0.1"
          label-always
          color="primary"
          class="col-xs-7"
        />
      </div>
      <div class="full-width row q-pa-sm q-mt-md">
        <span class="text-primary col-xs-5">LMVL (logMAR)</span>
        <q-slider
          v-model="lmvl"
          :min="0"
          :max="1"
          :step="0.1"
          label-always
          color="primary"
          class="col-xs-7"
        />
      </div>
      <div class="full-width q-pa-sm">
        <q-input
          v-model="vl"
          label="VL (PPM)"
          ref="inputVl"
          :rules="[
            val => (val != '' && val != null) || 'Informe um valor numérico'
          ]"
          @input="validarEntrada('vl')"
          class="q-pb-xs"
        />
        <q-input
          v-model="mvl"
          label="MVL (PPM)"
          ref="inputMvl"
          :rules="[val => (val != '' && val != null) || 'Informe um valor']"
          @input="validarEntrada('mvl')"
          class="q-pb-xs"
        />
        <q-input
          v-model="vtcl"
          label="VTCL (PPM)"
          ref="inputVtcl"
          :rules="[val => (val != '' && val != null) || 'Informe um valor']"
          @input="validarEntrada('vtcl')"
        />
      </div>
      <div class="full-width text-center q-gutter-md">
        <q-btn label="Predizer" color="primary" type="submit"></q-btn>
        <q-btn label="Limpar Campos" color="primary" type="reset"></q-btn>
      </div>
      <div class="q-mt-md">
        <p
          class="text-h5 text-primary text-center text-bold"
          :style="$q.screen.height > 750 ? 'margin-top:5%;' : ''"
        >
          Resultado: {{ resultado }}
        </p>
      </div>
    </q-form>
  </q-page>
</template>
<script>
import Matrix from "ml-matrix";
import LogisticRegressionTwoClasses from "ml-logistic-regression";
import arquivo_modelo from "../../public/model/modelo.json";
export default {
  data() {
    return {
      lmvl: 0,
      al: 0,
      vl: "",
      mvl: "",
      vtcl: "",
      popupLegendaSiglas: false,
      resultado: "",
      expansionGerarDadosExemplo: false
    };
  },
  methods: {
    limparCampos() {
      this.lmvl = 0;
      this.al = 0;
      this.vl = "";
      this.mvl = "";
      this.vtcl = "";
      this.resultado = "";
      this.expansionGerarDadosExemplo = false;
    },
    chamarPredicao() {
      if (this.vl != "" && this.mvl != "" && this.vtcl != "") {
        this.vl = String(this.vl).replace(".", "");
        this.vl = String(this.vl).replace(",", ".");

        this.mvl = String(this.mvl).replace(".", "");
        this.mvl = String(this.mvl).replace(",", ".");

        this.vtcl = String(this.vtcl).replace(".", "");
        this.vtcl = String(this.vtcl).replace(",", ".");

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
      let model = require("../../public/model/modelo.json");
      model = JSON.parse(JSON.stringify(model));

      let logreg = LogisticRegressionTwoClasses.load(model);

      let Xtest = new Matrix([[al, vl, lmvl, mvl, vtcl]]);
      let finalResults = logreg.predict(Xtest);

      this.vl = Number(this.vl).toLocaleString("pt-BR");
      this.mvl = Number(this.mvl).toLocaleString("pt-BR");
      this.vtcl = Number(this.vtcl).toLocaleString("pt-BR");

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

      this.vl = Number(this.vl).toLocaleString("pt-BR");
      this.mvl = Number(this.mvl).toLocaleString("pt-BR");
      this.vtcl = Number(this.vtcl).toLocaleString("pt-BR");

      this.expansionGerarDadosExemplo = false;
    },
    validarEntrada(param) {
      let temporaria = "";
      let expressaoRegular = /^[0-9.,]*$/;

      switch (param) {
        case "vl":
          temporaria = String(this.vl).substring(0, this.vl.length - 1);
          if (!expressaoRegular.test(String(this.vl).slice(-1))) {
            this.vl = temporaria;
            this.$refs.inputVl.$forceUpdate();
          }
          break;
        case "mvl":
          temporaria = String(this.mvl).substring(0, this.mvl.length - 1);
          if (!expressaoRegular.test(this.mvl.slice(-1))) {
            this.mvl = temporaria;
            this.$refs.inputMvl.$forceUpdate();
          }
          break;
        case "vtcl":
          temporaria = String(this.vtcl).substring(0, this.vtcl.length - 1);
          if (!expressaoRegular.test(this.vtcl.slice(-1))) {
            this.vtcl = temporaria;
            this.$refs.inputVtcl.$forceUpdate();
          }
          break;
      }
    }
  }
};
</script>
