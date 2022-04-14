import React, { memo, FC } from "react";
import { Card, Switch, Spacer, H4 } from "ui-neumorphism";
import { PropsFormHeader } from "../../types";

const HeaderForm: FC<PropsFormHeader> = ({ onChange, isEdit, isDisabled }) => {
  const title = (isEdit && !isDisabled) ? "Редактирование" : "Создание";

  return (
    <Card flat className="d-flex align-end">
      <H4 style={{ fontWeight: "500" }}>{title}</H4>
      <Spacer />
      <Switch
        checked={isEdit}
        className="switch"
        color="var(--success)"
        onChange={onChange}
        disabled={isDisabled}
      />
    </Card>
  );
};

export default memo(HeaderForm);
