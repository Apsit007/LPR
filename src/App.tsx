
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './layout/nav'
import Search from './modules/search/search'

function Layout() {
  return (
    <>
      <Nav />
      <Outlet /> {/* Nested routes will render here */}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/Login" />
      <Route path="/*" element={<Layout />}>
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App
