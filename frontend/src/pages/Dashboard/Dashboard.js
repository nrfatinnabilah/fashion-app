import { useState } from "react";

function Dashboard() {
  const stats = [
    { title: "Total Users", value: 1200, icon: "👤", bg: "bg-blue-100", text: "text-blue-600" },
    { title: "Total Products", value: 350, icon: "📦", bg: "bg-green-100", text: "text-green-600" },
    { title: "Total Orders", value: 900, icon: "🛒", bg: "bg-yellow-100", text: "text-yellow-600" },
    { title: "Revenue", value: "$12,000", icon: "💰", bg: "bg-purple-100", text: "text-purple-600" },
  ];

  const recentUsers = [
    { name: "Jane Doe", email: "jane@example.com", joined: "2026-01-10" },
    { name: "John Smith", email: "john@example.com", joined: "2026-01-09" },
    { name: "Alice Johnson", email: "alice@example.com", joined: "2026-01-08" },
  ];

  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col shadow-lg">
        <div className="p-6 text-center border-b border-gray-700">
          <h1 className="text-2xl font-bold">FashionApp</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            {["Dashboard", "Products", "Orders", "Users", "Settings"].map((tab) => (
              <li
                key={tab}
                className={`py-3 px-4 rounded mb-2 cursor-pointer hover:bg-gray-700 transition-colors ${
                  activeTab === tab ? "bg-gray-700 font-semibold" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <p className="text-sm text-gray-400 text-center">© 2026 FashionApp</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded border w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex items-center gap-4">
            <button className="text-xl hover:text-gray-600 transition">🔔</button>
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="rounded-full border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className={`flex items-center p-4 rounded-lg shadow hover:scale-105 transform transition ${stat.bg}`}
            >
              <div className={`text-4xl mr-4 ${stat.text}`}>{stat.icon}</div>
              <div>
                <p className="text-gray-700 font-medium">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow h-64 flex flex-col justify-center items-center">
            <p className="text-gray-400 font-bold text-xl">Line Chart Placeholder</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow h-64 flex flex-col justify-center items-center">
            <p className="text-gray-400 font-bold text-xl">Bar Chart Placeholder</p>
          </div>
        </div>

        {/* Recent Users Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Recent Users</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Joined</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user, idx) => (
                  <tr key={idx} className="hover:bg-gray-100 transition-colors">
                    <td className="py-2 px-4 border">{user.name}</td>
                    <td className="py-2 px-4 border">{user.email}</td>
                    <td className="py-2 px-4 border">{user.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
