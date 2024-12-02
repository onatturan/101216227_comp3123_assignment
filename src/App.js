import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EmployeeList from "./components/EmployeeList";
import Logout from "./components/Logout";
import ViewEmployee from "./components/ViewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  // Kullanıcının oturum açıp açmadığını kontrol eden state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Kullanıcının oturum açmasını simüle eden fonksiyon
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Kullanıcının oturumunu kapatmasını simüle eden fonksiyon
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {/* Logout Butonu: Sadece kullanıcı oturum açmışsa gösterilir */}
        {isAuthenticated && <Logout onLogout={handleLogout} />}

        {/* Uygulama Rotaları */}
        <Routes>
          {/* Login ve Signup Sayfaları */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Çalışan Yönetimi Sayfaları (Sadece oturum açmış kullanıcılar için) */}
          {isAuthenticated ? (
            <>
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/view-employee/:id" element={<ViewEmployee />} />
              <Route path="/update-employee/:id" element={<UpdateEmployee />} />
              <Route path="*" element={<Navigate to="/employees" />} />
            </>
          ) : (
            // Eğer oturum açılmamışsa login sayfasına yönlendir
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
