<script setup>
import { ref } from "vue";
const podrasa = ref(null);
const startStat = ref(8);
let punkty = ref(27);
const PunktMAX = ref(15);
const wybRasa = ref(null);
const imie = ref("");
const nazwisko = ref("");
const Klasa = ref(null);
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
const podRassStats = {

STR: ref(0),
  KON: ref(0),
  ZRE: ref(0),
  MAD: ref(0),
  INTE: ref(0),
  CHA: ref(0),
}
const increaseStat = (stat) => {
  if (stat.value < PunktMAX.value && punkty.value > 0){
  if(stat.value >=13){
    stat.value+=1;
    punkty.value -=2;
    
  }
    if(stat.value<13){
      
      stat.value+=1;
      punkty.value-=1;
    
  }
  }
};

const decreaseStat = (stat) => {
  if (stat.value > startStat.value) {
    if(stat.value<14){
      stat.value-=1;
      punkty.value+=1;
  }
    
    if(stat.value >=14){
    stat.value-=1;
    punkty.value +=2;
  }
   
}
};

const zerowaniePodRassSta = () => {
  for (const statKey in rassStats) {
    podRassStats[statKey].value = 0;
  }
};
const zerowanieRassSta = () => {
  for (const statKey in rassStats) {
    rassStats[statKey].value = 0;
  }
};

const obliczSumeCechOsobno = () => {
  const sumy = {};

  for (const statKey in stats) {
    sumy[statKey] = stats[statKey].value + rassStats[statKey].value+podRassStats[statKey].value;
  }

  return sumy;
};
const sprawdzRase = () => {
  zerowanieRassSta();
  zerowaniePodRassSta();
  if (wybRasa.value === "Człowiek") {
    for (const statKey in stats) {
      rassStats[statKey].value = 1;
    }
  } else if (wybRasa.value === "Elf") {
    
    rassStats.ZRE.value = 2;
  } else if (wybRasa.value === "Krasnolud") {
    rassStats.KON.value = 2;
  } else if (wybRasa.value === "Półork") {
    
    rassStats.STR.value = 2;
    rassStats.KON.value = 1;
  } else if (wybRasa.value === "Niziołek") {
    
    rassStats.ZRE.value = 2;
  } else if (wybRasa.value === "Gnom") {
    
    rassStats.INTE.value = 2;
  } else if (wybRasa.value === "Diabelstwo") {
   
    rassStats.INTE.value = 1;
    rassStats.CHA.value = 2;
  }
};

//PODRASY, PODRASSY STATY
const sprawdzPodRase = () => {
  
  if(podrasa.value){
    zerowaniePodRassSta();

  }

  //Podrasy Elfów
  if(podrasa.value ==="Leśny"){
  podRassStats.MAD.value +=1;

  }
  else if(podrasa.value ==="Wysoki"){
  podRassStats.INTE.value +=1;

  }
  else if(podrasa.value === "Drow"){
    podRassStats.CHA.value +=1;

  }
  //Podrasy Niziołków
  else if(podrasa.value ==="Hardy"){
    podRassStats.KON.value +=1;

  }
  else if(podrasa.value ==="Lekkostopy"){
    podRassStats.CHA.value +=1;

  }
  //Podrasy Krasnoludów
  else if(podrasa.value === "Wzgórzowy"){
    podRassStats.MAD.value +=1;

  }
  else if(podrasa.value ==="Górski"){
    
    podRassStats.STR.value +=2;

  }
  //Podrasy Gnomów
  else if(podrasa.value ==="Leśny"){
    podRassStats.ZRE.value +=1;

}
  else if(podrasa.value ==="Skalny"){
    podRassStats.KON.value +=1;


}
};

</script>

<!--Wybór Rasy -->

