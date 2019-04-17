export default {
    template: '<p>{{name}}</p>',
    data() {
        return {
            name: "Test compoenet",
        }
    },
    created() {
        console.info('Test compoent is initialized');
    },
}