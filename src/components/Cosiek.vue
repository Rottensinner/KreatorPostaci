<template>
  <div>
    <!-- <h1>Przykład użycia props w Vue.js</h1> -->
    <!-- <CosiekDziecko :name="imieZRodzica" /> -->
    
  </div>
</template>

<script>
import CosiekDziecko from "./CosiekDziecko.vue";
import MojKompot from "./MojKompot.vue";


export default {
  components: {
    
    CosiekDziecko,
    MojKompot
},
  data() {
    return {
      imieZRodzica: "Jan",
    };
  },
};
</script>