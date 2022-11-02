import React, { useEffect, useState } from "react";
import { Input, Button, Icon } from "semantic-ui-react";
import { filter, size } from "lodash";
import clients from "../../JSON/clients";

import "./Client.scss";

export default function Client({ client, setSelectedComponent }) {
  const [foundClient, setFoundClient] = useState(null);

  useEffect(() => {
    const result = filter(clients, (client2) => {
      return (
        client2.number === client.number.split(".").join("") &&
        client2.typedocument === client.typedocument
      );
    });
    setFoundClient(result);
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    setSelectedComponent("form");
  };

  if (!foundClient) return null;

  return (
    <div className="client">
      <div className="head">
        <Button onClick={handleBack} icon>
          <Icon name="angle left"></Icon>
        </Button>
        <h1>Información básica</h1>
      </div>

      {size(foundClient) > 0 ? (
        <div className="data">
          <label>Prìmer apellido</label>
          <Input disabled value={foundClient[0].lastname} />
          <label>Prìmer nombre</label>
          <Input disabled value={foundClient[0].firstname} />
        </div>
      ) : (
        <h1>No se encontraron datos</h1>
      )}
    </div>
  );
}
