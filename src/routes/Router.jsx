import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../auth/Login";
import DefaultLayout from "../layouts/DefaultLayout";
import DashBoard from "../pages/DashBoard";
import UpdateUserPage from "../pages/UpdateUserPage";



const router =  createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                index: true,element: <Navigate to="/auth" replace/> 
            },
            {path: "auth", element: <Login/>},
            {path:'dashboard' , element:<DashBoard/>},
            {path:'dashboard/user' , element:<UpdateUserPage/>}
        ]
    }
]);



export default router;