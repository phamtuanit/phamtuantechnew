export default {
    template: '#main-nav',
    data() {
        return {
            links: [{
                id: 0,
                display_name: "Test",
                router: '/test'
            },
            {
                id: 1,
                display_name: "Coverage",
                router: '/coverage'
            },
            {
                id: 2,
                display_name: "Vuejs",
                router: '/vue'
            }]
        }
    },
    created: function () {
        console.info('Vue-MainNav is initialized');
    },
    methods: {
        goto: function goto(router) {
            console.info("Go to -> " + router);
        }
    },
}