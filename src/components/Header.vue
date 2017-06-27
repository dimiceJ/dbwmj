<template>

  <div id="title-header" >
    <div class="mint-header">
      <div>
        <div class="header-add">
          武汉
          <i class="iconfont header-down">&#xe624;</i>
        </div>
      </div>
      <div class="nav-bar">
        <ul v-if="tabFlag">
          <router-link to="/hotshow" tag="li" active-class="active">
            <a href="javascript:;">热映</a>
          </router-link><router-link to="/awaits" tag="li" active-class="active">
          <a href="javascript:;">待映</a>
        </router-link><router-link to="/search" tag="li" active-class="active">
        <a href="javascript:;">找片</a>
      </router-link>
    </ul>
        <span v-else>{{titleTag}}</span>
  </div>
</div>
<Searchtitle :searchmsg="search" v-if="searchFlag"></Searchtitle>
</div>
</template>


<script>
  import Searchtitle from './Searchtitle.vue'
  export default{
    props:['searchFlag','tabFlag','titleTag'],
    data() {
      return {
        search:'找影视剧、影人、影院',
/*        searchFlag:true,
        tabFlag:true,*/

      }
    },
    components:{
      Searchtitle
    }
  }
</script>

<style  scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 326891 */
    src: url('//at.alicdn.com/t/font_1kvhs9kvbpflmcxr.eot');
    src: url('//at.alicdn.com/t/font_1kvhs9kvbpflmcxr.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1kvhs9kvbpflmcxr.woff') format('woff'),
    url('//at.alicdn.com/t/font_1kvhs9kvbpflmcxr.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1kvhs9kvbpflmcxr.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .title{
    font-size:1.7rem
  }
  .header-down{
    font-size: 1.2rem
  }
  .header-search{
    font-size: 2rem
  }
  .mint-header.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }
  .mint-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #df2d2d;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 41px;
    line-height: 1;
    padding: 0 10px;
     position: fixed;
    z-index:99999999999;
    left: 0;
    top: 0;
    text-align: center;
    white-space: nowrap;
    width:100%;
  }
  .header-add{
    text-align:left;
    position:absolute;
    top: 1.3rem;
    left:0.6rem;
    z-index:9;
  }
  .nav-bar{
    margin:0 auto;
  }
  .nav-bar a{
    color:#fff !important;
  }

  .nav-bar li{
    background-color: #932121;
    margin:0;
    padding:0.3rem 1rem;
    float:left;
    font-size:1.1rem;
    height:1.6rem;
    line-height:1.6rem;
  }
  .active{
    border-radius:0.4rem;
    background-color: #fff !important;
  }
  .active a{
    color:red !important;
  }
</style>