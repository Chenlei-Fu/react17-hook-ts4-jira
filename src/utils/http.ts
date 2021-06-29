import qs from "qs";
import * as auth from 'auth-provider'
import { useAuth } from "../context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token?: string,
  data?: object
}

export const http = async (endpoint: string, {data, token, headers, ...customConfig}:Config = {}) => {
  const config = {
    // 只是默认
    method: 'GET',
    headers: {
      Authorization: token? `Bearer ${token}` : '',
      'Content-Type': data? 'application/json' : ''
    },
    ...customConfig // 会覆盖前面的
  }

  if(config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }

  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const {user} = useAuth()
  // ts utility types： use Generic to pass another type, then utility type do some operation on it.
  return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, {...config, token: user?.token })
};
