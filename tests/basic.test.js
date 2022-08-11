import {mount} from '@vue/test-utils';
import LoginForm from '../src/components/LoginForm.vue';
import { describe, it, expect } from 'vitest';

describe('LoginForm', () => {
    it('emits an event with a user  data payload' , () => {
        const wrapper = mount(LoginForm);
        const input = wrapper.find('input[type="text"]');
        input.setValue = 'Hello from Dilshod';
        wrapper.trigger('submit');
        const formSubmittedCalls = wrapper.emitted('formSubmitted');
        expect(formSubmittedCalls).toHaveLength(1)
        
    })
})