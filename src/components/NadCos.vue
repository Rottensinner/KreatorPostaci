  <template>
    <div>
      <WybRasy @wyslanieDoNADCOS="WybranieRasy" />
      <Statystyki></Statystyki>
    </div>
  </template>

  <script>
  import WybRasy from "@/components/WybRasy.vue";
  import Statystyki from "@/components/Statystyki.vue";
  import { ref } from "vue";

  export default {
    data() {
      return {
        Rasa: "", // Przypisz początkową wartość właściwości Rasa
        IsPodrasa: false,
        Podrasa: "",
        staty: {
          STR: ref(8),
          KON: ref(8),
          ZRE: ref(8),
          MAD: ref(8),
          INTE: ref(8),
          CHA: ref(8),
        },
      };
    },
    components: {
      WybRasy,
      Statystyki,
    },
    methods: {
      WybranieRasy(data, IsPodRasa, staty, podrasa, rassStats, modyfikatoryRasy) {
    console.log("Odebrane dane:", data, IsPodRasa, staty, podrasa, rassStats, modyfikatoryRasy);
    console.log("Wybrana rasa:", data);
    this.Rasa = data;
    this.IsPodrasa = IsPodRasa;
    console.log("Posiada Podrasę:", IsPodRasa);
    
    // Upewnij się, że argumenty są zdefiniowane przed użyciem
    if (staty && rassStats && modyfikatoryRasy) {
      for (const statKey in this.staty) {
        if (this.staty.hasOwnProperty(statKey)) {
          // Sprawdzamy, czy statKey jest właściwością obiektu this.staty
          this.staty[statKey] = staty[statKey] + rassStats[statKey] + modyfikatoryRasy[statKey];
          console.log(statKey, ":", this.staty[statKey]);
        }
      }
    }
    
    if (IsPodrasa) console.log("Podrasa ", podrasa);
  }
    },
  };
  </script>
