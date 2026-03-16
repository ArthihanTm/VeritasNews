import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { WorldPage } from "./pages/WorldPage";
import { RegionalPage } from "./pages/RegionalPage";
import { FactCheckPage } from "./pages/FactCheckPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "world", element: <WorldPage /> },
      { path: "regional", element: <RegionalPage /> },
      { path: "fact-check", element: <FactCheckPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
