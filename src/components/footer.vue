<template>
    <div class="foot-btn">
        <ul>
            <router-link class="home" to="/hotshow" tag='li' active-class="active">
                <a href="javascript:;">
                    <!-- <i class="icon-faxian">fdf</i> -->
                    <i class="icon-dianyingyuan"></i>
                    电影
                </a>
            </router-link>
            <router-link class="cinema" to='/follow' tag='li' active-class="active">
                <a href="javascript:;">
                <i class="icon-yingyuan"></i>
                    影院
                </a>
            </router-link>
            <router-link class="found" to="/user-info" tag='li' active-class="active">
                <a href="javascript:;">
                    <i class="icon-faxian"></i>
                    发现
                </a>
            </router-link>
            <router-link class="my" to="/my" tag='li' active-class="active">
                <a href="javascript:;">
<i class="icon-wode"></i>
                    我的
                </a>
            </router-link>
        </ul>
    </div>
</template>
<style scoped>
    @import url(../assets/font/footerNav/iconfont.css);
    i{
        font-family:'iconfont';
    }
    .foot-btn{
        width:100%;
        height:4.5rem;
        background:#fff;
        position:fixed;
        left:0; bottom:0;
        border-top:1px solid #9e9a95;
    }
    .foot-btn ul li{
        float:left;
    }
    .foot-btn ul{
        height:4.5rem;
        display:flex;
        justify-content:space-around;
        align-items:center;/*垂直居中*/
        background-color: #F6F6F6
    }
    .foot-btn ul a {
        display: flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;/*垂直居中*/
    }
    .foot-btn ul i{
        font-size:2rem;
    }
    .active a {
        color:red;
    }

 /*                .foot-btn ul{width:4.08rem; margin:0 auto;}
 .foot-btn ul li{ float:left;}
 .foot-btn ul li a{ display:block; width:100%;height:100%;}
 .foot-btn ul .home{width:2rem;height:2rem; background:url(../assets/img/my1.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
 .foot-btn ul .write{width:2rem;height:2rem; background:url(../assets/img/write.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
 .foot-btn ul .my{width:2rem;height:2rem; background:url(../assets/img/home1.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;} */
</style>