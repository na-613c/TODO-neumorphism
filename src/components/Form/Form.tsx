import React, { FC, memo, useEffect, useState } from "react";
import { Card, TextField, TextArea, Spacer } from "ui-neumorphism";
import { FormType, ItemType } from "../../types";
import Buttons from "./Buttons";
import HeaderForm from "./HeaderForm";

type Props = {
  form: FormType;
  onSwitchEdit: (action: boolean) => void;
  onChangeForm: (action: ItemType) => void;
  onCreateItem: () => void;
  onUpdateItem: () => void;
  isDisabled: boolean;
};

const Form: FC<Props> = ({
  form,
  onSwitchEdit,
  onChangeForm,
  onCreateItem,
  onUpdateItem,
  isDisabled,
}) => {
  const [checked, setChecked] = useState(form.isEdit);

  useEffect(() => {
    onSwitchEdit(checked && !isDisabled);
  }, [checked, isDisabled]);

  const onChange = ({ checked }: { checked: boolean }) => {
    setChecked(checked);
  };

  const onChangeTextField = ({ value }: { value: string }) => {
    onChangeForm({ ...form.data, title: value });
  };

  const onChangeTextArea = ({ value }: { value: string }) => {
    onChangeForm({ ...form.data, content: value });
  };

  const onCleanBtn = () => {
    onChangeForm({
      title: "",
      content: "",
    });
  };

  const onSaveBtn = () => {
    const title = form.data.title.trim();
    const content = form.data.content.trim();
    if (title !== "" && content !== "") {
      onChangeForm({
        ...form.data,
        title,
        content,
      });

      form.isEdit ? onUpdateItem() : onCreateItem();
    }
  };

  return (
    <Card
      rounded
      width={600}
      style={{ minWidth: 600 }}
      height={300}
      className={"mx-8 p-relative pa-6 my-4 align-left"}
    >
      <HeaderForm
        onChange={onChange}
        isEdit={form.isEdit}
        isDisabled={isDisabled}
      />
      <Card flat className="d-flex justify-center flex-wrap">
        <TextField
          width={215}
          className="my-6"
          label="Введи тему"
          value={form.data.title}
          onChange={onChangeTextField}
          rules={[
            (v: string) => v !== "" || "Cant be empty",
            (v: string) => v.trim() !== "" || "Cant be only white space",
          ]}
          uncontrolled
        ></TextField>
        <Spacer />
        <Card flat className=" align-center">
          <TextArea
            height={95}
            width={260}
            className="my-6"
            placeholder="Введи сообщение"
            value={form.data.content}
            onChange={onChangeTextArea}
            uncontrolled
            rules={[
              (v: string) => v !== "" || "Не может быть пустым",
              (v: string) => v.trim() !== "" || "Не может быть из пробелов",
            ]}
          ></TextArea>
          <Buttons onCleanBtn={onCleanBtn} onSaveBtn={onSaveBtn} />
        </Card>
      </Card>
    </Card>
  );
};

export default memo(Form);
