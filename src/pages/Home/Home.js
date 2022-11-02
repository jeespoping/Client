import React, { useState } from "react";
import ClientForm from "../../components/ClientForm/ClientForm";

import "./Home.scss";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("form");

  const handleComponent = () => {
    switch (selectedComponent) {
      case "form":
        return <ClientForm setSelectedComponent={setSelectedComponent} />;

      default:
        return <ClientForm setSelectedComponent={setSelectedComponent} />;
    }
  };

  return <div className="home">{handleComponent()}</div>;
}
