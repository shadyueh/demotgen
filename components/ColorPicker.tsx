import React, { ChangeEvent, useState } from 'react';

interface ColorPickerProps {
  defaultColor?: string;
  onChange?: (color: string) => void; // optional callback prop
}

const ColorPicker = ({ onChange, defaultColor }: ColorPickerProps) => {
  // default color
  const defColor = defaultColor ? defaultColor : '#ffffff'
  const [color, setColor] = useState(defColor)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    if (onChange) {
      onChange(newColor); // invoke callback if provided
    }
  };

  return (
    <div className="relative">
      <div
        className="w-10 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full cursor-pointer"
        style={{ backgroundColor: color }}
      >
        <input
          type="color"
          value={color}
          onChange={handleChange}
          className="absolute inset-0 opacity-0 w-10 h-10 cursor-pointer"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default ColorPicker;
