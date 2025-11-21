'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PATHS } from '../config/paths';

interface AuthGuardProps {
    children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Simulate auth check - replace with real auth logic
        const checkAuth = () => {
            const token = localStorage.getItem('authToken');
            const isAuth = !!token;
            setIsAuthenticated(isAuth);

            if (!isAuth) {
                router.push(PATHS.UNAUTHORIZED);
            }
        };

        checkAuth();
    }, [router]);

    if (isAuthenticated === null) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#84994F] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Checking authentication...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null; // Will redirect to unauthorized
    }

    return <>{children}</>;
}