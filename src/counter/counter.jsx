import React from "react";
import Button from "../button/button";
import { StyledCounter, Value } from "./styled";

export default function Counter({ className, value, onChange, minValue }) {
  const isDisabledMinus = value === minValue;

  return (
    <StyledCounter className={className}>
      <Button
        size="small"
        isDisabled={isDisabledMinus}
        onClick={() => onChange && onChange(value - 1)}
      >
        -
      </Button>
      <Value
        value={value}
        size={1}
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value < minValue ? minValue : value);
        }}
      />
      <Button size="small" onClick={() => onChange && onChange(value + 1)}>
        +
      </Button>
    </StyledCounter>
  );
}
