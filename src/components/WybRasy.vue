<template>
  <div>
    <label>Imie</label>
    <input type="text" />
    <label>Rasa</label>
    <select name="rasa" id="rasa" placeholder="wybierz rase" v-model="wybRasa">
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
import { ref, watch } from "vue";

export default {
  emits: ["wyslanieDoNADCOS"],
  data() {
    return {
      wybRasa: "",
      IsPodRasa: false,
      podrasa: "",
      rassStats: {
        STR: ref(0),
        KON: ref(0),
        ZRE: ref(0),
        MAD: ref(0),
        INTE: ref(0),
        CHA: ref(0),
      },
      podRassStats: {
        STR: ref(0),
        KON: ref(0),
        ZRE: ref(0),
        MAD: ref(0),
        INTE: ref(0),
        CHA: ref(0),
      },
    };
  },
  methods: {
    // sprawdzenie czy wybrana rasa ma podrasę.
    wyslanieDoNADCOS() {
      this.IsPodRasa = this.czyPodrasa(this.wybRasa);

      if (this.IsPodRasa && this.podrasa === "") {
        console.log("Wybierz podrase");
      } else if (!this.wybRasa) {
        alert("Wybierz rase");
      } else {
        this.sprawdzRase(this.wybRasa, this.rassStats);

        this.$emit(
          "wyslanieDoNADCOS",
          this.wybRasa,
          this.IsPodRasa,
          this.rassStats,
          this.podrasa,
          this.podRassStats
        );
      }
    },
    czyPodrasa(wybRasa) {
      const podrasaRasy = ["Elf", "Krasnolud", "Gnom", "Niziołek", "Drakon"];
      return podrasaRasy.includes(wybRasa);
    },
    sprawdzRase(wybRasa, rassStats) {
      for (const statKey in rassStats) {
        rassStats[statKey] = 0;
      }
      switch (wybRasa) {
        case "Człowiek":
          for (const statKey in rassStats) {
            rassStats[statKey] = 1;
          }
          break;
        case "Elf":
          rassStats.ZRE = 2;
          break;
        case "Krasnolud":
          rassStats.KON = 2;
          break;
        case "Półelf":
          rassStats.CHA = 1;
          break;
        case "Półork":
          rassStats.STR = 2;
          rassStats.KON = 1;
          break;
        case "Niziołek":
          rassStats.ZRE = 2;
          break;
        case "Gnom":
          rassStats.INTE = 2;
          break;
        case "Diabelstwo":
          rassStats.INTE = 1;
          rassStats.CHA = 2;
          break;
        case "Drakon":
          rassStats.STR = 2;
          rassStats.CHA = 1;
          break;
        default:
          break;
      }
    },

    sprawdzPodRase() {
      this.zerowanieStat(this.podRassStats);
      this.zerowanieStat(this.podRassStats);
      if (this.wybRasa === "Elf" && this.podrasa === "Leśny") {
        this.podRassStats.MAD = 1;
        this.podRassStats.MAD = 1;
      } else if (this.podrasa === "Wysoki") {
        this.podRassStats.INTE = 1;
        this.podRassStats.INTE = 1;
      } else if (this.podrasa === "Drow") {
        this.podRassStats.CHA = 1;
        this.podRassStats.CHA = 1;
      }
      // Podrasy Niziołków
      else if (this.podrasa === "Hardy") {
        this.podRassStats.KON = 1;
        this.podRassStats.KON = 1;
      } else if (this.podrasa === "Lekkostopy") {
        this.podRassStats.CHA = 1;
        this.podRassStats.CHA = 1;
      }
      // Podrasy Krasnoludów
      else if (this.podrasa === "Wzgórzowy") {
        this.podRassStats.MAD = 1;
        this.podRassStats.MAD = 1;
      } else if (this.podrasa === "Górski") {
        this.podRassStats.STR = 2;
        this.podRassStats.STR = 2;
      }
      // Podrasy Gnomów
      else if (this.wybRasa === "Gnom" && this.podrasa === "Leśny") {
        this.podRassStats.ZRE = 1;
        this.podRassStats.ZRE = 1;
      } else if (this.podrasa === "Skalny") {
        this.podRassStats.KON = 1;
        this.podRassStats.KON = 1;
      }
    },
    zerowanieStat(podRassStats) {
      for (const statKey in podRassStats) {
        podRassStats[statKey] = 0;
      }
    },
  },
  watch: {
    wybRasa(newRasa) {
      // Tutaj obserwujemy zmiany w wyborze rasy
      this.sprawdzRase(newRasa, this.rassStats);
      console.log(this.wybRasa);

      // Aktualizujemy rassStats na podstawie nowej rasy
    },
    podrasa(newPodrasa) {
      // Tutaj obserwujemy zmiany w wyborze podrasy
      this.sprawdzPodRase();
      console.log(this.podrasa);

      // Aktualizujemy podRassStats na podstawie nowej podrasy
    },
  },
};
</script>
