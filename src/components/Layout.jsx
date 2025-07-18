import Navbar from './Navbar'
import Footer from './Footer'
import ThemeToogle from './ThemeToogle'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ThemeToogle />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  )
}
