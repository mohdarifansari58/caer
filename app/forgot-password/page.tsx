'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft } from 'lucide-react';
import { PATHS } from '@/app/config/paths';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Password reset requested for:', email);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-[#A8BBA3] to-[#84994F] flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                        <div className="w-16 h-16 bg-[#CBF3BB] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="text-[#84994F]" size={32} />
                        </div>
                        <h1 className="text-3xl font-bold text-[#84994F] mb-4">Check Your Email</h1>
                        <p className="text-gray-600 mb-6">
                            We've sent a password reset link to <strong>{email}</strong>
                        </p>
                        <p className="text-sm text-gray-500 mb-8">
                            Didn't receive the email? Check your spam folder or try again.
                        </p>
                        <Link
                            href={PATHS.LOGIN}
                            className="inline-flex items-center gap-2 text-[#696FC7] hover:text-[#84994F] font-semibold"
                        >
                            <ArrowLeft size={20} />
                            Back to Login
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#A8BBA3] to-[#84994F] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-[#A8BBA3] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="text-white" size={32} />
                        </div>
                        <h1 className="text-3xl font-bold text-[#84994F] mb-2">Forgot Password?</h1>
                        <p className="text-gray-600">Enter your email to reset your password</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] transition-colors bg-white text-black placeholder-gray-400"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#A8BBA3] text-white font-bold py-3 rounded-lg hover:bg-[#84994F] transition-colors shadow-md hover:shadow-lg"
                        >
                            Send Reset Link
                        </button>
                    </form>

                    {/* Back to Login */}
                    <div className="text-center mt-8">
                        <Link
                            href={PATHS.LOGIN}
                            className="inline-flex items-center gap-2 text-[#696FC7] hover:text-[#84994F] font-semibold"
                        >
                            <ArrowLeft size={20} />
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}