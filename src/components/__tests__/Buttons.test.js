import {
  createLocalVue,
  mount,
} from '@vue/test-utils';
import {
  getQueriesForElement,
  prettyDOM,
  wait,
  fireEvent,
} from 'dom-testing-library';

import Buttons from '@/components/Buttons.vue';

function render(component, options) {
  const localVue = createLocalVue();
  const wrapper = mount(component, {
    localVue,
    attachToDocument: true,
    ...options
  });

  return {
    wrapper,
    ...getQueriesForElement(wrapper.element),
    debug: () => console.log(prettyDOM(wrapper.element))
  };
}

describe('Buttons', () => {
  it('renders slot correctly', () => {
    const buttonText = 'Menu';
    const options = {
      slots: {
        default: buttonText
      }
    };
    const {
      getByText
    } = render(Buttons, options);
    expect(getByText(buttonText)).toBeTruthy();
  });
  it('emits a click event when clicked', async () => {
    const buttonText = 'Menu';
    const options = {
      slots: {
        default: buttonText
      }
    };
    const {
      getByText,
      wrapper
    } = render(Buttons, options);
    const button = getByText(buttonText);
    await fireEvent.click(button);
    expect(wrapper.emitted()).toBeTruthy();
  });
})