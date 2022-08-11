import {mount} from '@vue/test-utils'
import addTask from '../src/js/addTask'
import {describe, it, expect} from 'vitest'

describe('addTask test', () => {
    it('for test', ()=>{
        expect(addTask('nima')).toBe()
    })
})