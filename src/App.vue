<script>
import WybRasy from './components/WybRasy.vue';
import NadCos from './components/NadCos.vue'
import MojKompot from './components/MojKompot.vue';

export default {
  name: 'App',
  components: {
    WybRasy,
    NadCos, // Dodaj komponent Nad do sekcji components
    MojKompot
  }
}
</script>

<template>
  <div class="App">
    <MojKompot/>
    <NadCos/>
    
  </div>
</template>
