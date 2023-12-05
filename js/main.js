'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            show: 'more',
            emails: [],
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
        },
        addRandomEmail(num) {
            for (let i = 0; i < num; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                    this.emails.push(email.data.response);
                })
            }
        }
    },
    created() {
        this.addRandomEmail(10);
    }
}).mount('#app');