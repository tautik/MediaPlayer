import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainConrtainer from "./components/MainConrtainer";
import WatchPage from "./components/WatchPage";
import SearchResult from "./components/SearchResult";
function App() {
  return (
    <Provider store={store}>
      <div className="overflow-x-hidden">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainConrtainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResult />,
      },
    ],
  },
]);

export default App;
