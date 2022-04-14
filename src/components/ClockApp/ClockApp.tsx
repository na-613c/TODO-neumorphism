import React, { memo } from "react";
import { Card } from "ui-neumorphism";
import Clock from "./Clock";
import Title from "./Title";

const ClockApp = () => {
  return (
    <Card
      rounded
      width={300}
      height={400}
      className={"mx-8 p-relative pa-6 my-4"}
    >
      <Title/>
      <Card flat className="d-flex justify-center">
        <Clock />
      </Card>
    </Card>
  );
};

export default memo(ClockApp);
