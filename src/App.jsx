import { useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import CrewmateDetailsPage from './pages/CrewmateDetailsPage.jsx'
import NewCrewmatePage from './pages/NewCrewmatePage.jsx'
import CrewmateGalleryPage from './pages/CrewmateGalleryPage.jsx'
import UpdateCrewmatePage from './pages/UpdateCrewmatePage.jsx'
import Layout from './components/Layout.jsx'

function App() {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'new-crewmate', element: <NewCrewmatePage /> },
        { path: 'crewmates', element: <CrewmateGalleryPage /> },
        { path: 'crewmates/:id', element: <CrewmateDetailsPage /> },
        { path: 'crewmates/:id/edit', element: <UpdateCrewmatePage /> },
      ],
    },
  ]

  const element = useRoutes(routes)
  return element
}

export default App
