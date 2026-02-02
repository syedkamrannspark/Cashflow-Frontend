import axios from 'axios';

const API_URL = '/api/v1';

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
        const response = await api.get(`/invoices/?skip=${skip}&limit=${limit}${query}`);
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

// File/Document Upload API endpoints
export const getUploadedFiles = async () => {
    try {
        const response = await api.get('/documents');
        return response.data;
    } catch (error) {
        console.error("Error fetching uploaded files:", error);
        throw error;
    }
};

export const getDocumentById = async (documentId: number) => {
    try {
        const response = await api.get(`/documents/${documentId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching document:", error);
        throw error;
    }
};

export const saveMetadata = async (payload: {
    document_id: number;
    columns: Array<{
        column_name: string;
        data_type: string;
        connection_key: string;
        alias: string;
        description: string;
        is_target: boolean;
        is_helper: boolean;
    }>;
}) => {
    try {
        const response = await api.post('/metadata/save', payload);
        return response.data;
    } catch (error) {
        console.error("Error saving metadata:", error);
        throw error;
    }
};

export const processMetadata = async (documentId: number) => {
    try {
        const response = await api.post(`/documents/${documentId}/process`);
        return response.data;
    } catch (error) {
        console.error("Error processing metadata:", error);
        throw error;
    }
};

export const deleteUploadedFile = async (documentId: number) => {
    try {
        const response = await api.delete(`/documents/${documentId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting document:", error);
        throw error;
    }
};

// File upload endpoints
export const uploadSingleFile = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        const response = await api.post('/documents/upload-single', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

export const uploadMultipleFiles = async (files: File[]) => {
    try {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append('files', file);
        });
        const response = await api.post('/documents/upload-multiple', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading multiple files:", error);
        throw error;
    }
};

export const checkDocumentByName = async (filename: string) => {
    try {
        const response = await api.get('/documents/check-by-name', {
            params: { filename },
        });
        return response.data;
    } catch (error) {
        console.error("Error checking document:", error);
        throw error;
    }
};
