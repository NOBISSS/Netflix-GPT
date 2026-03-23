import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GptSearch from './GptSearch'
import Discover from './Discover'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/gpt-search",
            element: <GptSearch />
        },
        {
            path:"/discover",
            element:<Discover/>
        }
    ]);

    return (
        <div className='w-screen h-screen'>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body