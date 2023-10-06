<template>
  <div>
    <WybRasy @wyslanieDoNADCOS="WybranieRasy" />
  </div>
</template>

<script>
import WybRasy from "@/components/WybRasy.vue";
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
  },
  methods: {
    //
    WybranieRasy(data, IsPodRasa, rassStats, podrasa, podRassStats) {
      if (this.Rasa == data && this.Podrasa == podrasa) {
        alert("przepraszam");
      } else if (this.Podrasa !== podrasa) {
        this.Podrasa = podrasa;
        for (const statKey in this.staty) {
          this.staty[statKey] += rassStats[statKey] + podRassStats[statKey];
          console.log(statKey, ":", this.staty[statKey]);
        }
      } else {
        this.Rasa = data;
        this.IsPodrasa = IsPodRasa;
        this.Podrasa = podrasa;
        console.log("wybrana rasa:", data);
        console.log("Posiada Podrasę:", IsPodRasa);
        for (const statKey in this.staty) {
          this.staty[statKey] += rassStats[statKey] + podRassStats[statKey];
          console.log(statKey, ":", this.staty[statKey]);
        }
        if (IsPodRasa) console.log("Podrasa ", podrasa);
      }
    },
  },
};
</script>
