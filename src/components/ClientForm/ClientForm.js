import React from "react";
import { Button, Form, Select } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ClientForm.scss";

export default function ClientForm({ setClient, setSelectedComponent }) {
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

  const formik = useFormik({
    initialValues: {
      typedocument: "",
      number: "",
    },
    validationSchema: Yup.object({
      typedocument: Yup.string().required(),
      number: Yup.string().required().max(14).min(10),
    }),
    onSubmit: (formValue) => {
      setClient(formValue);
      setSelectedComponent("client");
    },
  });

  const handleChange = (key, data) => {
    formik.setFieldValue(key, data);
  };

  const handleChangeInput = (e) => {
    const ascii = e.target.value.charCodeAt(e.target.value.length - 1);
    if (ascii < 48 || ascii > 57) {
      return;
    }
    const num = e.target.value.split(".").join("");

    handleChange("number", num.replace(/\B(?=(\d{3})+(?!\d))/g, "."));
  };

  return (
    <div className="client-form">
      <p>Todos los campos son obligatorios</p>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
          <label>Tipo de documento</label>
          <Select
            onChange={(_, data) => handleChange("typedocument", data.value)}
            value={formik.values.typedocument}
            options={options}
            error={formik.errors.typedocument && true}
          />
        </Form.Field>
        <Form.Field>
          <label>Número de documento</label>
          <Form.Input
            name="number"
            value={formik.values.number}
            onChange={handleChangeInput}
            error={formik.errors.number && true}
          />
        </Form.Field>
        <div className="button">
          <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
            Buscar
          </Button>
        </div>
      </Form>
    </div>
  );
}
