Kolejność wprowadzania Sekcji 1.Cele lekcji 2.Metody I formy pracy 3.Środki
dydaktyczne 4.Odniesienie do podstawy programowej I Czas pracy 5.Komentarz
merytoryczny 6.Przebieg lekcji Do każdego działu rozkład materiału jako chapter
Info Slug Przyroda przykładowy slag do sekcji: Przyr-Kl4-D01-l1-s01-rm
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
const zdolnosci = ref([]);
const spell = ref([]);
const bieglosc = ref([]);

const magia = ref(false);

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
};
const komCzar = ref([8]);

const increaseStat = (stat) => {
  if (stat.value < PunktMAX.value && punkty.value > 0) {
    if (stat.value >= 13) {
      stat.value += 1;
      punkty.value -= 2;
    }
    if (stat.value < 13) {
      stat.value += 1;
      punkty.value -= 1;
    }
  }
};

const decreaseStat = (stat) => {
  if (stat.value > startStat.value) {
    if (stat.value < 14) {
      stat.value -= 1;
      punkty.value += 1;
    }
    if (stat.value >= 14) {
      stat.value -= 1;
      punkty.value += 2;
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
    sumy[statKey] =
      stats[statKey].value +
      rassStats[statKey].value +
      podRassStats[statKey].value;
  }
  return sumy;
};
const sprawdzRase = () => {
  podrasa.value = null;
  zerowanieRassSta();
  zerowaniePodRassSta();
  usunWszystkieZdolnosci();

  if (wybRasa.value === "Człowiek") {
    for (const statKey in stats) {
      podrasa.value = null;

      rassStats[statKey].value = 1;
    }
  } else if (wybRasa.value === "Elf") {
    rassStats.ZRE.value = 2;
    dodajZdolnosc("Widzenie w ciemności");
    dodajZdolnosc("Rodowód fey");
    dodajZdolnosc("Trans");
    dodajSpell("kula ognia");
  } else if (wybRasa.value === "Krasnolud") {
    rassStats.KON.value = 2;
    dodajZdolnosc("Widzenie w ciemności");
    dodajZdolnosc("Krasnoludzka odporność");
    dodajZdolnosc("Krasnoludzki trening bojowy.");
    dodajZdolnosc("Biegłość w używaniu narzędzi");
    dodajZdolnosc("Wiedza o Kamieniu");
  } else if (wybRasa.value === "Półelf") {
    rassStats.CHA.value = 1;
    dodajZdolnosc("Widzenie w ciemności");
    dodajZdolnosc("Rodowód fey");
    dodajZdolnosc("Wszechstronność");
  } else if (wybRasa.value === "Półork") {
    dodajZdolnosc("Widzenie w ciemności");
    dodajZdolnosc("Groźny");
    dodajZdolnosc("Wola życia");
    dodajZdolnosc("Brutalne ataki");

    rassStats.STR.value = 2;
    rassStats.KON.value = 1;
  } else if (wybRasa.value === "Niziołek") {
    rassStats.ZRE.value = 2;
    dodajZdolnosc("Szczęście");
    dodajZdolnosc("Odwaga");
    dodajZdolnosc("Zwinność niziołka");
  } else if (wybRasa.value === "Gnom") {
    rassStats.INTE.value = 2;
    dodajZdolnosc("Widzenie w ciemnośc");
    dodajZdolnosc("Gnomi spryt");
  } else if (wybRasa.value === "Diabelstwo") {
    dodajZdolnosc("Widzenie w ciemnośc");
    dodajZdolnosc("Piekielna odpotność");
    dodajZdolnosc("Diabelska spuścizna");
    rassStats.INTE.value = 1;
    rassStats.CHA.value = 2;
  } else if (wybRasa.value === "Drakon") {
    dodajZdolnosc("Smoczy rodowód");
    dodajZdolnosc("Zionięcie");
    dodajZdolnosc("Odporność na obrażenia");

    rassStats.STR.value = 2;
    rassStats.CHA.value = 1;
  }
};

//PODRASY, PODRASSY STATY
const sprawdzPodRase = () => {
  if (podrasa.value) {
    let ppodrasa = podrasa.value;
    zerowaniePodRassSta();
    usunWszystkieZdolnosci();
    sprawdzRase();
    podrasa.value = ppodrasa;
  }

  //Podrasy Elfów
  if (rasa.value === "Elf" && podrasa.value === "Leśny") {
    podRassStats.MAD.value += 1;
    dodajZdolnosc("Elfia szkoła walki");
    dodajZdolnosc("Maska dziczy");
  } else if (podrasa.value === "Wysoki") {
    podRassStats.INTE.value += 1;
    dodajZdolnosc("Elfia szkoła walki");
    dodajZdolnosc("Magiczna sztuczka");
  } else if (podrasa.value === "Drow") {
    podRassStats.CHA.value += 1;
    dodajZdolnosc("Wyjątkowe widzenie w ciemności");
    dodajZdolnosc("Wrażliwość na światło słoneczne");
    dodajZdolnosc("Magia drowów");
    dodajZdolnosc("Szkoła walki drowów");
  }
  //Podrasy Niziołków
  else if (podrasa.value === "Hardy") {
    podRassStats.KON.value += 1;
    dodajZdolnosc("Odporność na trucizny");
  } else if (podrasa.value === "Lekkostopy") {
    podRassStats.CHA.value += 1;
    dodajZdolnosc("Niezauważalny");
  }
  //Podrasy Krasnoludów
  else if (podrasa.value === "Wzgórzowy") {
    podRassStats.MAD.value += 1;
    dodajZdolnosc("Krasnoludzka wytrzymalość");
  } else if (podrasa.value === "Górski") {
    podRassStats.STR.value += 2;
    dodajZdolnosc("Krasnoludzki trening zbrojny");
  }
  //Podrasy Gnomów
  else if (rasa.value === "Gnom" && podrasa.value === "Leśny") {
    podRassStats.ZRE.value += 1;
    dodajZdolnosc("Urodzony iluzjonista");
    dodajZdolnosc("Mowa malych zwietząt");
  } else if (podrasa.value === "Skalny") {
    podRassStats.KON.value += 1;
    dodajZdolnosc("Mądrość wynalazcy");
    dodajZdolnosc("Majsterkowicz");
  }
};
const sprawdzKlase = () => {
  if (Klasa.value === "Mag") {
    magia.value = true;
  }
};

const dodajZdolnosc = (zdolnosc) => {
  zdolnosci.value.push(zdolnosc);
};
const dodajSpell = (spell) => {
  spell.value.push(spell);
};

const spellZdolnosc = (index) => {
  spell.value.splice(index, 1);
};
const usunWszystkieZdolnosci = () => {
  zdolnosci.value = []; // Czyszczenie tablicy zdolności
};
const liczModyfikator = () => {
  const sumy = {};
  for (const statKey in stats) {
    sumy[statKey] =
      (stats[statKey].value +
        rassStats[statKey].value +
        podRassStats[statKey].value -
        10) /
      2;
    for (const statKey in stats) {
      sumy[statKey] = Math.floor(sumy[statKey]);
    }
  }
  return sumy;
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
      @change="sprawdzRase"
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
      />Gnom Skalny zdolnosc
      <input
        type="radio"
        id="Gnom_Leśny"
        value="Leśny"
        v-model="podrasa"
        @change="sprawdzPodRase"
      />Gnom Leśny
    </div>
    <select name="Klas" id="klas" v-model="Klasa" @change="sprawdzKlase">
      <option value="Wojownik">Wojownik</option>
      <option value="Mag">Mag</option>
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
    <div class="kontener">
      <!-- Statystyki -->
      <div class="stats">
        <h2>Statystyki</h2>
        <div class="stat">
          <div class="stat-label">Siła:</div>
          <div class="stat-value">
            <button @click="decreaseStat(stats.STR)" class="stat-button-l">
              -
            </button>
            {{ obliczSumeCechOsobno().STR }}
            <button @click="increaseStat(stats.STR)" class="stat-button-p">
              +
            </button>
          </div>
        </div>
        <div class="stat">
          <span class="stat-label">Zręczność:</span>
          <div class="stat-value">
            <button @click="decreaseStat(stats.ZRE)" class="stat-button-l">
              -
            </button>
            {{ obliczSumeCechOsobno().ZRE }}

            <button @click="increaseStat(stats.ZRE)" class="stat-button-p">
              +
            </button>
          </div>
        </div>
        <div class="stat">
          <span class="stat-label">Kondycja:</span>
          <div class="stat-value">
            <button @click="decreaseStat(stats.KON)" class="stat-button-l">
              -
            </button>
            {{ obliczSumeCechOsobno().KON }}

            <button @click="increaseStat(stats.KON)" class="stat-button-p">
              +
            </button>
          </div>
        </div>

        <div class="stat">
          <span class="stat-label">Inteligencja:</span>
          <div class="stat-value">
            <button @click="decreaseStat(stats.INTE)" class="stat-button-l">
              -
            </button>
            {{ obliczSumeCechOsobno().INTE }}
            <button @click="increaseStat(stats.INTE)" class="stat-button-p">
              +
            </button>
          </div>
        </div>
        <div class="stat">
          <span class="stat-label">Mądrość:</span>
          <div class="stat-value">
            <button @click="decreaseStat(stats.MAD)" class="stat-button-l">
              -
            </button>
            {{ obliczSumeCechOsobno().MAD }}
            <button @click="increaseStat(stats.MAD)" class="stat-button-p">
              +
            </button>
          </div>
        </div>
        <div class="stat">
          <span class="stat-label">Charyzma:</span>
          <div class="stat-value">
            <button @click="decreaseStat(stats.CHA)" class="stat-button-l">
              -
            </button>
            {{ obliczSumeCechOsobno().CHA }}
            <button @click="increaseStat(stats.CHA)" class="stat-button-p">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="mod_stat">
        <h2>Modyfikatory</h2>
        <div class="mod">
          <div class="mod-value">
            {{ liczModyfikator().STR }}
          </div>
          <div class="mod-value">
            {{ liczModyfikator().ZRE }}
          </div>
          <div class="mod-value">
            {{ liczModyfikator().KON }}
          </div>
          <div class="mod-value">
            {{ liczModyfikator().INTE }}
          </div>
          <div class="mod-value">
            {{ liczModyfikator().MAD }}
          </div>
          <div class="mod-value">
            {{ liczModyfikator().CHA }}
          </div>
        </div>
      </div>
    </div>
    <div class="zdolności">
      <h2>Zdolności</h2>
      <ul>
        <li v-for="(zdolnosc, index) in zdolnosci" :key="index">
          {{ zdolnosc }}
        </li>
      </ul>
    </div>
    <div class="biegłości">
      <h2>Biegłości</h2>
      <ul>
        <li v-for="(bieglosc, index) in bieglosc" :key="index">
          {{ bieglosc }}
        </li>
      </ul>
    </div>

    <div class="zaklecia" v-if="magia === true">
      <table>
        <thead>
          <tr>
            <th>Poziom</th>
            <th>Komórka czaru</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>1</td>
          </tr>
          <tr>
            <th>2</th>
            <td>0</td>
          </tr>
          <tr>
            <th>3</th>
            <td>0</td>
          </tr>
          <tr>
            <th>4</th>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="spell">
      <h2>Spell list</h2>
      <ul>
        <li v-for="(spell, index) in spell" :key="index">
          {{ spell }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@import "./styles.css";
</style>
