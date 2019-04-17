export default {
    template: '<p>{{name}}</p>',
    data: function () {
        return {
            name: "Coverage compoenet",
        }
    },
    created() {
        console.info('Coverage compoent is initialized');
    },
}