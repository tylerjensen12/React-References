import React from "react";
import StateComponent from "../components/StateComponent";
import EffectComponent from "../components/EffectComponent";
import RefComponent from "../components/RefComponent";
import ContextComponent from "../components/ContextComponent";
import Interact from "../components/Interact";
import ReduxComp from "../components/ReduxComp";

function ReferenceScreen() {
  return (
    <div className="col-container">
      <h1>Reference</h1>
      <StateComponent />
      <EffectComponent />
      <RefComponent />
      <ContextComponent />
      <Interact />
      <ReduxComp />
    </div>
  );
}

export default ReferenceScreen