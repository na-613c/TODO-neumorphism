import "./App.css";
import React, { FC } from "react";
import "ui-neumorphism/dist/index.css";
import ClockApp from "./components/ClockApp/ClockApp";
import Form from "./components/Form/Form";
import { ItemType, StateType } from "./types";
import TodoList from "./components/TodoList/TodoList";
import ParticlesApp from "./components/ParticlesApp/ParticlesApp";

type Props = {
  state: StateType;
  onSwitchEdit: (action: boolean) => void;
  onChangeForm: (action: ItemType) => void;
  onCreateItem: () => void;
  onUpdateItem: () => void;
  setActive: (action: number) => void;
};

const App: FC<Props> = ({
  state,
  onSwitchEdit,
  onUpdateItem,
  onChangeForm,
  onCreateItem,
  setActive,
}) => {
  return (
    <main className={`theme--light`}>
      <div className="App">
        <div className="App-header">
          <ClockApp />
          <div>
            <Form
              isDisabled={state.active === undefined || state.active === -1}
              form={state.form}
              onSwitchEdit={onSwitchEdit}
              onChangeForm={onChangeForm}
              onCreateItem={onCreateItem}
              onUpdateItem={onUpdateItem}
            />
            <ParticlesApp />
          </div>

          <TodoList list={state.list} setActive={setActive} />
        </div>
      </div>
    </main>
  );
};

export default App;
