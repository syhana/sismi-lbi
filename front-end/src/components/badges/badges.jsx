export default function Badges({label, className}) {
    return (
      <>
        <span className={`inline-flex items-center rounded-xl ${className} text-xs font-medium ring-1 ring-inset ring-gray-500/10`}>
          {label}
        </span>
      </>
    )
  }
  