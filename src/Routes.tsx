import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Menu } from './pages/Menu'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/About" element={<About />} />
            <Route
                path="*"
                element={
                    <main className='h-screen flex flex-col justify-center items-center'>
                        <p className='text-2xl'>There's nothing here! 👀</p>
                    </main>
                }
            />
        </Routes>
    )
}