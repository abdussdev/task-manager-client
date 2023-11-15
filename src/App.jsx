import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../src/Layout";
import Create from "./pages/Create";
import New from "./pages/New";
import Progress from "./pages/Progress";
import Completed from "./pages/Completed";
import Canceled from "./pages/Canceled";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Otp from "./pages/Otp";
import ForgetPassword from "./pages/ForgetPassword";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="create-task" element={<Create />} />
            <Route path="new" element={<New />} />
            <Route path="progress" element={<Progress />} />
            <Route path="completed" element={<Completed />} />
            <Route path="canceled" element={<Canceled />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/register" element={<ForgetPassword />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
