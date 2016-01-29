<style lang="stylus">
    .transparent-input, .transparent-input:focus,
        border none
        border-color transparent
        box-shadow none
        padding 0
        outline none
</style>

<template>
    <div>
        <div class="tags-editor-container" @click="onEditorClick">
            <tag-list :tags="postTags"></tag-list>
            <input type="text"
                class="transparent-input"
                placeholder="Tags.."
                v-el:tag-input
                v-model="value"
                @keydown.8="deleteLastTag"
                @keyup="beforeInsert"
                @blur="beforeInsert">
        </div>
    </div>
</template>

<script>
    const TagList = require('./tags.vue');

    export default {
        data() {
            return {
                value: '',
                separator: /[,\s]/g
            }
        },
        props : {
            'postTags': {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            onEditorClick() {
                this.$els.tagInput.focus();
            },
            beforeInsert() {
                let val = this.value;
                if (val && this.separator.test(val)) {
                    this.insertTag();
                }
            },
            insertTag() {
                var words = this.value.split(this.separator);
                this.value = '';

                for (let i = 0; i < words.length; i++) {
                    let word = words[i];

                    // If the word doesn't exist in the tags
                    if (word && this.postTags.indexOf(word) < 0) {
                        this.postTags.push(word.trim());
                    }
                };
            },
            deleteLastTag() {
                if (! this.value.trim()) {
                    this.postTags.pop()
                }
            }
        },
        components: { TagList }
    }
</script>
