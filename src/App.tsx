import NavBar from "./components/NavBar.tsx";

function Home() {
  return null;
}

function App() {

  return (
      <div className="min-h-screen">
        <NavBar></NavBar>
        <main>
          <Home></Home>
        </main>
      </div>
  )
}

export default App
