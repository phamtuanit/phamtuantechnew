export default {
    template: '#main-nav',
    data: function () {
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
            }]
        }
    },
    created: function () {
        console.info('Vue-MainNav initialized');
    },
    methods: {
        goto: function goto(router) {
            console.info("Go to -> " + router);
        }
    },
}