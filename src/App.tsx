import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
    </Routes>
</BrowserRouter>
export default App