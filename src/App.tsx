import NavBar from "./components/NavBar.tsx";
import Contact from "./pages/Contact.tsx";
import Projects from "./pages/Projects.tsx";
import Home from "./pages/Home.tsx"

function App() {

  return (
      <div className="min-h-screen">
        <NavBar />
        <main className="bg-black min-h-screen">
          {/* temp styles */}
          <Home />
          <Projects />
          <Contact />
        </main>
      </div>
  )
}

export default App
