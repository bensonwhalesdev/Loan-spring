'use client'
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const barData = [
  { month: 'Jan', loans: 4 },
  { month: 'Feb', loans: 6 },
  { month: 'Mar', loans: 2 },
  { month: 'Apr', loans: 5 },
  { month: 'May', loans: 7 },
]

const pieData = [
  { name: 'Paid', value: 100 },
  { name: 'Unpaid', value: 0 },
]

const COLORS = ['#10B981', '#F97316']

const cardStats = [
  { title: 'Active Loans', value: 0, color: 'bg-gradient-to-tr from-[#0A4860] to-[#2B8BA8]' },
  { title: 'Next Due Date', value: '--', color: 'bg-gradient-to-tr from-[#FB923C] to-[#FBBF24]' },
  { title: 'Total Borrowed', value: '$0', color: 'bg-gradient-to-tr from-[#6366F1] to-[#A78BFA]' },
  { title: 'Total Repaid', value: '$0', color: 'bg-gradient-to-tr from-[#10B981] to-[#34D399]' },
]

const Overview = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cardStats.map((stat, i) => (
          <div
            key={i}
            className={`${stat.color} p-4 rounded-2xl text-white shadow-md hover:shadow-lg transition-shadow duration-300`}
          >
            <h4 className="text-sm font-medium tracking-wide">{stat.title}</h4>
            <p className="text-2xl font-semibold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
          <h3 className="text-lg font-semibold text-[#0A4860] mb-4">
            Loans by Month
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="loans" fill="#0A4860" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
          <h3 className="text-lg font-semibold text-[#0A4860] mb-4">
            Repayment Status
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Repayment History Table */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
        <h3 className="text-lg font-semibold text-[#0A4860] mb-4">
          Repayment History
        </h3>
        <div className="overflow-auto rounded-lg border border-gray-100">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium">
              <tr>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3">Amount Paid</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: '--', amount: '$0', status: '--' },
                // { date: '2025-08-01', amount: '$400', status: 'Pending' },
                // { date: '2025-08-15', amount: '$300', status: 'Pending' },
              ].map((entry, i) => (
                <tr
                  key={i}
                  className="border-t text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3">{entry.date}</td>
                  <td className="px-4 py-3">{entry.amount}</td>
                  <td
                    className={`px-4 py-3 font-medium ${
                      entry.status === 'Paid'
                        ? 'text-green-600'
                        : 'text-orange-500'
                    }`}
                  >
                    {entry.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Overview
