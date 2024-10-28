import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Erro ao acessar localStorage:", error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (valueToStore !== null) {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } else {
                window.localStorage.removeItem(key); 
            }
        } catch (error) {
            console.error("Erro ao salvar no localStorage:", error);
        }
    };

    
    useEffect(() => {
        const handleBeforeUnload = () => {
            window.localStorage.removeItem(key); 
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [key]);

    return [storedValue, setValue];
}

export default useLocalStorage;
