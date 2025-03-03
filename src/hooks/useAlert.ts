import { useState } from "react";

export const useAlert = (defaultTimeout = 3000) => {
    const [alert, setAlert] = useState<{ type: "good" | "bad"; message: string } | null>(null);

    const showAlert = (type: "good" | "bad", message: string, timeout?: number) => {
        setAlert({ type, message });
        setTimeout(() => setAlert(null), timeout ?? defaultTimeout);
    };

    return { alert, showAlert };
};
