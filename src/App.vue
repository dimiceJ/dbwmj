<template>
  <div id="app">
    <title-header v-if="headerFlag" :tabFlag='tabFlag' :searchFlag='searchFlag'></title-header>
    <keep-alive>
      <router-view class="router-view"></router-view>
    </keep-alive>
    <footer-nav v-if="footerFlag"></footer-nav>
  </div>

</template>

<script>
 import titleHeader from './components/Header.vue'
 import footerNav from './components/footer.vue'
 import {mapGetters,mapActions} from 'vuex'
 export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed:mapGetters([
    'headerFlag',
    'tabFlag',
    'searchFlag',
    'footerFlag'
]),
  components:{
    titleHeader,
    footerNav
  },
  mounted(){
    var path = this.$route.path.substring(1);
    this.tabChange(path);
    this.footerChange(path);
    this.searchChange(path);
    this.headerChange(path)
},
methods:{
  tabChange(path){
    if( path == 'hotshow') {
      this.$store.dispatch('showTab')
    }
  },
    searchChange(path){
      if( path == 'hotshow') {
         this.$store.dispatch('showFooter')
      }
    },
    footerChange(path){
      if( path == 'hotshow') {
        this.$store.dispatch('showSearch')
      }else if( path.indexOf('movie') != -1 ){
      this.$store.dispatch('hideFooter')
    }
    },
    headerChange(path) {
      if( path == 'hotshow' ) {
        this.$store.dispatch('showHeader')
      }else if( path.indexOf('movie') != -1 ){
        this.$store.dispatch('hideHeader')
      }

    }
  },
  watch:{
    $route(to) {
        var path=to.path.substring(1);
        this.tabChange(path);
        this.footerChange(path);
        this.searchChange(path);
        this.headerChange(path)
    }
  }
}
</script>

<style >

</style>
