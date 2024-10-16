import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "@radix-ui/themes/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Registration from "./pages/Registration.jsx";
import FullPost from "./pages/FullPost.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import AddPost from "./pages/AddPost/AddPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/add-post",
    element: <AddPost />,
  },
  {
    path: "/posts/:id",
    element: <FullPost />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  // </StrictMode>
);

//https://redux-toolkit.js.org/introduction/getting-started
//https://reactdev.ru/libs/react-router.6/tutorial/
//https://www.radix-ui.com/
