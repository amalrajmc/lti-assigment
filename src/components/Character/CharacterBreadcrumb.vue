<template>
<nav  aria-label="breadcrumbs" class="breadcrumb" >
          <ul>
            <li>
              <router-link to="/" class="link">
                <span class="icon is-small"
                  ><img
                    src="https://img.icons8.com/android/24/000000/home.png" /></span
                ><span class="is-size-5">Simpsons</span>
              </router-link>
            </li>
            <li >
              <div class="link">
                <span class="icon is-small"
                  ><img
                    src="https://img.icons8.com/metro/26/000000/create-new.png" /></span
                ><span class="is-size-5" v-if="char"> {{ char.fullName }}</span>
              </div>
            </li>
          </ul>
        </nav>
</template>
<script>
export default{
  props:['char']
}
</script>
<style scoped lang="scss">
a.link,div.link {
    color:#2c3e50;
    display:flex;
    align-items: baseline;
    &.active,&:hover,&:focus{
        color:#2c3e50;
    }
    span.icon {
        margin-right:3px;
    }
}
</style>