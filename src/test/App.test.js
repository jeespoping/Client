import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import App from "../App";

describe("Prueba en <App />", () => {
  test("Debe mostrar correctamente", () => {
    let wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
