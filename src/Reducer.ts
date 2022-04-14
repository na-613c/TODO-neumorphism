import { Action, ActionApp, StateType } from "./types";

const initialState = {
  form: {
    isEdit: false,
    data: {
      title: "",
      content: "",
      id: 0,
    },
  },
  list: [],
  active: -1,
};

function appReducer(state: StateType, action: Action): StateType {
  const { type, payload } = action;
  console.log("state", state);
  console.log("action", action);
  switch (type) {
    case ActionApp.SWITCH_EDIT:
      return payload
        ? {
            ...state,
            form: {
              data: {
                ...state.list[state.active],
              },
              isEdit: payload,
            },
          }
        : {
            ...state,
            form: {
              data: {
                title: "",
                content: "",
              },
              isEdit: payload,
            },
          };
    case ActionApp.CHANGE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          data: { ...payload },
        },
      };
    case ActionApp.CHANGE_ACTIVE:
      const isEdit = state.form.isEdit;
      return isEdit
        ? {
            ...state,
            form: {
              ...state.form,
              data: {
                ...state.list[payload],
              },
            },
            active: payload,
          }
        : {
            ...state,
            active: payload,
          };
    case ActionApp.CREATE_ITEM:
      const id = //@ts-ignore
        state.list.reduce((p, c) => (p < (c?.id || 0) ? c.id : p), 0) + 1;
      const data = {
        ...state.form.data,
        title: "",
        content: "",
      };
      return {
        ...state, //@ts-ignore
        list: [...state.list, { ...state.form.data, id }],
        form: {
          ...state.form,
          data: { ...data },
        },
      };
    case ActionApp.UPDATE_ITEM:
      const list = state.list.map(l =>
        l.id === state.form.data.id ? state.form.data : l
      );
      return {
        ...state, //@ts-ignore
        list: [...list],
      };
    default:
      return state;
  }
}

export { appReducer, initialState };
