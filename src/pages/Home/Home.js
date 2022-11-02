import React, { useState } from "react";
import Client from "../../components/Client/Client";
import ClientForm from "../../components/ClientForm/ClientForm";

import "./Home.scss";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("form");
  const [client, setClient] = useState(null);

  const handleComponent = () => {
    switch (selectedComponent) {
      case "form":
        return (
          <ClientForm
            setClient={setClient}
            setSelectedComponent={setSelectedComponent}
          />
        );
      case "client":
        return (
          <Client client={client} setSelectedComponent={setSelectedComponent} />
        );

      default:
        return (
          <ClientForm
            setClient={setClient}
            setSelectedComponent={setSelectedComponent}
          />
        );
    }
  };

  return <div className="home">{handleComponent()}</div>;
}
