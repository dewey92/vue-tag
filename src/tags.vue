<style lang="stylus" scoped>
    .tags
        list-style none
        overflow hidden
        padding 0
        display inline

        li
            float left

    .tag
        background #eee
        border-radius 3px 0 0 3px
        color #888
        display inline-block
        height 26px
        line-height 26px
        padding 0 20px 0 23px
        position relative
        margin 0 8px 8px 0
        text-decoration none
        transition color .25s
        &::before
            background #fff
            border-radius 10px
            box-shadow inset 0 1px rgba(0, 0, 0, 0.25)
            content ''
            height 6px
            left 10px
            position absolute
            width 6px
            top 10px
        &::after
            background #fff
            border-bottom 13px solid transparent
            border-left 10px solid #eee
            border-top 13px solid transparent
            content ''
            position absolute
            right 0
            top 0
        &:hover
            background-color #ccc
            color white
            text-decoration none
        &:hover::after
            border-left-color #ccc
</style>

<template>
    <div>
        <ul class="tags">
            <li v-for="tag in tags" track-by="$index">
                <a href="#"
                    class="tag"
                    v-text="tag"></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props : {
            'tags': {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>
