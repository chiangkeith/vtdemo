<template>
  <div class="filter">
    <FilterGroup v-for="g in FILTER_GROUPS" :group="g" :key="get(g, 'name')" />
  </div>
</template>
<script>
import FilterGroup from './FilterGroup.vue'
import { FILTER_GROUPS } from '../constants'
import { get } from 'lodash'
export default {
  name: 'FilterBar',
  components: {
    FilterGroup
  },
  data () {
    return {
      FILTER_GROUPS
    }
  },
  methods: {
    get
  }
}
</script>
<style lang="stylus">
.filter
  display flex
  flex-wrap wrap
  border-bottom 1px solid #D8D8D8
  padding 8px 20px
  font-family NotoSansCJKtc-Medium
  font-size 14px
  color #787878
  letter-spacing 0
  line-height 21px
  max-width 1150px
  margin 0 auto
</style>
