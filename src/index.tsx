import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

// Criando o meu servidor
createServer({
  // Criando a minha rota
  routes() {
    // Criando o namespace
    this.namespace = "api";

    // Criando
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          cratedAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
