import Firstpage from "../componnents/firstpage"
import New from "../componnents/new"
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Menu from "../componnents/menu"
import Contact from "../componnents/contact"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Firstpage/>}/>
      <Route path="Menu" element={<Menu/>}/>
      <Route path="new" element={<New/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
