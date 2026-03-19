import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Body = () => {
    useNowPlayingMovies();    

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ]);

    return (
        <div className='w-screen h-screen'>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body