export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About TaskMaster</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="mb-4">
          TaskMaster was created to demonstrate modern React development practices, 
          including component architecture, state management, and API integration.
        </p>
        <p>
          This project showcases how to build responsive, accessible web applications
          using React, Tailwind CSS, and React Router.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Task creation, completion, and deletion</li>
          <li>Task filtering (All/Active/Completed)</li>
          <li>Persistent storage using localStorage</li>
          <li>Responsive design for all screen sizes</li>
          <li>Dark/Light theme toggle</li>
          <li>API integration with loading states</li>
          <li>Searchable post listings</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['React', 'Tailwind CSS', 'React Router', 'Vite', 'JSONPlaceholder API', 'React Icons'].map(tech => (
            <div key={tech} className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-center">
              {tech}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
