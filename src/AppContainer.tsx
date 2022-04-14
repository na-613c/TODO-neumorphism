import "./App.css"; //@ts-ignore
import React, { useReducer } from "react";
import "ui-neumorphism/dist/index.css";
import App from "./App";
import { appReducer, initialState } from "./Reducer";
import { ActionApp, ItemType } from "./types";

const AppContainer: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const onSwitchEdit = (payload: boolean) =>
    dispatch({
      type: ActionApp.SWITCH_EDIT,
      payload,
    });

  const onChangeForm = (payload: ItemType) =>
    dispatch({
      type: ActionApp.CHANGE_FORM,
      payload,
    });

  const onUpdateItem = () =>
    dispatch({
      type: ActionApp.UPDATE_ITEM,
    });

  const onCreateItem = () =>
    dispatch({
      type: ActionApp.CREATE_ITEM,
    });

  const setActive = (payload: number) =>
    dispatch({
      type: ActionApp.CHANGE_ACTIVE,
      payload,
    });

  return (
    <App
      state={state}
      onSwitchEdit={onSwitchEdit}
      onChangeForm={onChangeForm}
      onCreateItem={onCreateItem}
      onUpdateItem={onUpdateItem}
      setActive={setActive}
    />
  );
};

export default AppContainer;
