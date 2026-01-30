import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ErrorNotFoundPage from "../pages/ErrorNotFoundPage/ErrorNotFoundPage";

function Routes() {
  return (
    <ReactDomRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorNotFoundPage />} />
    </ReactDomRoutes>
  )
}
export default Routes;