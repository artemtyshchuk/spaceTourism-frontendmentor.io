import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { DestinationPage } from "pages/DestinationPage";
import { CrewPage } from "pages/CrewPage";
import { TechnologyPage } from "pages/TechnologyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/destination",
        element: <DestinationPage />,
      },
      {
        path: "/crew",
        element: <CrewPage />,
      },
      {
        path: "/technology",
        element: <TechnologyPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
