import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ServiceList from "./pages/ServiceList";
import LoginPage from "./pages/LoginPage";
import AdminDashboardPage from "./pages/Admin/AdminDashBoard";
import AdminCreateService from "./pages/Admin/AdminCreateService";
import AdminServiceListPage from "./pages/Admin/AdminServiceLists";
import AdminDetailService from "./pages/Admin/AdminDetailService";
import AdminCreateCategoryPage from "./pages/Admin/AdminCreateCategory";
import AdminEditCategoryPage from "./pages/Admin/AdminEditCategory";
import AdminDetailCategoryPage from "./pages/Admin/AdminDetailCategory";
import AdminEditService from "./pages/Admin/AdminEditService";
import { useAuth } from "./contexts/authentication";
import OrderHistory from "./pages/OrderHistory.js";
import ServiceDetailPage from "./pages/ServiceDetailPage";

function App() {
  const { isAuthenticated } = useAuth();
  const user = JSON.parse(window.localStorage.getItem("user"));

  return (
    <>
      {isAuthenticated ? (
        user.role === "admin" ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service-list" element={<ServiceList />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/order-history/:userId" element={<OrderHistory />} />
            <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
            <Route
              path="/admin-dashboard/categories"
              element={<AdminDashboardPage />}
            />
            <Route
              path="/admin-dashboard/services"
              element={<AdminServiceListPage />}
            />
            <Route
              path="/admin-dashboard/service/view/:serviceId"
              element={<AdminDetailService />}
            />
            < Route
              path="/admin-dashboard/service/edit/:serviceId"
              element={<AdminEditService />}
            />
            <Route
              path="/admin-dashboard/service/create"
              element={<AdminCreateService />}
            />
            <Route
              path="/admin-dashboard/category/create"
              element={<AdminCreateCategoryPage />}
            />
            <Route
              path="/admin-dashboard/category/edit/:categoryId"
              element={<AdminEditCategoryPage />}
            />
            <Route
              path="/admin-dashboard/category/view/:categoryId"
              element={<AdminDetailCategoryPage />}
            />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service-list" element={<ServiceList />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/order-history/:userId" element={<OrderHistory />} />
            <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        )
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service-list" element={<ServiceList />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
          <Route path="/service-list/select" element={<ServiceDetailPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
