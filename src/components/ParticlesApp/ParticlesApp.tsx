import React, { memo } from "react";
import { Card } from "ui-neumorphism";

const ParticlesApp = () => {
  const width = 500;
  const height = 320;
  return (
    <Card
      rounded
      width={width}
      height={height}
      className="d-flex align-center mx-8 p-relative pa-6 my-4 flex-wrap"
    >
      <Card
        inset
        width={width - 48}
        height={height - 48}
        className="d-flex align-center p-relative flex-wrap"
        style={{ backgroundColor: "rgba(0,0,0,0)" }}
      >
        <img
          width={width - 54}
          height={height - 54}
          style={{
            borderRadius: 6,
            marginLeft: 3,
            marginTop: 1,
          }}
          src="https://cdn.dribbble.com/users/299116/screenshots/13891599/media/e84aa2c0f42d2b7754586a11f8fdf19d.jpg?compress=1&resize=1200x900&vertical=top"
          alt=""
        />
      </Card>
    </Card>
  );
};

export default memo(ParticlesApp);
