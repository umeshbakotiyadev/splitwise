import { useEffect, useState } from 'react'

export default function useDebounceHook<T>(value: T, delay?: number, anyFN?: () => any): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)
    useEffect(() => {
        const timer = setTimeout(() => { setDebouncedValue(value); (anyFN && anyFN()); }, delay || 500);
        return () => { clearTimeout(timer); }
    }, [value, delay]);
    return debouncedValue;
}