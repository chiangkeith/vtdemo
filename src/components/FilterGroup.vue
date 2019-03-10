<template>
  <div class="filter-group">
    <div class="title"><span v-text="$t(get(group, 'name','').toUpperCase())"></span></div>
    <div class="items" v-show="get(group, 'items.length')">
      <div class="item" v-for="item in get(group, 'items', [])"
        :class="{ active: item === activeItem }"
        :key="`${get(group, 'name')}-${item}`"
        @click="changeFilter(item)">
        <span v-text="$t(item.toUpperCase())"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from 'lodash'
const setSortBy = (store, type, value) => store.dispatch('SET_VALUE_FOR_FILTER', { type, value })
export default {
  name: 'FilterGroup',
  data () {
    return {
      activeItem: ''
    }
  },
  methods: {
    changeFilter (item) {
      this.activeItem = item
      setSortBy(this.$store, get(this.group, 'name', ''), this.activeItem)
    },
    get
  },
  mounted () {
    this.activeItem = get(this.group, 'items.0')
  },
  props: {
    group: {}
  }
}
</script>
<style lang="stylus">
.filter-group
  margin 8px 0
  &:not(:last-child)
    margin-right 48px
  display flex
  .title
    display flex
    justify-content center
    align-items flex-start
    min-width 40px
    padding 2px
  .items
    margin-left 24px
    text-align left
    .item
      display inline-block
      padding 4px 8px
      font-family NotoSansCJKtc-Regular
      font-size 12px
      color #787878
      letter-spacing 0
      line-height 16px
      cursor pointer
      transition background-color 0.5s, color 0.5s
      &.active
        color #fff
        background-color #4283E4
        border-radius 4px
      &:not(:last-child)
        margin-right 8px
  @media (min-width 500px)
    .filter-group
      .title
        align-items center
</style>
