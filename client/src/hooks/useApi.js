import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export function useApi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE}${endpoint}`)
      .then(res => setData(res.data))
      .catch(() => setError('Erro ao carregar dados'))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading, error };
}

export const api = axios.create({ baseURL: API_BASE });
