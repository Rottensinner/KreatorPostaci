<template>
  <div>
    <select
      name="rasa"
      id="rasa"
      placeholder="wybierz rase"
      v-model="wybRasa"
    >
      <option value="Człowiek">Człowiek</option>
      <option value="Krasnolud">Krasnolud</option>
      <option value="Elf">Elf</option>
      <option value="Półelf">Półelf</option>
      <option value="Półork">Półork</option>
      <option value="Niziołek">Niziołek</option>
      <option value="Gnom">Gnom</option>
      <option value="Diabelstwo">Diabelstwo</option>
      <option value="Drakon">Drakon</option>
    </select>
    <button @click="wyslanieDoNADCOS">Dalej</button>
  </div>
  <div v-if="wybRasa === 'Elf'">
      <p for="podrasa">Podrasa:</p>
      <input
        type="radio"
        id="Elf_leśny"
        value="Leśny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Elf leśny
      <input
        type="radio"
        id="Elf_Wysoki"
        value="Wysoki"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Elf Wysoki
      <input
        type="radio"
        id="Drow"
        value="Drow"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Drow

      <!-- Podrasy niziołków -->
    </div>
    <div v-if="wybRasa === 'Niziołek'">
      <p for="podrasa">Podrasa:</p>
      <input
        type="radio"
        id="Niziołek_Hardy"
        value="Hardy"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Niziołek Hardy

      <input
        type="radio"
        id="Niziołek_Lekkostopy"
        value="Lekkostopy"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Niziołek Lekkostopy

      <!--Podrasy drakonów-->
    </div>
    <div v-if="wybRasa === 'Drakon'">
      <p for="podrasa">Smoczy Rodowód:</p>
      <input
        type="radio"
        id="Biały"
        value="Biały"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Biały

      <input
        type="radio"
        id="Czarny"
        value="Czarny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Czarny
      <input
        type="radio"
        id="Czerwony"
        value="Czerwony"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Czerwony
      <input
        type="radio"
        id="Miedziany"
        value="Miedziany"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Miedziany
      <input
        type="radio"
        id="Mosieżny"
        value="Mosiężny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Mosiężny
      <input
        type="radio"
        id="Niebieski"
        value="Niebieski"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Niebieski
      <input
        type="radio"
        id="Spiżowy"
        value="Spiżowy"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Spiżowy
      <input
        type="radio"
        id="Srebrny"
        value="Srebrny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Srebrny
      <input
        type="radio"
        id="Zielony"
        value="Zielony"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Zielony
      <input
        type="radio"
        id="Złoty"
        value="Złoty"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Złoty
    </div>
    <!--Krasnolud-->

    <div v-if="wybRasa === 'Krasnolud'">
      <p for="podrasa">Podrasa:</p>
      <input
        type="radio"
        id="Krasnolud_Górski"
        value="Górski"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Krasnolud Górski

      <input
        type="radio"
        id="Krasnolud_Wzgórzowy"
        value="Wzgórzowy"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Krasnolud Wzgórzowy
    </div>

    <!--Gnom-->
    <div v-if="wybRasa === 'Gnom'">
      <p for="podrasa">Podrasa:</p>
      <input
        type="radio"
        id="Gnom_Skalny"
        value="Skalny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Gnom Skalny zdolnosc
      <input
        type="radio"
        id="Gnom_Leśny"
        value="Leśny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Gnom Leśny
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['wyslanieDoNADCOS'],
  data() {
    return {
      wybRasa: '', // Przypisz początkową wartość zmiennej wybRasa w sekcji data
      IsPodRasa: '',
      podrasa: '',
      rassStats: {
        STR: ref(8),
        KON: ref(8),
        ZRE: ref(8),
        MAD: ref(8),
        INTE: ref(8),
        CHA: ref(8),
      },
      podRassStats: {
        STR: ref(8),
        KON: ref(8),
        ZRE: ref(8),
        MAD: ref(8),
        INTE: ref(8),
        CHA: ref(8),
      },
    };
  },
  methods: {
    wyslanieDoNADCOS() {
      if (!this.wybRasa) {
        alert("Wybierz rase");
      } else {
        this.IsPodRasa = this.czyPodrasa(this.wybRasa);
        this.sprawdzRase(this.wybRasa, this.rassStats);
        this.$emit('wyslanieDoNADCOS', this.wybRasa, this.IsPodRasa, this.rassStats, this.podrasa);
      }
    },
    czyPodrasa(wybRasa) {
      if (
        wybRasa === "Elf" ||
        wybRasa === "Krasnolud" ||
        wybRasa === "Gnom" ||
        wybRasa === "Niziołek" ||
        wybRasa === "Drakon"
      ) {
        return true;
      } else {
        return false;
      }
    },
    sprawdzRase(wybRasa, rassStats) {
      if (wybRasa === "Człowiek") {
        for (const statKey in rassStats) {
          rassStats[statKey] = ref(1); // Ustaw statystyki za pomocą ref
        }
      } else if (wybRasa === "Elf") {
        rassStats.ZRE = ref(2);
        //dodajSpell("kula ognia");
      } else if (wybRasa === "Krasnolud") {
        rassStats.KON = ref(2);
      } else if (wybRasa === "Półelf") {
        rassStats.CHA = ref(1);
      } else if (wybRasa === "Półork") {
        rassStats.STR = ref(2);
        rassStats.KON = ref(1);
      } else if (wybRasa === "Niziołek") {
        rassStats.ZRE = ref(2);
      } else if (wybRasa === "Gnom") {
        rassStats.INTE = ref(2);
      } else if (wybRasa === "Diabelstwo") {
        rassStats.INTE = ref(1);
        rassStats.CHA = ref(2);
      } else if (wybRasa === "Drakon") {
        rassStats.STR = ref(2);
        rassStats.CHA = ref(1);
      }
    },
    sprawdzPodRase(rasa) {
      if (rasa) {
        if (rasa === "Elf" && this.podrasa === "Leśny") {
          this.podRassStats.MAD = ref(this.podRassStats.MAD.value + 1);
          //alert(9999999999999999)
        } else if (this.podrasa === "Wysoki") {
          this.podRassStats.INTE = ref(this.podRassStats.INTE.value + 1);
        } else if (this.podrasa === "Drow") {
          this.podRassStats.CHA = ref(this.podRassStats.CHA.value + 1);
        }
        //Podrasy Niziołków
        else if (this.podrasa === "Hardy") {
          this.podRassStats.KON = ref(this.podRassStats.KON.value + 1);
        } else if (this.podrasa === "Lekkostopy") {
          this.podRassStats.CHA = ref(this.podRassStats.CHA.value + 1);
        }
        //Podrasy Krasnoludów
        else if (rasa === "Krasnolud" && this.podrasa === "Wzgórzowy") {
          this.podRassStats.MAD = ref(this.podRassStats.MAD.value + 1);
        } else if (this.podrasa === "Górski") {
          this.podRassStats.STR = ref(this.podRassStats.STR.value + 2);
        }
        //Podrasy Gnomów
        else if (rasa === "Gnom" && this.podrasa === "Leśny") {
          this.podRassStats.ZRE = ref(this.podRassStats.ZRE.value + 1);
        } else if (this.podrasa === "Skalny") {
          this.podRassStats.KON = ref(this.podRassStats.KON.value + 1);
        }
      }
    },
  },
};
</script>
