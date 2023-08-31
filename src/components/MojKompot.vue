<script setup>
import { ref } from 'vue';
const podrasa = ref(false);
const startStat = ref(8);
let punkty = ref(27);
const PunktMAX = ref(15);
const wybRasa = ref("");
const imie = ref("");
const nazwisko = ref("");
const Klasa = ref("");
const stats = {
  STR: ref(8),
  KON: ref(8),
  ZRE: ref(8),
  MAD: ref(8),
  INTE: ref(8),
  CHA: ref(8),
};
const rassStats = {
  STR: ref(0),
  KON: ref(0),
  ZRE: ref(0),
  MAD: ref(0),
  INTE: ref(0),
  CHA: ref(0),
};

const increaseStat = (stat) => {
  if (stat.value < PunktMAX.value && punkty.value > 0) {
    stat.value++;
    punkty.value--;
  }
};

const decreaseStat = (stat) => {
  if (stat.value > startStat.value ) {
    stat.value--;
    punkty.value++;
  }
};
const zerowanieRassSta = () => {
  for (const statKey in rassStats) {
    rassStats[statKey].value = 0;
  }
};
  
const sprawdzRase = () => {
  if (wybRasa.value === "Człowiek") { 
    for (const statKey in stats) {
      rassStats[statKey].value=1;

    }
  }
  else if(wybRasa.value === "Elf"){
    zerowanieRassSta();
    rassStats.ZRE.value=2;
    podrasa.value = true;
  }
  else if(wybRasa.value === "Kasnolud"){
    zerowanieRassSta();
    rassStats.KON.value=2;
    podrasa.value = true;
  }
  else if(wybRasa.value === "Półork"){
    zerowanieRassSta();
    rassStats.STR.value=2;
    rassStats.KON.value=1;  }
  else if(wybRasa.value === "Niziołek"){
    zerowanieRassSta();
    rassStats.ZRE.value=2;

  }
  else if(wybRasa.value === "Gnom"){
    zerowanieRassSta();
    rassStats.INTE.value=2;

  }
  else if(wybRasa.value === "Niziołek"){
    zerowanieRassSta();
    rassStats.INTE.value=1;
    rassStats.CHA.value=2;

  }
  else if(wybRasa.value === "Drakon"){
    zerowanieRassSta();
    rassStats.STR.value=2;
    rassStats.CHA.value=1;

  }
  else if(wybRasa.value === "Diabelstwo"){
    zerowanieRassSta();
    rassStats.INTE.value=1;
    rassStats.CHA.value=2;

  }
};
</script>

<template>
  <input type="text" v-model="imie">
  <div id="person">
    <select name="rasa" id="rasa" v-model="wybRasa" @change="sprawdzRase">
      <option value="Człowiek">Człowiek</option>
      <option value="Kasnolud">Krasnolud</option>
      <option value="Elf">Elf</option>
      <option value="Półelf">Półelf</option>
      <option value="Półork">Półork</option>
      <option value="Niziołek">Niziołek</option>
      <option value="Gnom">Gnom</option>
      <option value="Diabelstwo">Diabelstwo</option>
      <option value="Drakon">Drakon</option>
    </select>
    <p>Imie: {{ imie }}</p>
    <p>Rasa: {{ wybRasa }}</p>
    <p>Klasa: {{ Klasa }}</p>
    <p>podrasa: {{ podrasa }}</p>
    <p>Siła: <button @click="decreaseStat(stats.STR)">-</button> {{ stats.STR }}<button @click="increaseStat(stats.STR)">+</button></p>
    <p>Kondycja: <button @click="decreaseStat(stats.KON)">-</button>{{ stats.KON }}<button @click="increaseStat(stats.KON)">+</button></p>
    <p>Zreczność: <button @click="decreaseStat(stats.ZRE)">-</button>{{ stats.ZRE }}<button @click="increaseStat(stats.ZRE)">+</button></p>
    <p>Mądrość: <button @click="decreaseStat(stats.MAD)">-</button>{{ stats.MAD }}<button @click="increaseStat(stats.MAD)">+</button></p>
    <p>Inteligencja: <button @click="decreaseStat(stats.INTE)">-</button>{{ stats.INTE }}<button @click="increaseStat(stats.INTE)">+</button></p>
    <p>Charyzma: <button @click="decreaseStat(stats.CHA)">-</button>{{ stats.CHA }}<button @click="increaseStat(stats.CHA)">+</button></p>
    <p>Punkty doświadczenia: {{ punkty }}</p>
    <p>STATYSTYKI</p>
    <p>|{{ rassStats.STR.value+stats.STR.value }}|{{ rassStats.KON.value+stats.KON.value }}|{{ rassStats.ZRE.value+stats.ZRE.value }}|{{ rassStats.MAD.value+stats.MAD.value }}|{{ rassStats.INTE.value+stats.INTE.value }}|{{ rassStats.CHA.value+stats.CHA.value }}|</p>
  </div>
</template>
