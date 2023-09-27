<script>
import WybRasy from './components/WybRasy.vue';
import NadCos from './components/NadCos.vue';
import MojKompot from './components/MojKompot.vue';
import Statystyki from './components/Statystyki.vue'


export default {
  name: 'App',
  components: {
    WybRasy,
    NadCos, // Dodaj komponent Nad do sekcji components
    Statystyki,
   // MojKompot
  }
}
</script>

<template>
  <div class="App">

    <NadCos/>
    
  </div>
</template>
