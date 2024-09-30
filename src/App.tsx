import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import { Suspense, lazy } from "react";

import { createContext } from "react";
import { Dashboard } from "./pages";
import VideoPlayer from "./pages/Video";

// const Dashboard = lazy((): any => import("./pages/Dashboard"));
export const ThemeContext: any = createContext(null);
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/video/:title" element={<VideoPlayer />}></Route>
      </>
    )
  );
  return (
    <ThemeContext.Provider>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
