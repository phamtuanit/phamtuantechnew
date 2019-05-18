export default {
    templateFile: "phoneItem.html",
    props: ["phone"],
    data() {
        return {};
    },
    methods: {
        shortInfo(phone) {
            return `${phone.sim}<br/> ${phone.battery_c}`;
        },
    },
};