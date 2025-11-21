'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { PATHS } from '@/app/config/paths';

export default function ResetPasswordPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            setIsLoading(false);
            return;
        }

        if (formData.password.length < 8) {
            toast.error('Password must be at least 8 characters long');
            setIsLoading(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            toast.success('Password reset successfully!');
            setIsReset(true);
        } catch (error) {
            toast.error('Failed to reset password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isReset) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-[#CBF3BB] to-[#84994F] flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                        <div className="w-16 h-16 bg-[#CBF3BB] rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="text-[#84994F]" size={32} />
                        </div>
                        <h1 className="text-3xl font-bold text-[#84994F] mb-4">Password Reset!</h1>
                        <p className="text-gray-600 mb-8">
                            Your password has been successfully reset. You can now sign in with your new password.
                        </p>
                        <Link
                            href={PATHS.LOGIN}
                            className="w-full bg-[#84994F] text-white font-bold py-3 rounded-lg hover:bg-[#696FC7] transition-colors shadow-md hover:shadow-lg inline-block text-center"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#CBF3BB] to-[#84994F] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-[#CBF3BB] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="text-[#84994F]" size={32} />
                        </div>
                        <h1 className="text-3xl font-bold text-[#84994F] mb-2">Reset Password</h1>
                        <p className="text-gray-600">Enter your new password</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                New Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-10 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] transition-colors bg-white text-black placeholder-gray-400"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                                Confirm New Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-10 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#84994F] transition-colors bg-white text-black placeholder-gray-400"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                >
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Password Requirements */}
                        <div className="text-sm text-gray-600">
                            <p className="mb-2">Password must contain:</p>
                            <ul className="space-y-1 text-xs">
                                <li className={formData.password.length >= 8 ? 'text-green-600' : 'text-gray-500'}>
                                    • At least 8 characters
                                </li>
                                <li className={/[A-Z]/.test(formData.password) ? 'text-green-600' : 'text-gray-500'}>
                                    • One uppercase letter
                                </li>
                                <li className={/[a-z]/.test(formData.password) ? 'text-green-600' : 'text-gray-500'}>
                                    • One lowercase letter
                                </li>
                                <li className={/\d/.test(formData.password) ? 'text-green-600' : 'text-gray-500'}>
                                    • One number
                                </li>
                            </ul>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#CBF3BB] text-[#84994F] font-bold py-3 rounded-lg hover:bg-[#84994F] hover:text-white transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Resetting Password...' : 'Reset Password'}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}