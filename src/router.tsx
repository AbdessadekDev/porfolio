import { createBrowserRouter } from 'react-router-dom'
import ThemeProvider from './layouts/ThemeProvider';
import App from './App';


const router = createBrowserRouter([
    {
        path: '/',
        element: <ThemeProvider />,
        children: [
            {
                path: '/',
                element: <App />
            }
        ]
    }
]);

export default router