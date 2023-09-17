<script>
import WybRasy from './components/WybRasy.vue';
import NadCos from './components/NadCos.vue'

export default {
  name: 'App',
  components: {
    WybRasy,
    NadCos // Dodaj komponent Nad do sekcji components
  }
}
</script>

<template>
  <div class="App">
    <NadCos/>
    
  </div>
</template>
