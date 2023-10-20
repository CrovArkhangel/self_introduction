import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Component from 'pages/Component'

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/component" element={<Component />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
