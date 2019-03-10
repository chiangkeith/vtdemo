<template>
  <div class="home">
    <FilterBar />
    <List />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import FilterBar from '../components/FilterBar.vue'
import List from '../components/List.vue'
const fetchList = store => store.dispatch('FETCH_LIST', {})
export default {
  name: 'home',
  components: {
    FilterBar,
    List
  },
  beforeMount () {
    fetchList(this.$store)
  }
}
</script>
