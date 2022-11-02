import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Home from "../../pages/Home";

describe("Prueba en <Home />", () => {
  test("Debe mostrar correctamente", () => {
    let wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
