<style lang="stylus" scoped>
    .tag-list
        list-style none
        overflow hidden
        padding 0
        display inline

        li
            float left
            position relative

        &-item
            background #eee
            border-radius 0 3px 3px 0
            color #888
            display inline-block
            height 26px
            line-height 26px
            padding 0 23px 0 16px
            position relative
            margin 0 8px 8px 0
            text-decoration none
            transition color .25s
            &::after
                background #fff
                border-bottom 13px solid transparent
                border-right 10px solid #eee
                border-top 13px solid transparent
                content ''
                position absolute
                left 0
                top 0
            &:hover
                background-color #ccc
                color white
                text-decoration none
            &:hover::after
                border-right-color #ccc
    .delete-tag
        position absolute
        top 2px
        right 17px
        z-index 10
        &:hover
            cursor pointer
</style>

<template>
    <div>
        <ul class="tag-list">
            <li v-for="tag in tags" track-by="$index">
                <span class="delete-tag" @click="removeTag(tag)">x</span>
                <a href="#"
                    class="tag-list-item"
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
        },
        methods : {
            removeTag(tag) {
                this.tags.$remove(tag);
            }
        }
    }
</script>
