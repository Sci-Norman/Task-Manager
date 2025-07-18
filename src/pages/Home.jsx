import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="text-center py-12">
      {/* Existing content... */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card title="Task Management">
          Create, complete, and organize your tasks efficiently.
        </Card>
        <Card title="API Integration">
          Fetch and display data from JSONPlaceholder API.
        </Card>
        <Card title="Dark Mode">
          Toggle between light and dark themes for comfortable viewing.
        </Card>
      </div>
    </div>
  )
}
