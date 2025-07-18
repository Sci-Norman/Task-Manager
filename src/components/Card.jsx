export default function Card({ title, children, className = '' }) {
  return (
    <div className={`border rounded-lg shadow-md overflow-hidden ${className}`}>
      {title && (
        <h3 className="font-bold p-4 bg-gray-100 dark:bg-gray-800 border-b">
          {title}
        </h3>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}
