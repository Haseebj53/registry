import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/search/SearchPage";
import { SearchLoader } from "./pages/search/seachLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/search",
        element: <SearchPage />,
        loader: SearchLoader,
      },
      { path: "/packages/:name", element: <DetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
