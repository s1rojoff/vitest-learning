import {describe, it , expect} from 'vitest'
import { mount } from '@vue/test-utils';
import Counter from '../src/components/Counter.vue'

describe('counter test', ()=> {
    it('increments counter value on click', async ()=> {
        const wrapper = mount(Counter);
        const count = wrapper.find('h3');
        const btn = wrapper.find('button');

        expect(count.text()).toContain('0')
        await btn.trigger('click')
        expect(count.text()).toContain('1')

    })
})