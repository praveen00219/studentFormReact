const FormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  options = [],
  required = false,
}) => {
  if (type === "select") {
    return (
      <div>
        <label className="block text-left mb-2 text-sm font-semibold">
          {label} <span className="text-red-500">*</span>
        </label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          required={required}
        >
          <option value="">Select {label}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return (
      <div>
        <label className="block text-left mb-2 text-sm font-semibold">
          {label} <span className="text-red-500">*</span>
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          required={required}
        />
      </div>
    );
  }
};

export default FormInput;
