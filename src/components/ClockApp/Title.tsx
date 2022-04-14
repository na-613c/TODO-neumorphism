import React, { memo } from "react";
import { Card, H4 } from "ui-neumorphism";

const Title = () => {
  return (
    <Card flat className="d-flex align-center mx-5">
      <H4 style={{ fontWeight: "500" }}>Время:</H4>
    </Card>
  );
};

export default memo(Title);
