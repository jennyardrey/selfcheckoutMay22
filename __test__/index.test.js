/* 1- As a user, I would like to be able to scan an item using barcode so its details can be found from products list (test data).

2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */
const {apple, banana, orange, pineapple, kiwi, catalogue } = require("../data")

const {findProduct, addToBasket, totalPrice} = require("../index")


describe("findProduct", () => {
    it("returns the item info", () => {
        expect(findProduct(apple.barcode)).toEqual(apple)
    })
})
describe("addToBasket", () => {
    it("adds an item to a basket", () => {
        const basket = [];
        expect(basket.length).toEqual(0)
        addToBasket(basket, banana)
        expect(basket.length).toEqual(1)
        expect(basket).toEqual([banana])
        addToBasket(basket, pineapple)
        expect(basket.length).toEqual(2)
        expect(basket).toEqual([banana, pineapple])
    })
})

describe("totalPrice", () => {
    it("adds up the prices of items in a basket", () => {
        const basket = [orange, kiwi, apple]; //37
        expect(totalPrice(basket)).toEqual('£37')
    })
})
