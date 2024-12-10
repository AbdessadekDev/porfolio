import { createBrowserRouter } from 'react-router-dom'
import ThemeProvider from './layouts/ThemeProvider';
import './translate/i18next';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading';

const App = lazy(() => import('./App'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <ThemeProvider />,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<Loading/>}>
                    <App/>
                </Suspense>
            }
        ]
    }
]);

export default router