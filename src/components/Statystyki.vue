<template>  <p>Punkty doświadczenia: {{ punkty }}</p>
    <div class="kontener">
      <!-- Statystyki -->
      <div class="stats">
        <h2>Statystyki</h2>
        <div class="stat">
          <div class="stat-label">Siła:</div>
          <div class="stat-value">
            <button @click="decreaseStat('STR')" class="stat-button-l">
              -
            </button>
            <div class="liczMod">{{ obliczSumeCechOsobno().STR }}</div>
            <button @click="increaseStat('STR')" class="stat-button-p">
              +
            </button>
          </div>
        </div>
        <div class="stat">
          <span class="stat-label">Zręczność:</span>
          <div class="stat-value">
            <button @click="decreaseStat('ZRE')" class="stat-button-l">
              -
            </button>
            <div class="liczMod">{{ obliczSumeCechOsobno().ZRE }}</div>

            <button @click="increaseStat('ZRE')" class="stat-button-p">
              +
            </button>
          </div>
        </div>
        <div class="stat">
          <span class="stat-label">Kondycja:</span>
          <div class="stat-value">
            <button @click="decreaseStat('KON')" class="stat-button-l">
              -
            </button>
            <div class="liczMod">{{ obliczSumeCechOsobno().KON }}</div>

            <button @click="increaseStat('KON')" class="stat-button-p">
              +
            </button>
          </div>
        </div>

        <div class="stat">
          <span class="stat-label">Inteligencja:</span>
          <div class="stat-value">
            <button @click="decreaseStat('INTE')" class="stat-button-l">
              -
            </button>
            <div class="liczMod">{{ obliczSumeCechOsobno().INTE }}</div>
            <button @click="increaseStat('INTE')" class="stat-button-p">
              +
            </button>
          </div>
        </div>
        <div class="stat">
          <span class="stat-label">Mądrość:</span>
          <div class="stat-value">
            <button @click="decreaseStat('MAD')" class="stat-button-l">
              -
            </button>
            <div class="liczMod">{{ obliczSumeCechOsobno().MAD }}</div>
            <button @click="increaseStat('MAD')" class="stat-button-p">
              +
            </button>
          </div>
        </div>
        <div class="stat">
          <span class="stat-label">Charyzma:</span>
          <div class="stat-value">
            <button @click="decreaseStat('CHA')" class="stat-button-l">
              -
            </button>
            <div class="liczMod">{{ obliczSumeCechOsobno().CHA }}</div>
            <button @click="increaseStat('CHA')" class="stat-button-p">
              +
            </button>
          </div>
        </div>
      </div>
      </div>
</template>
<script>
export default {
  data() {
    return {
      stats: {
        STR: 8,
        ZRE: 8,
        KON: 8,
        INTE: 8,
        MAD: 8,
        CHA: 8,
      },
      punkty : 27,
    };
  },
  methods: {
    decreaseStat(statName) {
      if(this.stats[statName]>13){
        this.stats[statName] --;
        this.punkty +=2;
      }
      else if (this.stats[statName] > 8 ) {
        this.stats[statName] -= 1;
        this.punkty++;
      }
    },
    increaseStat(statName) {
      if (this.stats[statName] <13 && this.punkty>0) { // Przykładowy maksymalny poziom
        this.stats[statName] += 1;
        this.punkty--;
      }
      else if(this.stats[statName] >= 13 && this.stats[statName] < 15 && this.punkty>1){
      this.stats[statName]+=1;
    this.punkty -=2;
      }
    },
    obliczSumeCechOsobno() {
      // Oblicz sumy cech osobno, np. sumę Kondycji, Inteligencji itp.
      const sumy = {};
      for (const statName in this.stats) {
        sumy[statName] = this.stats[statName];
      }
      return sumy;
    },
  },
};
</script>