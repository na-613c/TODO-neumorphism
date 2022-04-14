export interface PropsFormHeader {
  onChange: (event: any) => void;
  isEdit: boolean;
  isDisabled: boolean;
}

export interface ItemType {
  title: string;
  content: string;
  id?: number;
}
export interface FormType {
  isEdit: boolean;
  data: ItemType;
}

export interface StateType {
  form: FormType;
  list: ItemType[];
  active: number;
}

export enum ActionApp {
  SWITCH_CREATE = "SWITCH_CREATE",
  SWITCH_EDIT = "SWITCH_EDIT",
  EDIT_ITEM = "EDIT_ITEM",
  CREATE_ITEM = "CREATE_ITEM",
  UPDATE_ITEM = 'UPDATE_ITEM',
  CHANGE_FORM = "CHANGE_FORM",
  CHANGE_ACTIVE = "CHANGE_ACTIVE",
  
}

export type Action = {
  type: ActionApp;
  payload?: any;
};
