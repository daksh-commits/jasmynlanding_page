import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
    isWaitlistOpen: boolean;
    openWaitlist: () => void;
    closeWaitlist: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    const openWaitlist = () => setIsWaitlistOpen(true);
    const closeWaitlist = () => setIsWaitlistOpen(false);

    return (
        <ModalContext.Provider value={{ isWaitlistOpen, openWaitlist, closeWaitlist }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
