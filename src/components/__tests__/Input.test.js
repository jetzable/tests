import {
  mount
} from "@vue/test-utils";

import Input from '@/components/Input.vue';

describe('Input.vue', () => {
  const wrapper = mount(Input);
  it('Change input class when valid', () => {
    const input = wrapper.find('input');
    input.setValue('HHHH')
    expect(input.classes("valid")).toBe(true);
  });
  it('Event emited', () => {
    const str = 'Hola';
    wrapper.vm.$emit('validButton', str.length);
    expect(wrapper.emitted().validButton).toBeTruthy();
  });
});