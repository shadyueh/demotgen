import React, { ChangeEvent, useRef, useState } from 'react';

interface ColorPickerProps {
  defaultColor?: string;
  onChange?: (color: string) => void; // optional callback prop
}

const ColorPicker = ({ onChange, defaultColor }: ColorPickerProps) => {
  // default color
  const defColor = defaultColor ?? '#ffffff'
  const [color, setColor] = useState(defColor)
  const [isFocused, setIsFocused] = useState<boolean>(false); // Track focus state
  const inputRef = useRef<HTMLInputElement>(null); // Reference to the color input

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    if (onChange) {
      onChange(newColor); // invoke callback if provided
    }
  };

  const handleFocus = () => {
    setIsFocused(true); // Set focus state to true
  };

  const handleBlur = () => {
    setIsFocused(false); // Set focus state to false
  };

  return (
    <div className="relative">
      <div
        className={`w-full sm:w-10 h-10 border-2 border-gray-300 dark:border-gray-600 
        rounded-full cursor-pointer transition-all duration-300 
        ${ isFocused ? 'ring-2 ring-cyan-500' : ''}`}
        style={{ backgroundColor: color }}
        onClick={() => inputRef.current?.focus()} 
      >
        <input
          ref={inputRef}
          type="color"
          value={color}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="absolute inset-0 opacity-0 w-full h-full sm:w-10 sm:h-10 cursor-pointer"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default ColorPicker;
