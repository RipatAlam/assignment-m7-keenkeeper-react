import { createBrowserRouter } from "react-router";
import CardDetails from "../pages/CardDetails/CardDetails";
import TimeLinePage from "../pages/timelinepage/TimeLinePage";
import StatsPage from "../pages/statspage/StatsPage";
import ErrorPage from "../pages/errorpage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/HomePage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/carddetails/:id",
        Component: CardDetails
      },
      {
        path: "/timelinepage",
        element: <TimeLinePage />
      },
      {
        path: "/statspage",
        element: <StatsPage />
      }
    ],
    errorElement: <ErrorPage />
  }
])