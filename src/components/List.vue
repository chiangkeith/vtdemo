<template>
  <div class="list">
    <div class="list__container">
      <template v-if="list.length > 0">
        <ListItem v-for="(item, index) in list"
          :item="item"
          :index="index"
          :key="get(item, 'id')" />
      </template>
      <div class="no-found"><span v-text="$t('NOT_FOUND')"></span></div>
    </div>
  </div>
</template>
<script>
import ListItem from './ListItem.vue'
import { get } from 'lodash'
export default {
  name: 'List',
  components: {
    ListItem
  },
  computed: {
    list () {
      return get(this.$store, 'getters.filteredList', [])
    }
  },
  data () {
    return {}
  },
  methods: {
    get
  },
  mounted () {}
}
</script>
<style lang="stylus">
.list
  margin-top 30px
  width 100%
  &__container
    display grid
    flex-wrap wrap
    justify-content space-around
    grid-template-columns repeat(auto-fit, 240px)
    grid-gap 20px
    max-width 1150px
    width 100%
    margin 0 auto
</style>
