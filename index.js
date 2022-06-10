/*

3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove a*/

const { catalogue } = require("./data")


const findProduct = (barcode) => {
    if (typeof(barcode) !== number) {
        return 'sorry this isnt a barcode'
    }
    return catalogue.find((item) => item.barcode === barcode)
}

const addToBasket = (basket, item) => {
    basket.push(item)
}
const totalPrice = (basket) => {
    const price = basket.reduce((total, item) => total + item.price, 0)
    return `£${price}`
}

module.exports = {findProduct, addToBasket, totalPrice}