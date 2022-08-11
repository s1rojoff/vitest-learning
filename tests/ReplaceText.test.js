import {mount} from '@vue/test-utils'
import {describe, it , expect} from 'vitest'
import ReplaceText from '../src/components/ReplaceText.vue'

describe('ReplaceText tests', () => {
    const wrapper = mount(ReplaceText);
    it('should render', () => {
        expect(wrapper.find('h1').exists()).toBeTruthy()
        expect(wrapper.find('input').exists()).toBeTruthy()
        expect(wrapper.find('button').exists()).toBeTruthy()
    });

    it('should change msg', async () => {
        await wrapper.find('input[type="text"]').setValue('Learn vue')
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('h1').text()).toEqual('Learn vue')
    })
})