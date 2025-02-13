import { createBrowserRouter } from "react-router";

import MainLayout from "./MainLayout";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/home/login/Login";
import Register from "../pages/register/Register";
import JobDetails from "../pages/jobDetails/JobDetails";
import Addjob from "../pages/addJob/Addjob";
import Error from "../pages/error/Error";
import MyPostedJob from "../pages/mypostedJob/MyPostedJob";
import UpdatePage from "../pages/updatepage/UpdatePage";
import PrivateRoute from "./PrivateRoute";
import MyBid from "../pages/mybid/MyBid";
import BidRequest from "../pages/BidRequest/BidRequest";
import AllJobs from "../pages/allJobs/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: '/jobs',
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/add-job",
        element: 
          <PrivateRoute>
            <Addjob></Addjob>
          </PrivateRoute>
        
      },
      {
        path: "/registration",
        element: 
        <Register></Register>
        
      },
      {
        path: "/login",
        element: 
        <Login></Login>
      },
      {
        path: "/add-job",
        element: 
          <PrivateRoute>
            <Addjob></Addjob>
          </PrivateRoute>
        
      },
      {
        path: "/my-posted-jobs",
        element: 
          <PrivateRoute>
            <MyPostedJob></MyPostedJob>
          </PrivateRoute>
        
      },
      {
        path: "/my-bids",
        element: 
          <PrivateRoute>
            <MyBid></MyBid>
          </PrivateRoute>
        
      },
      {
        path: "/bid-request",
        element: 
          <PrivateRoute>
          <BidRequest></BidRequest>
          </PrivateRoute>
        
      },
      {
        path: "/job/:id",
        element: 
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/update/:id",
        element: 
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        ,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
    ],
  },
]);
export default router;