<template>
  <div id="person">
    <input type="text" placeholder="Imie" v-model="imie" />

    <select
      name="rasa"
      id="rasa"
      placeholder="wybierz rase"
      v-model="wybRasa"
      @change="sprawdzRase">
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

    <!--Podrasy -->
    <!--Podrasy Elfów-->
    <div v-if="wybRasa === 'Elf'">
      <p for="podrasa">Podrasa:</p>
      <input
        type="radio"
        id="Elf_leśny"
        value="Leśny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Elf leśny

      <input
        type="radio"
        id="Elf_Wysoki"
        value="Wysoki"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Elf Wysoki
      <input
        type="radio"
        id="Drow"
        value="Drow"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Drow

      <!-- Podrasy niziołków -->
    </div>
    <div v-if="wybRasa === 'Niziołek'">
      <p for="podrasa">Podrasa:</p>
      <input
        type="radio"
        id="Niziołek_Hardy"
        value="Hardy"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Niziołek Hardy

      <input
        type="radio"
        id="Niziołek_Lekkostopy"
        value="Lekkostopy"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Niziołek_Lekkostopy

      <!--Podrasy drakonów-->
    </div>
    <div v-if="wybRasa === 'Drakon'">
      <p for="podrasa">Smoczy Rodowód:</p>
      <input
        type="radio"
        id="Biały"
        value="Biały"
        v-model="podrasa"
        @change="sprawdzPodRase"

      />Biały

      <input
        type="radio"
        id="Czarny"
        value="Czarny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Czarny
      <input
        type="radio"
        id="Czerwony"
        value="Czerwony"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Czerwony
      <input
        type="radio"
        id="Miedziany"
        value="Miedziany"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Miedziany
      <input
        type="radio"
        id="Mosieżny"
        value="Mosiężny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Mosiężny
      <input
        type="radio"
        id="Niebieski"
        value="Niebieski"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Niebieski
      <input
        type="radio"
        id="Spiżowy"
        value="Spiżowy"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Spiżowy
      <input
        type="radio"
        id="Srebrny"
        value="Srebrny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Srebrny
      <input
        type="radio"
        id="Zielony"
        value="Zielony"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Zielony
      <input
        type="radio"
        id="Złoty"
        value="Złoty"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Złoty
    </div>
        <!--Krasnolud-->

    <div v-if="wybRasa === 'Krasnolud'">
      <p for="podrasa">Podrasa:</p>
      <input
        type="radio"
        id="Krasnolud_Górski"
        value="Górski"
        v-model="podrasa"
        @change="sprawdzPodRase"

      />Krasnolud Górski

      <input
        type="radio"
        id="Krasnolud_Wzgórzowy"
        value="Wzgórzowy"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Krasnolud Wzgórzowy
    </div>

    <!--Gnom-->
    <div v-if="wybRasa === 'Gnom'">
      <p for="podrasa">Podrasa:</p>
      <input
        type="radio"
        id="Gnom_Skalny"
        value="Skalny"
        v-model="podrasa"
        @change="sprawdzPodRase"

      />Gnom Skalny

      <input
        type="radio"
        id="Gnom_Leśny"
        value="Leśny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Gnom Leśny
    </div>
    <select name="Klas" id="klas" v-model="Klasa">
      <option value="Wojownik">Wojownik</option>
      <option value="Mag">Mag</option>Wojownik
      <option value="Łotrzyk">Łotrzyk</option>
      <option value="Łowca">Łowca</option>
      <option value="Kleryk">Kleryk</option>
      <option value="Czarownik">Czarownik</option>
      <option value="Paladyn">Paladyn</option>
      <option value="Druid">Druid</option>
      <option value="Mnich">Mnich</option>
      <option value="Bard">Bard</option>
      <option value="Barbarzyńca">Barbarzyńca</option>
      <option value="Zaklinacz">Zaklinacz</option>
    </select>
    <p>Imie: {{ imie }}</p>
    <p>Rasa: {{ wybRasa }}</p>
    <p>Podrasa: {{ podrasa }}</p>
    <p>Klasa: {{ Klasa }}</p>

    <p>Punkty doświadczenia: {{ punkty }}</p>

    <p>
      Siła:
      <button @click="decreaseStat(stats.STR)">-</button>
      {{ obliczSumeCechOsobno().STR }}
      <button @click="increaseStat(stats.STR)">+</button>
    </p>
    <p>
      Kondycja:
      <button @click="decreaseStat(stats.KON)">-</button>
      {{ obliczSumeCechOsobno().KON }}
      <button @click="increaseStat(stats.KON)">+</button>
    </p>
    <p>
      Zreczność:
      <button @click="decreaseStat(stats.ZRE)">-</button>
      {{ obliczSumeCechOsobno().ZRE }}
      <button @click="increaseStat(stats.ZRE)">+</button>
    </p>
    <p>
      Mądrość:
      <button @click="decreaseStat(stats.MAD)">-</button>
      {{ obliczSumeCechOsobno().MAD }}
      <button @click="increaseStat(stats.MAD)">+</button>
    </p>
    <p>
      Inteligencja:
      <button @click="decreaseStat(stats.INTE)">-</button>
      {{ obliczSumeCechOsobno().INTE }}
      <button @click="increaseStat(stats.INTE)">+</button>
    </p>
    <p>
      Charyzma:
      <button @click="decreaseStat(stats.CHA)">-</button>
      {{ obliczSumeCechOsobno().CHA }}
      <button @click="increaseStat(stats.CHA)">+</button>
    </p>
     </div>
     
</template>
<style scoped>
@import "./styles.css";
</style>