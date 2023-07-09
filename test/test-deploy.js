const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
    let simpleStorage, simpleStorageFactory
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const exptectedValue = "0"
        assert.equal(currentValue.toString(), exptectedValue)
        expect(currentValue.toString().to.equal(exptectedValue))
    })

    // it.only("Should update when we call store", async function () {
    it("Should update when we call store", async function () {
        const exptectedValue = "7"
        const transactionResponse = await simpleStorage.store(exptectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), exptectedValue)
    })

    // it("Should ")
})
