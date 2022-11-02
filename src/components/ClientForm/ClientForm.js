import React, { useState } from "react";
import { Button, Form, Input, Select } from "semantic-ui-react";
import "./ClientForm.scss";

export default function ClientForm() {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const options = [
    {
      key: "CC",
      text: "Cédula de ciudadanía",
      value: "CC",
    },
    {
      key: "TI",
      text: "Tarjeta de identidad",
      value: "TI",
    },
    {
      key: "CE",
      text: "Cédula Extrangera",
      value: "CE",
    },
  ];

  const handleChange = (e) => {
    const number = e.target.value
      .replace(",", "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    setInputValue(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="client-form">
      <p>Todos los campos son obligatorios</p>

      <Form>
        <Form.Field>
          <label>Tipo de documento</label>
          <Select
            onChange={(_, data) => setSelectValue(data)}
            name="type"
            value={selectValue}
            options={options}
          />
        </Form.Field>
        <Form.Field>
          <label>Número de documento</label>
          <Input name="number" value={inputValue} onChange={handleChange} />
        </Form.Field>
        <Button type="submit" active={active}>
          Buscar
        </Button>
      </Form>
    </div>
  );
}
