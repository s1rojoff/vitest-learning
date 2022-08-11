import sum from  '../src/js/testFunc';
import {describe, expect, it} from 'vitest';
 describe('for sum function test', () => {
    it('return a + b' , () => {
        expect(sum(2,5)).toBe(7)
    })
 })