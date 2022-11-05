import React from "react";
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { Router } from "./router/Router";
import "./styles.css";
import { ContextProvider } from 'react-sortly';

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ContextProvider>
          <Router />
      </ContextProvider>
    </DndProvider>
  );
}
