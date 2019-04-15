export default {
    template: '#toast-noti',
    data: function () {
        return {
            message: {
                id: 0,
                title: "Notifycation",
                text: "Test",
                level: 0
            }
        }
    },
    created() {
        console.info('Vue-Toast initialized');
        this.$nextTick(function () {
            $('.toast').toast();
        });
    },
    updated() {
        this.$nextTick(function () {
            console.warn(`Showing toast message: ${JSON.stringify(this.$data.message)}`);
            $('.toast').toast('show');
        });
    },
}