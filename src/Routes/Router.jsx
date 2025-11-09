import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Bills from "../Pages/Bills";
import MyPayBills from "../Pages/MyPayBills";
import BillDetails from "../Pages/BillDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("http://localhost:3000/recent-bills")
            },
            {
                path: '/bills',
                Component: Bills,
                loader: () => fetch("http://localhost:3000/bills")
            },
            {
                path: '/bills-details/:id',
                element: <PrivateRoutes>
                    <BillDetails></BillDetails>
                </PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:3000/bills/${params.id}`)
            },
            {
                path: '/myPayBills',
                element: <PrivateRoutes>
                    <MyPayBills></MyPayBills>
                </PrivateRoutes>
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            }
        ]
    }
])

export default router