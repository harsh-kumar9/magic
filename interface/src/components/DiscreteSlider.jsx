import React, { useState } from "react";

export const DiscreteSlider = ({
  stringValues,
  stringDescriptions = [],
  setSelectedValue,
}) => {
  const [valueIndex, setValueIndex] = useState(null);

  const handleChange = (event) => {
    const newIndex = event.target.value;
    setValueIndex(newIndex);
    setSelectedValue(stringValues[newIndex]);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <input
        id="discrete-string-slider"
        type="range"
        min="0"
        max={stringValues.length - 1}
        step="1"
        value={valueIndex}
        onChange={handleChange}
        className="mb-2 w-2/5"
      />
      <p className="font-semibold">{stringValues[valueIndex]}</p>
      {stringDescriptions[valueIndex] && (
        <p>{stringDescriptions[valueIndex]}</p>
      )}
    </div>
  );
};