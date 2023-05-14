import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSupriseMe,
  handleSupriseMe,
}) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSupriseMe && (
          <button
            type="button"
            onClick={handleSupriseMe}
            className="rounded-[5px] bg-[#ECECF1] px-2 py-1 text-xs font-semibold text-black"
          >
            Suprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#4649ff] focus:ring-[#4649ff]"
      />
    </div>
  );
};

export default FormField;
