import {
  mount
} from "@vue/test-utils";

import App from "../../App.vue";

describe('App.vue', () => {
  const wrapper = mount(App);
  it('Renders 3 children components properly', () => {
    const children = wrapper.vm.$children;
    expect(children.length).toBe(3);
  });
});