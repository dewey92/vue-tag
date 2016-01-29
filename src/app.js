(function () {

    const TagEditor = require('./tag-editor.vue');

    new Vue({
        el: '#app',
        data() {
            return {
                tags : ['photography', 'anime', 'whatever']
            }
        },
        components: { TagEditor }
    })

})();