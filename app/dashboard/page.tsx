
'use client';

import { ArrowRight, BarChart2, Bell, Briefcase, CheckCircle, ChevronDown, DollarSign, Download, Filter, Home, Inbox, Layers, LogOut, PlusCircle, Search, Settings, Users } from "lucide-react";
import { useState } from 'react';

const StatCard = ({ title, value, change, icon, iconBgColor }: { title: string, value: string, change: string, icon: React.ReactNode, iconBgColor: string }) => (
    <div className="bg-gray-800/50 border border-gray-700/60 rounded-xl p-5 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <div className="flex items-start justify-between">
            <div className={`p-3 rounded-lg ${iconBgColor}`}>
                {icon}
            </div>
            <div className="text-right">
                <p className="text-sm text-gray-400 font-medium">{title}</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">{value}</p>
                <p className="text-sm text-green-400 mt-1">{change}</p>
            </div>
        </div>
    </div>
);

const recentActivities = [
    { user: 'Olivia Martin', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026703d', action: 'upgraded to the Pro plan.', time: '10m ago' },
    { user: 'John Doe', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e', action: 'signed up.', time: '1h ago' },
    { user: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d', action: 'cancelled their subscription.', time: '3h ago' },
    { user: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706e', action: 'updated their payment method.', time: '1d ago' },
    { user: 'Emily White', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d', action: 'signed up.', time: '2d ago' },
];

const transactions = [
    { id: '#3066', name: 'Liam Johnson', amount: ' $250.00', date: '23/04/24', status: 'Paid' },
    { id: '#3065', name: 'Olivia Smith', amount: ' $150.00', date: '23/04/24', status: 'Paid' },
    { id: '#3064', name: 'Noah Williams', amount: ' $350.00', date: '22/04/24', status: 'Pending' },
    { id: '#3063', name: 'Emma Brown', amount: ' $450.00', date: '22/04/24', status: 'Paid' },
    { id: '#3062', name: 'Ava Jones', amount: ' $550.00', date: '21/04/24', status: 'Failed' },
];

const Sidebar = () => (
    <div className="bg-gray-900/70 backdrop-blur-xl w-64 p-6 flex flex-col justify-between border-r border-gray-800">
        <div>
            <div className="flex items-center space-x-3 mb-10">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Layers className="text-white" />
                </div>
                <span className="text-xl font-bold text-gray-100">Untitled UI</span>
            </div>

            <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input type="text" placeholder="Search" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <nav className="space-y-2">
                <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-300 bg-gray-800/50 rounded-lg"><Home className="w-5 h-5" /> <span>Home</span></a>
                <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-400 hover:bg-gray-800/50 rounded-lg"><BarChart2 className="w-5 h-5" /> <span>Dashboard</span><span className="ml-auto bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full">10</span></a>
                <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-400 hover:bg-gray-800/50 rounded-lg"><Briefcase className="w-5 h-5" /> <span>Projects</span></a>
                <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-400 hover:bg-gray-800/50 rounded-lg"><DollarSign className="w-5 h-5" /> <span>Billing</span></a>
                <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-400 hover:bg-gray-800/50 rounded-lg"><Users className="w-5 h-5" /> <span>Users</span></a>
                <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-400 hover:bg-gray-800/50 rounded-lg"><Inbox className="w-5 h-5" /> <span>Inbox</span><span className="ml-auto bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">New</span></a>
            </nav>
        </div>

        <div className="space-y-3">
            <a href="#" className="flex items-center space-x-3 px-4 py-2.5 text-gray-400 hover:bg-gray-800/50 rounded-lg"><Settings className="w-5 h-5" /> <span>Settings</span></a>
             <div className="border-t border-gray-800 my-4"></div>
            <div className="flex items-center space-x-3">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-semibold text-gray-200">Olivia Rhye</p>
                    <p className="text-sm text-gray-500">olivia@untitledui.com</p>
                </div>
                <LogOut className="w-5 h-5 text-gray-500 ml-auto cursor-pointer" />
            </div>
        </div>
    </div>
);

export default function Dashboard() {
    const [timeframe, setTimeframe] = useState('Last 30 days');

    return (
        <div className="bg-gray-900 text-white min-h-screen flex font-sans antialiased">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex items-center justify-between pb-6 border-b border-gray-800">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-100">Welcome back, Olivia</h1>
                        <p className="text-gray-400 mt-1">Track, manage and forecast your customers and orders.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-gray-800/70 border border-gray-700/60 px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center space-x-2 hover:bg-gray-700/70">
                            <Download className="w-4 h-4" /> <span>Download</span>
                        </button>
                        <button className="bg-indigo-600 px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center space-x-2 hover:bg-indigo-700">
                            <PlusCircle className="w-4 h-4" /> <span>Add</span>
                        </button>
                    </div>
                </header>

                <div className="mt-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-200">Dashboard</h2>
                        <div className="flex items-center space-x-2 bg-gray-800/70 border border-gray-700/60 p-1 rounded-lg">
                            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-700/50">Overview</button>
                            <button className="px-3 py-1.5 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-700/30">Analytics</button>
                            <button className="px-3 py-1.5 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-700/30">Reports</button>
                             <button className="px-3 py-1.5 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-700/30">Notifications</button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <StatCard title="Total Revenue" value="$45,231.89" change="+20.1% from last month" icon={<DollarSign className="text-green-400" />} iconBgColor="bg-green-900/50" />
                    <StatCard title="Subscriptions" value="+2350" change="+180.1% from last month" icon={<Users className="text-blue-400" />} iconBgColor="bg-blue-900/50" />
                    <StatCard title="Sales" value="+12,234" change="+19% from last month" icon={<Briefcase className="text-yellow-400" />} iconBgColor="bg-yellow-900/50" />
                    <StatCard title="Active Now" value="+573" change="+201 since last hour" icon={<Bell className="text-red-400" />} iconBgColor="bg-red-900/50" />
                </div>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                     <div className="lg:col-span-2 bg-gray-800/50 border border-gray-700/60 rounded-xl p-6">
                         <h3 className="text-lg font-semibold text-gray-200 mb-4">Recent Transactions</h3>
                         <div className="overflow-x-auto">
                             <table className="w-full text-sm text-left text-gray-400">
                                 <thead className="text-xs text-gray-400 uppercase bg-gray-700/30">
                                     <tr>
                                         <th scope="col" className="px-6 py-3">Invoice</th>
                                         <th scope="col" className="px-6 py-3">Name</th>
                                         <th scope="col" className="px-6 py-3">Amount</th>
                                         <th scope="col" className="px-6 py-3">Date</th>
                                         <th scope="col" className="px-6 py-3">Status</th>
                                         <th scope="col" className="px-6 py-3"><span className="sr-only">Download</span></th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     {transactions.map((t, i) => (
                                         <tr key={i} className="border-b border-gray-700/60 hover:bg-gray-700/20">
                                             <td className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">{t.id}</td>
                                             <td className="px-6 py-4">{t.name}</td>
                                             <td className="px-6 py-4">{t.amount}</td>
                                             <td className="px-6 py-4">{t.date}</td>
                                             <td className="px-6 py-4">
                                                 <span className={`px-2 py-1 text-xs font-medium rounded-full ${t.status === 'Paid' ? 'bg-green-900/70 text-green-300' : t.status === 'Pending' ? 'bg-yellow-900/70 text-yellow-300' : 'bg-red-900/70 text-red-300'}`}>
                                                     {t.status}
                                                 </span>
                                             </td>
                                             <td className="px-6 py-4 text-right"><a href="#" className="text-indigo-400 hover:underline">Download</a></td>
                                         </tr>
                                     ))}
                                 </tbody>
                             </table>
                         </div>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700/60 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-200 mb-4">Recent Activity</h3>
                        <div className="space-y-6">
                            {recentActivities.map((activity, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <img src={activity.avatar} alt="" className="w-10 h-10 rounded-full"/>
                                    <div>
                                        <p className="text-sm text-gray-300">
                                            <span className="font-semibold text-gray-200">{activity.user}</span> {activity.action}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
