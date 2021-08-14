import React, { useCallback } from "react";
import "./styles.scss";

const VALID_FIRST = /^[1-9]{1}$/;
const VALID_NEXT = /^[0-9]{1}$/;
const DELETE_KEY_CODE = 8;

interface CurrencyInputProps {
  value: number;
  max: number;
  onValueChange: (value: number) => void;
  placeholder: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  max = Number.MAX_SAFE_INTEGER,
  onValueChange,
  placeholder,
}) => {
  const valueAbsTrunc = Math.trunc(Math.abs(value));

  if (
    value !== valueAbsTrunc ||
    !Number.isFinite(value) ||
    Number.isNaN(value)
  ) {
  }

  const handleKeyDown = useCallback(
    (e) => {
      const { key, keyCode } = e;
      if (
        (value === 0 && !VALID_FIRST.test(key)) ||
        (value !== 0 && !VALID_NEXT.test(key) && keyCode !== DELETE_KEY_CODE)
      ) {
        return;
      }
      const valueString = value.toString();
      let nextValue = 0;
      if (keyCode !== DELETE_KEY_CODE) {
        const nextValueString = value === 0 ? key : `${valueString}${key}`;
        nextValue = Number.parseInt(nextValueString, 10);
      } else {
        const nextValueString = valueString.slice(0, -1);
        nextValue =
          nextValueString === "" ? 0 : Number.parseInt(nextValueString, 10);
      }
      if (nextValue > max) {
        return;
      }
      onValueChange(nextValue);
    },
    [max, onValueChange, value]
  );

  const handleChange = useCallback(() => {}, []);

  const valueDisplay = (value / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <input
      className="currency-input"
      inputMode="numeric"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={valueDisplay}
      placeholder={placeholder}
    />
  );
};

export default CurrencyInput;
