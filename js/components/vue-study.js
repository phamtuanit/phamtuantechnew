export default {
    template: `<p>Template not found</p>`,
    templateFile: "vue-study.html",
    data() {
        return {
            name: "Vuejs componnet",
            phoneNo: "098777888",
        }
    },
    created() {
        console.info('Vuejs compoent is initialized');
    },
    computed: {
        phoneNoChar() {
            var message = "";
            for (var i = 0; i < this.phoneNo.length; i++) {
                if (this.phoneNo[i] == "1") { message += "Một "; } else if
                    (this.phoneNo[i] == "2") { message += "Hai "; } else if (this.phoneNo[i] == "3") { message += "Ba "; } else if
                        (this.phoneNo[i] == "4") { message += "Bốn "; } else if (this.phoneNo[i] == "5") { message += "Năm "; } else if
                            (this.phoneNo[i] == "6") { message += "Sáu "; } else if (this.phoneNo[i] == "7") { message += "Bảy "; } else if
                                (this.phoneNo[i] == "8") { message += "Tám "; } else if (this.phoneNo[i] == "9") { message += "Chín "; } else if
                                    (this.phoneNo[i] == "0") { message += "Không "; }
            } return message;
        }
    },
}