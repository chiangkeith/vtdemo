<template>
  <div class="list-item">
    <div class="list-item__leading">
      <img :src="get(item, 'thumbnail')" />
      <div class="duration"><span v-text="duration"></span></div>
    </div>
    <div class="list-item__wrapper">
      <div class="list-item__title"><span v-text="title"></span></div>
      <div class="list-item__info">
        <div class="count"><span v-text="get(item, 'collectCount')"></span></div>
        <div class="tags">
          <div class="caption" v-for="c in get(item, 'captions', [])" :key="c"><span v-text="$t(`CC.${c.toUpperCase()}`)"></span></div>
          <div class="level"><span v-text="$t(`LEVEL.${get(item, 'level', 1)}`)"></span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import truncate from 'truncate-html'
import { get, padStart, toInteger } from 'lodash'
export default {
  name: 'ListItem',
  computed: {
    duration () {
      const hour = toInteger(get(this.item, 'duration') / 60 / 60)
      const min = padStart(toInteger(get(this.item, 'duration') / 60) % 60, 2, '0')
      const sec = padStart(get(this.item, 'duration') % 60, 2, '0')
      return hour ? `${hour}:${min}:${sec}` : `${min}:${sec}`
    },
    title () {
      return truncate(get(this.item, 'title'), 40)
    }
  },
  data () {
    return {
      isHead: false
    }
  },
  methods: {
    get
  },
  props: {
    item: {},
    index: {
      default: 0
    }
  }
}
</script>
<style lang="stylus">
.list-item
  width 240px
  min-width 240px
  border-radius 4px 4px
  box-shadow 0 1px 3px 0 rgba(0,0,0,0.30)
  overflow hidden
  display flex
  flex-direction column

  &__leading
    width 100%
    height 135px
    position relative
    overflow hidden
    img
      width 100%
      height 100%
      object-fit cover
      object-position center center
      transition width 0.5s, height 0.5s
      &:hover
        width 110%
        height 110%
    .duration
      position absolute
      right 10px
      bottom 10px
      background-color rgba(0,0,0,0.8)
      padding 2px
      border-radius 2px
      font-family SFUIText-Medium
      font-size 12px
      color #FFFFFF
      letter-spacing 0
      line-height 16px
  &__wrapper
    padding 8px
    flex 1
    display flex
    flex-direction column
    justify-content space-between
    > div
      & + div
        margin-top 10px
  &__title
    text-align left
    height 40px
  &__info
    min-height 35px
    display flex
    flex 1
    flex-wrap wrap
    justify-content flex-end
    .count
      flex 1
      padding-left 24px
      text-align left
      font-family NotoSansCJKtc-Regular
      font-size 14px
      color #787878
      letter-spacing 0
      line-height 20px
      position relative
      &::before
        content ''
        background-position left top
        background-size 19px 19px
        background-repeat no-repeat
        background-image url(../assets/baseline-headset-24px.svg)
        width 100%
        height 100%
        position absolute
        left 0
        top 0
        opacity 0.5
    .tags
      display inline-flex
      align-items flex-end
      justify-content flex-end
      flex-wrap wrap
      .caption
        background-color #4283E4
      > div
        padding 2px 8px
        color #fff
        font-size 12px
        background #37C597
        border-radius 2px
        & + div
          margin-left 8px
</style>
