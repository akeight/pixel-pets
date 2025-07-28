import { useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import CharacterDetailsPage from './pages/CharacterDetailsPage.jsx'
import AddCharacterPage from './pages/AddCharacterPage.jsx'
import CharacterGalleryPage from './pages/CharacterGalleryPage.jsx'
import UpdateCharacterPage from './pages/UpdateCharacterPage.jsx'
import Layout from './components/Layout.jsx'

function App() {

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'new-character', element: <AddCharacterPage /> },
        { path: 'characters', element: <CharacterGalleryPage /> },
        { path: 'characters/:id', element: <CharacterDetailsPage /> },
        { path: 'characters/:id/edit', element: <UpdateCharacterPage /> },
      ],
    },
  ]

  const element = useRoutes(routes)
  return element
}

export default App
