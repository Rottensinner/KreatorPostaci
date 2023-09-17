import WybRasy from '@/components/WybRasy.vue';
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
</template>

<script>
export default {
  data() {
    return {
      wybRasa: '', // Przypisz początkową wartość zmiennej wybRasa w sekcji data
      IsPodRasa: '',
    };
  },
  methods: {
    wyslanieDoNADCOS() {
      if(!this.wybRasa){
        alert("Wybierz rase")
      }else
      this.IsPodRasa = this.czyPodrasa(this.wybRasa);
      this.$emit('wyslanieDoNADCOS', this.wybRasa , this.IsPodRasa);
    },
    czyPodrasa(wybRasa){
     
      if(wybRasa==="Elf" || wybRasa==="Krasnolud" || wybRasa=== "Gnom" || wybRasa=== "Niziołek" || wybRasa=== "Drakon"){
     return true;
      }
      else {
      return false;
 }
  },
   sprawdzRase(WybRasy){
  if (wybRasa=== "Człowiek") {
    for (const statKey in stats) {
      rassStats[statKey].value = 1;
    }
  } else if (wybRasa === "Elf") {
    

    rassStats.ZRE.value = 2;
    
    //dodajSpell("kula ognia");
  } else if (wybRasa === "Krasnolud") {
    

    rassStats.KON.value = 2;
    
  } else if (wybRasa === "Półelf") {
    rassStats.CHA.value = 1;
    
  } else if (wybRasa === "Półork") {
    

    rassStats.STR.value = 2;
    rassStats.KON.value = 1;
  } else if (wybRasa === "Niziołek") {
    

    rassStats.ZRE.value = 2;
    
  } else if (wybRasa === "Gnom") {
   

    rassStats.INTE.value = 2;
    
  } else if (wybRasa === "Diabelstwo") {
    
    
    rassStats.INTE.value = 1;
    rassStats.CHA.value = 2;
  } else if (wybRasa === "Drakon") {
    

    

    rassStats.STR.value = 2;
    rassStats.CHA.value = 1;
  }
  

 
},
  }
};
</script>
