import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);
// 在一个函数里，改变传入的对象是不好的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化后设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完后才会运行，最后就只有最后一个存活下来了，就只会处理最后的输入
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
