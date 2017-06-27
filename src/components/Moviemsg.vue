<template>
  <div id="movie">
    <div class="movie-msg" v-if="loadingFlag == false">
      <div class="header">
        <div class="info-warpper">
          <div class="header-icon">
            <i class="icon-llmainpageback back-btn" @click="back"></i>
            <i class="icon-fenxiang"></i>
          </div>
          <div class="header-content">
            <img :src="movieMsg.images.medium">
            <div class="movie-info">
              <div class="color-fff">
                <p class="Chinese-name">{{movieMsg.title}}</p>
                <p class="English-name">{{movieMsg.aka[movieMsg.aka.length-1]}}</p>
                <p class="rating-tag">观众评分</p>
              </div>
              <p class="rating">
                <span class="rating-num">{{movieMsg.rating.average}} </span>
                <span class="rating-count">({{movieMsg.ratings_count|numFormat }}人评)</span>
              </p>
              <p class="type">
                {{movieMsg.genres.join(', ')}}
              </p>
              <p class="country">
                <span>{{movieMsg.countries[0]}} /</span>
                <span v-for="item in movieMsg.durations" v-if="item.indexOf('中国')>0">{{item | timeFormat}}</span>
              </p>
              <p class="start-time" v-for="item in movieMsg.pubdates" v-if="item.indexOf('中国')>0">{{item}}</p>
            </div>
          </div>
          <div class="choose">
            <div class="btn" @click="colorRed($event)" id="1">
              <i class="icon-xingxing color-c3">想看</i>
            </div>
            <div class="btn" @click="colorRed($event)" id="2">
              <i class="icon-xiangkan color-c3"> 看过</i>
            </div>
          </div>
        </div>
        <div class="header-bgc" :style="{backgroundImage:'url('+movieMsg.images.medium+')'}">
        </div>
      </div>
      <div>
        <div class="introduce" :class=" {'show-more':!look , 'hide-more': look} ">
          {{movieMsg.summary}}
        </div>
        <div class="introduce-down" @click="showIntro">
          <i class="icon-xiao74" :class="{ 'icon-shangla': look, 'icon-xiala': !look }"></i>
        </div>
      </div>
      <!-- 演职人员 -->
      <div class="person-warpper">
        <div class="direct-left">
          <p>导演</p>
          <ul class="direct-arr">
              <li class="direct-li" v-for="item of movieMsg.directors">
                <img :src="item.avatars.small">
                <p class="direct-name">{{item.name}}</p>
              </li>
          </ul>
        </div>
        <div class="actor-right">
          <p>演员</p>
          <ul class="actor-arr">
            <li class="actor-li" v-for="item of movieMsg.casts">
              <img :src="item.avatars.small">
              <p class="actor-name">{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Loading v-if="loadingFlag"> </Loading>
  </div>
</template>

<script>
  import Loading from './loading/loading.vue'

  export default {
    data() {
      return {
        loadingFlag: true,
        movieMsg: {},
        look: false,
      }
    },
    components: {
      Loading
    },
    mounted() {
      this.fetchData()
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      fetchData() {
        var that = this
        var _id = 'https://api.douban.com/v2/movie/subject/' + this.$route.params.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd'
        this.$http.jsonp(_id)
        .then(function(res) {
          that.loadingFlag = false
          console.log(res);
          that.movieMsg = res.body;
          console.log(that.movieMsg);
          console.log(that.movieMsg.alt);
        }).catch(function(res) {
          console.log(res);
        })
      },
      colorRed($event) {
        var _el = event.currentTarget.firstChild
        if (_el.style.color == 'red') {
          _el.style.color = '#c3c3c3'
        } else {
          _el.style.color = 'red'
        }
      },
      showIntro() {
        this.look = !this.look
      }
    },
    filters: {
      timeFormat(value) {
        return value.split('(')[0]
      }
    }
  }
</script>

<style scoped>
  @import url(../assets/font/moviemsg/iconfont.css);

  #movie {
    background-color: #F0F0F0;
    height: 100%
  }
  i {
    font-family: 'iconfont';
  }

  .header {
    position: relative;
    overflow: hidden;
  }

  .info-warpper {
    z-index: 999;
    position: relative;
    padding: 1rem 1rem 0 1rem;
    background-color: rgba(159, 159, 159, .8);
    padding-bottom: 0.8rem;
  }

  .header-bgc {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(.6rem);
    filter: blur(.6rem);
    background-size: 100%;
    background-position: 50% 50%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  .back-btn {
    font-size: 1.6rem;
  }

  .header-bgc {
    filter: blur(5px);
  }

  .header-icon {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .header-icon i {
    font-weight: bold;
    font-size: 1.8rem;
    color: #eee;
  }

  .color-fff {
    color: #eee;
  }

  .Chinese-name {
    font-size: 1.4rem;
  }

  .English-name,
  .rating-tag {
    font-size: 0.5rem;
  }

  .header-content {
    display: flex;
    line-height: 2rem;
  }

  .movie-info {
    margin-left: 1.5rem;
  }

  .rating-num {
    /* color:#cecece; */
    color: #F2E260;
    font-size: 1.4rem;
  }

  .rating-count {
    color: #cecece;
    font-size: 0.5rem;
  }

  .type {
    color: #cecece;
    font-size: 1.1rem;
  }

  .country,
  .start-time {
    color: #ccc;
    font-size: 1.1rem;
  }

  .icon-xingxing,
  .icon-xiangkan {
    font-size: 1.5rem;
  }

  .color-c3 {
    color: #c3c3c3;
  }

  .color-red {
    color: red;
  }

  .introduce {
    padding: 1rem 1rem 0 1rem;
    background-color: #fff;
    line-height: 1.8rem;
    font-size: 1.3rem;
    transition: all 1s;
  }

  .hide-more {
    height: auto;
  }

  .show-more {
    height: 5rem;
    overflow: hidden;
  }


  .introduce-down {
    text-align: center;
    line-height: 1.8rem;
    padding: 0.5rem 0;
    font-size: 1.6rem;
    background-color: #fff
  }

  .choose {
    display: flex;
    justify-content: space-between;
    margin-top: 1.1rem;
  }

  .choose .btn {
    flex-grow: 1;
    text-align: center;
    background-color: #e4e4e4;
    padding: 0.3rem 1rem;
    border: 0.1rem solid #e4e4e4;
    border-radius: 0.4rem;
  }

  .choose .btn:nth-of-type(1) {
    margin-right: 0.2rem;
  }

  .choose .btn:nth-of-type(2) {
    margin-left: 0.2rem;
  }
  .person-warpper{
    background-color: #fff;
    margin-top:1.1rem;
    padding:1rem 0;
    display:flex;
    overflow-x:scroll;
  }
.direct-arr,.actor-arr{
  display:flex;
}
.direct-name,.actor-name{
  width:6rem;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
  text-align:center;
  margin:0 auto;
}
.direct-left{
  margin-left:1rem;
}
.actor-right{
  padding-right:1rem;
  margin-left:1rem;
}
.direct-li + .direct-li ,.actor-li + .actor-li {
  margin-left:0.5rem;
}
</style>
