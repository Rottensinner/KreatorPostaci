<script >

import MojKompot from './components/MojKompot.vue'
import Cosiek from './components/Cosiek.vue';
import CosiekDziecko from './components/CosiekDziecko.vue';

export default{
  name: 'App',
  components: {
    MojKompot,
    Cosiek,
    CosiekDziecko
  }
}
</script>

<template>
 <div class="App">
<MojKompot />
<Cosiek/>
<CosiekDziecko/>

 </div>
</template>
