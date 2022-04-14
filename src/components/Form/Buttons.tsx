import React, { memo, FC } from "react";
import { Card, Button, Spacer } from "ui-neumorphism";

type Props = {
  onCleanBtn: () => void;
  onSaveBtn: () => void;
};

const Buttons: FC<Props> = ({ onCleanBtn, onSaveBtn }) => {
  return (
    <Card
      width={260}
      flat
      className="d-flex align-center justify-center flex-wrap mx-3"
    >
      <Button bordered color="var(--primary)" onClick={onSaveBtn}>
        Сохранить
      </Button>
      <Spacer />
      <Button bordered color="var(--error)" onClick={onCleanBtn}>
        Очистить
      </Button>
    </Card>
  );
};

export default memo(Buttons);
