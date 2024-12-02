const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";

// Ortak API çağrısı fonksiyonu
const apiRequest = async (url, method, body = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const options = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_URL}${url}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `Request failed with status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`Error in API request (${url}):`, error.message);
    throw error;
  }
};

// Kullanıcı kaydı için API çağrısı
export const signupUser = async (userData) =>
  apiRequest("/api/users/signup", "POST", userData);

// Tüm çalışanları getirme
export const fetchEmployees = async () =>
  apiRequest("/api/employees", "GET");

// Çalışan ekleme
export const addEmployee = async (employeeData) =>
  apiRequest("/api/employees", "POST", employeeData);

// Çalışan güncelleme
export const updateEmployee = async (id, updatedData) =>
  apiRequest(`/api/employees/${id}`, "PUT", updatedData);

// Çalışan silme
export const deleteEmployee = async (id) =>
  apiRequest(`/api/employees/${id}`, "DELETE");

// ID ile çalışan bilgisi getirme
export const fetchEmployeeById = async (id) =>
  apiRequest(`/api/employees/${id}`, "GET");

// Çalışan arama (departman veya pozisyona göre)
export const searchEmployees = async (queryParams) =>
  apiRequest(`/api/employees/search?${queryParams}`, "GET");
