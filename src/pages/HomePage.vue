<template>
  <div class="row m-3 justify-content-between">

    <!-- SECTION LEFT SIDE POKE-API POKEMON LIST -->
    <div class="col-md-3 text-center">
      <div>
        <button class="btn btn-outline-dark m-1" :disabled="!previousPage" @click="changePage(previousPage)">Previous</button>
        <button class="btn btn-outline-dark m-1" :disabled="!nextPage" @click="changePage(nextPage)">Next</button>
      </div>

      <div class="p-2" v-for="p in wildPokemon" :key="p.name">
        <button class="btn btn-danger w-75" @click="setActivePokemon(p.url)">{{p.name}}</button>
      </div>
    </div>
  
    <!-- SECTION ACTIVE POKEMON -->
    <div class="col-md-7">
      <div class="row justify-content-center mt-5">
        <div class="col-md-9" v-if="activePokemon">
          <img class="pokemonImg" :src="activePokemon.img" alt="">
          <h1><b>{{activePokemon.name}}</b></h1>
          <p>Height: {{activePokemon.height}} | Weight: {{activePokemon.weight}}</p>
        </div>
      </div>
    </div>
  
    <!-- TODO hook up Sandbox stuff -->
    <!-- SECTION SANDBOX POKEMON -->
    <!-- <div class="col-md-3 text-center p-2">
      <button class="btn btn-primary w-75">Caught Pokemon</button>
    </div> -->

  </div>
</template>

<script>
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { wildPokemonsService } from '../services/WildPokemonsService.js';
import Pop from '../utils/Pop.js';
import { computed } from '@vue/reactivity';

export default {
  setup() {
    async function getAllPokemon(){
      try {
        await wildPokemonsService.getAllPokemon()
      } catch (error) {
        console.error(error)
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }
    }


    onMounted(() => {
      getAllPokemon()
    })


    return {
      wildPokemon: computed(() => AppState.wildPokemons),
      activePokemon: computed(() => AppState.activePokemon),

      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),

      async setActivePokemon(url){
        try {
          await wildPokemonsService.setActivePokemon(url)
        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      },

      async changePage(url){
        try {
          await wildPokemonsService.changePage(url)
        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      }
    }
  }

  
}
</script>

<style scoped lang="scss">
.pokemonImg{
  max-width: 20em;
  max-height: 20em;
}
</style>
