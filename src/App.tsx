import AppRoutes from './routes/Routes'
import Footer from './components/Footer/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  )
}

export default App
