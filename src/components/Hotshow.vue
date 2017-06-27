<template>
    <div id="hotshow">
    <div class="page-swipe">
      <mt-swipe :auto="5000" :showIndicators="false" :speed="600">
          <mt-swipe-item>
              <img class="banner-img" src="../assets/img/banner1.jpg" >
          </mt-swipe-item>
          <mt-swipe-item>
              <img class="banner-img" src="../assets/img/banner2.jpg" >

          </mt-swipe-item>
          <mt-swipe-item>
              <img class="banner-img" src="../assets/img/banner3.jpg" >
          </mt-swipe-item>
      </mt-swipe>
    </div>
      <div class="show-list" v-if="!loadingFlag">
        <ul>
         <li class="list-data" v-for="(item,index) in dataList" >
            <div class="img-wrapper">
                <img :src="item.images.small" alt="">
            </div>
            <div class="data-content">
                <div class="movie-name">{{item.title}}</div>
                <div class="rating-show" v-if="item.rating.average > 0">
                    <div class="rating">
                        <span class="person">观众 : <span class="star">{{item.rating.average}}</span></span>
                    </div>
                    <Star :score="item.rating.average"></Star>
                </div>
                <div class="rating-hidden" v-else>
                    暂未上映
                </div>
                <div class="director">
                    导演:{{item.directors[0].name}}
                </div>

                <p class="actor" v-if="item.casts[0]!=null">
                  主演:{{item.casts[0].name}}
                  <span v-if="item.casts[1]">, {{ item.casts[1].name }}</span>
                  <span v-if="item.casts[2]">, {{ item.casts[2].name }}</span>
              </p>
              <p>
                类型:
                <span v-for="item in item.genres">
                <span  class="move-type">{{item}}</span>
                </span>
            </p>
        </div>
        <div class="button" @click="moviemsg(item.id)">详 情</div>
    </li>

</ul>
</div>
<Loading v-if="loadingFlag"></Loading>
</div>
</template>

<script>
    import Star from './star/star.vue'
    import Loading from './loading/loading.vue'
    export default {
        data() {
            return{
                dataList:[],
                loadingFlag:true
            }
        },
        mounted() {
            this.fetchData()
        },
        methods: {
          fetchData() {
            var that = this;
            var newList = [];
            var trueList = [];
            this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
            .then(function (res) {
                 that.loadingFlag = false
                 that.dataList = res.data.subjects.sort(that.compare('rating','average')).reverse()
                 console.log(that.dataList);
             })
            .catch(function (res) {
              console.log(res)
          })


        },
        compare(p1,p2) {
            return function(a,b){
                var value1 = a[p1][p2];
                var value2 = b[p1][p2];
                return value1 - value2;
            }
        },
        moviemsg(str){
            const path = '/movie/' + str
            this.$router.push({path:path})
        }
    },
    components:{
        Star,
        Loading
    }
};
</script>

<style type="text/css">
    .page-swipe .mint-swipe {
        height: 8rem;
        color: #fff;
        text-align: center;
    }
    .banner-img{
        width:100%;
        height:100%;
    }
    .list-data{
        height:12rem;
        /* background-color: red; */
        margin:1rem 1.5rem ;
        display:flex;
        border-top: 0.1rem solid #ccc;
        /* border-bottom: 0.1rem solid #ccc; */
        padding-top:2.5rem;
        position:relative;
        z-index:0;
    }

    .list-data:first-child {
        border-top:none;
    }
    .page-swipe {
        z-index:-1;
    }
    .img-wrapper{

    }
    .data-content{
        margin-left: 1rem;
        display:flex;
        flex-direction:column;
    }
    .movie-name{
        font-weight: 600;
        font-size:1.3rem;
    }
    .move-type{
        margin-right: 1rem;
    }
    .person{
        font-size:1.2rem;
        color: #ccc
    }
    .star{
        color: #FCCB61;
        font-size:1.6rem;
    }
    .button{
        position:absolute;
        padding:0.4rem 0.6rem;
        color:red;
        border:0.1rem solid red;
        top:4.6rem;
        right:1rem;
        border-radius:0.4rem;
        z-index:999;
    }
    .show-list{
        margin-bottom:4.5rem;
    }
</style>