export default function Input({label, placeholder, onChange, name, value, className, disabled, type} ) {
    return (
      <div>
        <label htmlFor="label" className={`block mt-5 ${className}`}>
          {label}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type={type}
            name={name}
            className="block w-full rounded-md border-0 py-4 pl-4 text-gray-900 ring-1 ring-inset ring-custom-200 placeholder:text-gray-300 font-semibold required:border-red-500"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            disabled={disabled}
          />
        </div>
      </div>
    )
  }
  