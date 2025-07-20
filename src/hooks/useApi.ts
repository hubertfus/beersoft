import { useState } from "react";
import axios, { type AxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const useApi = <T = unknown, E = unknown>() => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<E | null>(null);

    const request = async (endpoint: string, options?: AxiosRequestConfig) => {
        setLoading(true);
        try {
            const response = await api<T>(endpoint, options);
            setData(response.data);
            setError(null);
        } catch (err) {
            if (axios.isAxiosError<E>(err) && err.response) {
                setError(err.response.data);
            } else {
                setError(null);
            }
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, request };
};

export default useApi;
