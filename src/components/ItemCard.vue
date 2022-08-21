<template>
<div>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3 ">
      <img :src="item.picture" alt="Placeholder image " class="object-fit-contain">
    </figure>
  </div>
  <div class="card-content has-text-left">
    <p  class="is-size-4 mt-0">{{item.fullName}}</p>
    <div class="is-flex is-justify-content-space-between is-align-content-center">
<p  class="is-size-6 mt-1 mb-1">Age: {{item.age}}</p>
 <router-link class="goto-link mt-1 mb-1" :to="'phrases/'+item._id"><button class="button goto-button">&#10149;</button></router-link>
    </div>
      
     
    </div>
    </div>

</div>
</template>
<script>
export default {
    props:['item']
}
</script>
<style scoped lang="scss">
figure {
img.object-fit-contain {
    object-fit:contain;
}}
.card {
    background-color:transparent;
    box-shadow:none;
}
.goto-link {
    height:25px;
    width:25px
}
.goto-button,.goto-button:focus,.goto-button:hover {
        background-color: #ffdd57;
        border:none;
        border-radius:50%;
    height:25px;
    width:25px;
    padding:2px 4px;
        font-size: small;
        color:#4a4a4a;
}
</style>