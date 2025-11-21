import { Suspense } from 'react';
import AuthGuard from '../components/AuthGuard';
import LoadingFallback from '../components/LoadingFallback';
import { Home, TrendingUp, Users, DollarSign, Eye, Heart, MessageSquare } from 'lucide-react';

async function DashboardContent() {
    // Simulate data fetching
    await new Promise((resolve) => setTimeout(resolve, 500));

    const stats = [
        { title: 'Total Properties', value: '24', icon: Home, color: 'bg-[#FFE797]' },
        { title: 'Active Listings', value: '18', icon: TrendingUp, color: 'bg-[#CBF3BB]' },
        { title: 'Total Views', value: '1,234', icon: Eye, color: 'bg-[#FFDBB6]' },
        { title: 'Revenue', value: '$45,600', icon: DollarSign, color: 'bg-[#A8BBA3]' },
    ];

    const recentProperties = [
        { id: 1, title: 'Modern Apartment', price: '$2,500/mo', status: 'Active', views: 45 },
        { id: 2, title: 'Luxury Villa', price: '$850,000', status: 'Sold', views: 123 },
        { id: 3, title: 'Cozy Studio', price: '$1,200/mo', status: 'Pending', views: 67 },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-[#84994F] mb-2">Dashboard</h1>
                    <p className="text-gray-600">Welcome back! Here is your property overview.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className={`${stat.color} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-700 text-sm font-medium">{stat.title}</p>
                                    <p className="text-3xl font-bold text-[#84994F] mt-2">{stat.value}</p>
                                </div>
                                <stat.icon className="text-[#84994F] opacity-80" size={32} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Properties */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold text-[#84994F] mb-6">Recent Properties</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Property</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Views</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentProperties.map((property) => (
                                    <tr key={property.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-4 px-4">
                                            <div className="font-medium text-gray-900">{property.title}</div>
                                        </td>
                                        <td className="py-4 px-4 text-[#696FC7] font-semibold">{property.price}</td>
                                        <td className="py-4 px-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${property.status === 'Active' ? 'bg-[#CBF3BB] text-[#84994F]' :
                                                    property.status === 'Sold' ? 'bg-[#DC0E0E] text-white' :
                                                        'bg-[#FFE797] text-gray-800'
                                                }`}>
                                                {property.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-gray-600">{property.views}</td>
                                        <td className="py-4 px-4">
                                            <button className="text-[#696FC7] hover:text-[#84994F] font-semibold text-sm">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                        <Home className="mx-auto text-[#84994F] mb-4" size={48} />
                        <h3 className="text-xl font-bold text-[#84994F] mb-2">Add Property</h3>
                        <p className="text-gray-600 mb-4">List a new property for rent or sale</p>
                        <button className="px-6 py-2 bg-[#CBF3BB] text-[#84994F] font-bold rounded-lg hover:bg-[#84994F] hover:text-white transition-colors">
                            Add Now
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                        <Users className="mx-auto text-[#84994F] mb-4" size={48} />
                        <h3 className="text-xl font-bold text-[#84994F] mb-2">Manage Clients</h3>
                        <p className="text-gray-600 mb-4">View and manage your client relationships</p>
                        <button className="px-6 py-2 bg-[#FFDBB6] text-[#84994F] font-bold rounded-lg hover:bg-[#84994F] hover:text-white transition-colors">
                            View Clients
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                        <MessageSquare className="mx-auto text-[#84994F] mb-4" size={48} />
                        <h3 className="text-xl font-bold text-[#84994F] mb-2">Messages</h3>
                        <p className="text-gray-600 mb-4">Check your recent messages and inquiries</p>
                        <button className="px-6 py-2 bg-[#696FC7] text-white font-bold rounded-lg hover:bg-[#84994F] transition-colors">
                            View Messages
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function DashboardPage() {
    return (
        <AuthGuard>
            <Suspense fallback={<LoadingFallback />}>
                <DashboardContent />
            </Suspense>
        </AuthGuard>
    );
}