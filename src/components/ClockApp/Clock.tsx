import React, { memo, useEffect } from "react";

import { Card } from "ui-neumorphism";

const Clock = () => {
  const date = () => {
    const today = new Date();
    const h = (today.getHours() % 12) + today.getMinutes() / 59;
    const m = today.getMinutes();
    const s = today.getSeconds();

    return { h, m, s };
  };

  const clock = (
    hours: Element | null,
    minutes: Element | null,
    seconds: Element | null
  ) => {
    const { h, m, s } = date();

    rotate(hours, h * 30);
    rotate(minutes, m * 6);
    rotate(seconds, s * 6);
  };

  const rotate = (target: any, val: number) => {
    target.style.transform = `rotate(${val}deg)`;
  };

  useEffect(() => {
    const hours = document.querySelector(".clock-hours");
    const minutes = document.querySelector(".clock-minutes");
    const seconds = document.querySelector(".clock-seconds");
    setInterval(() => {
      clock(hours, minutes, seconds);
    }, 500);
  }, []);

  return (
    <Card
      width={208}
      height={208}
      elevation={3}
      style={{ borderRadius: "208px" }}
      className="mt-8 d-flex align-center justify-center p-relative"
    >
      <Card
        width={100}
        height={100}
        elevation={1}
        style={{ borderRadius: "100px" }}
        className="p-relative d-flex align-center justify-center"
      >
        <div className="clock-hand clock-hours"></div>
        <div className="clock-hand clock-minutes"></div>
        <div className="clock-hand clock-seconds"></div>
        <div className="p-absolute clock-point"></div>
      </Card>
      <span className="p-absolute marker--1"></span>
      <span className="p-absolute marker--2"></span>
      <span className="p-absolute marker--3"></span>
      <span className="p-absolute marker--4"></span>
    </Card>
  );
};

export default memo(Clock);
