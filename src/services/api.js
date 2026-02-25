import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle responses
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

// Auth APIs
export const authAPI = {
  register: (data) => apiClient.post('/auth/register', data),
  login: (data) => apiClient.post('/auth/login', data),
};

// Product APIs
export const productAPI = {
  getAll: (params) => apiClient.get('/products', { params }),
  getById: (id) => apiClient.get(`/products/${id}`),
  create: (data) => apiClient.post('/products', data),
  update: (id, data) => apiClient.put(`/products/${id}`, data),
  delete: (id) => apiClient.delete(`/products/${id}`),
};

// Cart APIs
export const cartAPI = {
  getCart: () => apiClient.get('/cart'),
  addItem: (data) => apiClient.post('/cart/add', data),
  removeItem: (data) => apiClient.post('/cart/remove', data),
  clearCart: () => apiClient.post('/cart/clear'),
};

// Order APIs
export const orderAPI = {
  create: (data) => apiClient.post('/orders', data),
  getAll: () => apiClient.get('/orders'),
  getById: (id) => apiClient.get(`/orders/${id}`),
};

// Farmer APIs
export const farmerAPI = {
  getAll: () => apiClient.get('/farmers'),
  getProfile: (id) => apiClient.get(`/farmers/${id}`),
};

// User APIs
export const userAPI = {
  getProfile: () => apiClient.get('/users/profile'),
  updateProfile: (data) => apiClient.put('/users/profile', data),
};

export default apiClient;