import Component from "./router.js"

var appvm = new Vue({
    router: Component.router,
    el: '#app',
    data: function () {
        return {
            title: "Phạm Tuân's Blog",
            message: "Welcome to Phạm Tuân's Blog"
        }
    },
    components: {
        "main-nav": () => import('./components/navigation.js'),
        "toast-noti": () => import('./components/toast.js'),
    },
    created: function () {
        // `this` trỏ đến đối tượng Vue hiện hành
        console.log('Vue-App initialized: ' + this.$data.title);
    },
});

window.Application = {
    VueApp: appvm
};