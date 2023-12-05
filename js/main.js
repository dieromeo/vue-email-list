'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            show: 'more',
        }
    },
    methods: {
        dropdown() {
            if (this.show === 'more') {
                this.show = 'less';
            }
            else {
                this.show = 'more';
            }
        }
    }
}).mount('#app');