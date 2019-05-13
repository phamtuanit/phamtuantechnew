const Store = function store() {
    this.phones = [];
    this.cart = [];
    this.phoneCategories = [];
    this.phoneCategories.push({ id: 1, name: "Apple" });
    this.phoneCategories.push({ id: 2, name: "Asus" });
    this.phoneCategories.push({ id: 3, name: "Lenovo" });
    this.phoneCategories.push({ id: 4, name: "HTC" });
    this.phoneCategories.push({ id: 5, name: "Samsung" });

    this.laptopCategories = [];
    this.laptopCategories.push({ id: 1, name: "Apple" });
    this.laptopCategories.push({ id: 2, name: "Asus" });
    this.laptopCategories.push({ id: 3, name: "Lenovo" });
}

Store.prototype.fetch = function (callBack) {
    const maxItems = 20;
    const token = "58293735d0f12d6a867d6efbe9c2fd3aa939186d86a9f13c";
    const device = "A8"
    const url = `https://fonoapi.freshpixl.com/v1/getdevice?token=${token}&device=${device}&limit=${maxItems}`;
    var that = this;
    $.post(url, null, function (data) {
        data.slice(0, maxItems).forEach((dev, index) => {
            dev.id = index;
            dev.type = "phone";
            that.phones.push(dev);
        });

        callBack(this);
    }, "json");
}

// Product function
Store.prototype.getCategories = function (type) {
    if (type === "laptop") {
        return this.laptopCategories;
    }
    return this.phoneCategories;
}

Store.prototype.getProducts = function (type) {
    if (type) {
        type += "s";
        return this[type].slice(0);
    }
    return [];
}

Store.prototype.addProducts = function (type, products) {
    if (type) {
        type += "s";
        if (products) {
            let orgProducts = this[type];
            this[type] = [...orgProducts, products];
        }

        return this[type].slice(0);
    }
    return [];
}

Store.prototype.delProducts = function (type, productId) {
    if (type && product && product.id) {
        type += "s";
        let products = this[type];
        var product;
        this[type] = products.filter(function (i) {
            if (i.id === productId) {
                product = i;
                return false;
            }
            return true;
        });

        return product;
    }
    return null;
}

// Cart
Store.prototype.getCart = function () {
    return this.cart.slice(0);
}

Store.prototype.addProductToCart = function (type, productId) {
    if (type) {
        type += "s";
        let products = this[type];
        let product = products.find(i => i.id === productId);
        let productInCart = this.cart.find(i => i.id === productId);

        if (product) {
            if (productInCart) {
                productInCart.quantity++;
            } else {
                productInCart = Object.assign({}, product);
                productInCart.quantity = 1;
                this.cart.push(productInCart);
            }
            return product;
        }
    }
    return null;
}

Store.prototype.delProductFormCart = function (productId) {
    if (product.id) {
        var product;
        this.cart.filter(function (i) {
            if (i.id === productId) {
                product = i;
                return false;
            }
            return true;
        });

        return product;
    }
    return null;
}

export default {
    instance: new Store()
}