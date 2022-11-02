import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import ClientForm from "../../components/ClientForm/ClientForm";

describe("Prueba en <App />", () => {
  let wrapper = shallow(<ClientForm />);

  test("Debe mostrar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("El boton debe de estar desactivado", () => {
    const button = wrapper.find("Button");

    expect(button.prop("disabled")).toBe(true);
  });
});
