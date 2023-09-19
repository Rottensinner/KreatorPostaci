import { ref } from "vue";

export default (await import("vue")).defineComponent({
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
          this.podrasa
        );
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

    sprawdzPodRase(podrasa, podRassStats) {
      if (podrasa) {
        let ppodrasa = podrasa;
        zerowaniePodRassSta(podRassStats, this.rassStats);
        sprawdzRase();
        podrasa = ppodrasa;
      }

      if (rasa === "Elf" && podrasa === "Leśny") {
        podRassStats.MAD += 1;

        //alert(9999999999999999)
      } else if (podrasa === "Wysoki") {
        podRassStats.INTE += 1;
      } else if (podrasa === "Drow") {
        podRassStats.CHA += 1;
      }

      //Podrasy Niziołków
      else if (podrasa === "Hardy") {
        podRassStats.KON += 1;
      } else if (podrasa === "Lekkostopy") {
        podRassStats.CHA += 1;
      }

      //Podrasy Krasnoludów
      else if (podrasa === "Wzgórzowy") {
        podRassStats.MAD += 1;
      } else if (podrasa === "Górski") {
        podRassStats.STR += 2;
      }

      //Podrasy Gnomów
      else if (rasa.value === "Gnom" && podrasa === "Leśny") {
        podRassStats.ZRE.value += 1;
      } else if (podrasa.value === "Skalny") {
        podRassStats.KON.value += 1;
      }
    },

    zerowaniePodRassSta(podRassStats) {
      for (const statKey in podRassStats) {
        podRassStats[statKey] = 0;
      }
    },
  },
});
