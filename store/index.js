import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import shorpcartModule from './shorpcartModule/shorpcartModule'
import ecom from '../utils/ecom.js'

export default new Vuex.Store({
	namespaced: true,
	state: {
		listGoods:[]
	},
	getters: {
		getListGoods(state){
			return state.listGoods
		}
	},
	mutations: {},
	actions: {},
	modules: {
		shorpcart: shorpcartModule
	}
})