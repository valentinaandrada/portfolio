import { Route, Routes, useLocation } from "react-router-dom"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import Layout from "../layout/Layout"
import NotFound from "../pages/NotFound"
import { AnimatePresence } from "motion/react"
import Hero from "../pages/Hero"


const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
     
      <Route path="*" element={<NotFound />} />
    </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes
