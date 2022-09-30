import { isArray } from "../src/isType"

describe('is Array', () => {
    it("[1]", () => {
        expect(isArray([1])).toEqual(true)
    })
})