import {
  mount
} from "@vue/test-utils";

import Buttons from "@/components/Buttons.vue";

describe("Buttons.vue", () => {
  const wrapper = mount(Buttons);
  it("It has buttons", () => {
    const buttons = wrapper.findAll(".button");
    expect(buttons.length).toBe(2);
  });
  it("First button has class is-report and has text 'Cancelado'", () => {
    const button = wrapper.find("a:first-child");
    expect(button.classes("is-report")).toBe(true);
    expect(button.text()).toBe("Cancelado");
  });
  it("Last button has class is-income and is-outlined", () => {
    const button = wrapper.find("a:last-child");
    expect(button.classes("is-income")).toBe(true);
    expect(button.classes("is-outlined")).toBe(true);
  });
  it("Button change from disabled to valid when input has a valid input", () => {
    const button = wrapper.find("a:last-child");
    expect(button.classes("disabled")).toBe(true);
  });
});