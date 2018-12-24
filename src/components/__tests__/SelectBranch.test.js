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

import SelectBranch from '@/components/SelectBranch.vue';

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

describe('SelectBranch', () => {
  it('renders slot correctly', () => {
    const titleText = 'Empresas';
    const options = {
      slots: {
        default: titleText
      }
    };
    const {
      getByText
    } = render(SelectBranch, options);
    expect(getByText(titleText)).toBeTruthy();
  });
  it('renders slot correctly', () => {
    const titleText = 'Almacenes';
    const options = {
      slots: {
        default: titleText
      }
    };
    const {
      getByText
    } = render(SelectBranch, options);
    const button = getByText("no patito S.A de C.V");
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(getByText(titleText)).toBeTruthy();
  });
});