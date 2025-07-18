export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white'
  }

  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
