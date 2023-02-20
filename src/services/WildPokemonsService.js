import { AppState } from "../AppState.js"
import { WildPokemon } from "../models/WildPokemon.js"
import { logger } from "../utils/Logger.js"
import { pokeAPI, api } from "./AxiosService.js"


class WildPokemonsService{


  // NOTE if we do not save the next and previous page in our initial get, we won't be able to access it by calling to 'api' and it won't register that there is an immediate next page (if you just use the pokeAPI you have to double click next to get it to switch, and the :disable will not work correctly)
  async getAllPokemon(){
    const res = await pokeAPI.get('')
    logger.log('[GETTING ALL POKEMON]', res.data)
    AppState.wildPokemons = res.data.results
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
    // logger.log('[WILD POKEMON IN THE APPSTATE]', AppState.wildPokemons)
  }

  // NOTE in both functions below we can just all to the regular API because the data is already stored in our AppState

  async setActivePokemon(url){
    const res = await api.get(url)
    // logger.log('[SETTING ACTIVE POKEMON]', res.data)
    AppState.activePokemon = new WildPokemon(res.data)
  }

  async changePage(url){
    const res = await api.get(url)
    // logger.log('[CHANGING PAGE]', res.data)
    AppState.wildPokemons = res.data.results
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }

}


export const wildPokemonsService = new WildPokemonsService()