import _ from 'lodash'
import { Commit, GetterTree, ActionTree } from "vuex";
import { Can } from '~/utils/candies';
import { Chains } from '~/utils/metamask';
interface State {
  processingCan: Can;
}

export const state = () => {
  return {
    processingCan: {} as Can,
  }
}

export const mutations = {
  setCan(state: State, candy: Can) {
    state.processingCan = candy
  },
}

export const getters: GetterTree<State, any> = {
  currentCan: (state: State) => {
    return state.processingCan;
  },
}
