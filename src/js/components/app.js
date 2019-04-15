
Vue.component('async-component', function (resolve, reject) {
    setTimeout(function () {
        // Pass the component definition to the resolve callback
        resolve({
            template: '<div>I am async!</div>',
            created: function () {
                // `this` trỏ đến đối tượng Vue hiện hành
                console.log('Vue-Async initialized');
            },
        })
    }, 1000)
})

var appvm = new Vue({
    el: '#app',
    data: function () {
        return {
            title: "Phạm Tuân's Blog",
            message: "Welcome to Phạm Tuân's Blog"
        }
    },
    components: {
        "main-nav": () => import('./js/components/navigation.js'),
        "toast-noti": () => import('./js/components/toast.js'),
    },
    created: function () {
        // `this` trỏ đến đối tượng Vue hiện hành
        console.log('Vue-App initialized: ' + this.$data.title);
    },
});