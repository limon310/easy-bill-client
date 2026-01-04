import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Bills from "../Pages/Bills";
import MyPayBills from "../Pages/MyPayBills";
import BillDetails from "../Pages/BillDetails";
import PrivateRoutes from "./PrivateRoutes";
import AboutUs from "../Pages/AboutUs";
import Contuct from "../Pages/Contuct";
import UpdateBills from "../Pages/UpdateBills";
import ErrorElement from "../components/ErrorElement";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("http://localhost:3000/recent-bills"),
            },
            {
                path: '/bills',
                Component: Bills,
                loader: () => fetch("http://localhost:3000/bills")
            },
            {
                path: '/bill-details/:id',
                Component: BillDetails
            },
            {
                path: '/myPayBills',
                element: <PrivateRoutes>
                    <MyPayBills></MyPayBills>
                </PrivateRoutes>,
            },
            // {
            //     path: '/update-bills/:id',
            //     element: <UpdateBills></UpdateBills>,
            //     loader: ({params}) => fetch(`http://localhost:3000/my-bills/${params.id}`)
            // },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            // aditional routes
            {
                path: '/aboutUs',
                Component: AboutUs
            },
            {
                path: '/contuct',
                Component: Contuct
            }
        ]
    }
])

export default router