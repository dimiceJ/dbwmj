<template>
<div id="search-title">
  <div class="searchbtn">
    {{searchmsg}}
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  props: ['searchmsg'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#search-title {
  background-color: #df2d2d;
  /* height:3rem; */
  margin-top: 40px !important;
  padding: 1rem;
}

.searchbtn {
  border-radius: 1rem;
  background-color: #fff !important;
  margin: 0 3rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  color: #ccc;
  /* margin-top:2rem !important; */
}
</style>
