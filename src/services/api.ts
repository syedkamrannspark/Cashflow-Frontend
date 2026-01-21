import axios from 'axios';

const API_URL = 'http://100.53.14.81:8000/api/v1';

export const api = axios.create({
    baseURL: API_URL,
});

export const getDashboardStats = async () => {
    try {
        const response = await api.get('/dashboard/stats');
        return response.data;
    } catch (error) {
        console.error("Error fetching stats:", error);
        return null;
    }
};

export const getCashForecast = async () => {
    try {
        const response = await api.get('/dashboard/forecast');
        return response.data;
    } catch (error) {
        console.error("Error fetching forecast:", error);
        return [];
    }
};

export const getCashFlow = async () => {
    try {
        const response = await api.get('/dashboard/flow');
        return response.data;
    } catch (error) {
        console.error("Error fetching flow:", error);
        return [];
    }
};

export const getInvoices = async (skip = 0, limit = 50, status = '') => {
    try {
        const query = status ? `&status=${status}` : '';
        const response = await api.get(`/invoices?skip=${skip}&limit=${limit}${query}`);
        return response.data; // { items: [], total: 0, page: 1, limit: 50 }
    } catch (error) {
        console.error("Error fetching invoices:", error);
        return { items: [], total: 0, page: 1, limit: 50 };
    }
};

export const getInsights = async () => {
    try {
        const response = await api.get('/dashboard/insights');
        return response.data;
    } catch (error) {
        console.error("Error fetching insights:", error);
        return { insights: "Unavailable" };
    }
};
