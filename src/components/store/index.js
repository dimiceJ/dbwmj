import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    headerFlag:true,
    tabFlag:true,
    searchFlag:true,
    footerFlag:true
}

const actions = {
    showTab({commit}) {
        commit('showTab')
    },
    hideTab({commit}) {
        commit('hideTab')
    },
    showFooter({commit}) {
        commit('showFooter')
    },
        hideFooter({commit}) {
        commit('hideFooter')
    },
    showSearch({commit}) {
        commit('showSearch')
    },
    hideSearch({commit}) {
        commit('hideSearch')
    },
    showHeader({commit}){
        commit('showHeader')
    },
    hideHeader({commit}) {
        commit('hideHeader')
    },

}

const mutations = {
    showHeader(state){
        state.headerFlag = true
    },
    hideHeader(state) {
        state.headerFlag = false
    },
    showTab(state) {
        state.tabFlag = true
    },
    hideTab(state) {
        state.tabFlag = false
    },
    showFooter(state) {
        state.footerFlag = true
    },
    hideFooter(state) {
        state.footerFlag = false
    },
    showSearch(state) {
        state.searchFlag = true
    },
    hideSearch(state) {
         state.searchFlag = false
    }
}
const getters = {
    headerFlag(state) {
        return state.headerFlag
    },
    tabFlag(state) {
        return state.tabFlag
    },
    footerFlag(state) {
        return state.footerFlag
    },
    searchFlag(state) {
        return state.searchFlag
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})