/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardCard from './components/DashboardCard';
import SchoolList from './components/SchoolList';
import SchoolDetail from './components/SchoolDetail';
import StudentBookDetail from './components/StudentBookDetail';
import StudentDetail from './components/StudentDetail';
import TeacherBookDetail from './components/TeacherBookDetail';
import TeacherDetail from './components/TeacherDetail';
import { School, UserX, FilePlus, FileCheck, ShieldAlert, Trophy, Users, Menu, X, BookOpen, BarChart2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Dashboard = ({ activeTab }: any) => {
    const [showChart, setShowChart] = useState(false);

    const chartData = [
      { name: 'Mầm non', value: 2150, color: '#3b82f6' }, // Blue 500
      { name: 'Tiểu học', value: 2841, color: '#6366f1' }, // Indigo 500
      { name: 'THCS', value: 1450, color: '#f43f5e' }, // Rose 500
      { name: 'THPT', value: 750, color: '#10b981' }, // Emerald 500
    ];

    const teacherData = {
      title: "Quản lý Sổ Đăng Bộ giáo viên",
      year: "Năm học 2025 - 2026",
      description: "Giám sát, tra cứu và quản lý Sổ Đăng Bộ điện tử của cán bộ, giáo viên, nhân viên từ các đơn vị trường học.\nCập nhật: 23/03/2026 - 02:15 PM",
      cards: [
        { title: "Tổng số trường", value: 7191, unit: "Trường", tooltip: "Tổng số trường học thời điểm hiện tại trên địa bàn Thành phố Hồ Chí Minh", bgColor: "bg-blue-100", textColor: "text-blue-900", borderColor: "border-blue-400", icon: <School className="text-blue-700" /> },
        { title: "Chưa đăng nhập", value: 1425, unit: "Trường", tooltip: "Tổng số trường chưa từng đăng nhập vào hệ thống - Trang sodangbo.hcm.edu.vn", bgColor: "bg-indigo-100", textColor: "text-indigo-900", borderColor: "border-indigo-400", icon: <UserX className="text-indigo-700" /> },
        { title: "Chưa khởi tạo sổ", value: 6276, unit: "Trường", tooltip: "Tổng số trường đã đăng nhập hệ thống nhưng chưa thực hiện khởi tạo sổ đăng bộ", bgColor: "bg-orange-100", textColor: "text-orange-900", borderColor: "border-orange-400", icon: <FilePlus className="text-orange-700" /> },
        { title: "Đã ban hành sổ", value: 522, unit: "Sổ", tooltip: "Tổng số sổ giáo viên đã được ban hành trong năm nay", bgColor: "bg-amber-100", textColor: "text-amber-900", borderColor: "border-amber-400", icon: <FileCheck className="text-amber-700" /> },
        { title: "Lỗi chữ ký số", value: 517, unit: "Sổ", tooltip: "Tổng số sổ giáo viên bị lỗi file chữ ký số XML", bgColor: "bg-rose-100", textColor: "text-rose-900", borderColor: "border-rose-400", icon: <ShieldAlert className="text-rose-700" /> },
        { title: "Đã hoàn thành", value: 0, unit: "Sổ", tooltip: "Tổng số sổ giáo viên đã hoàn thành xong bước ký số và đóng dấu cuối năm", bgColor: "bg-emerald-100", textColor: "text-emerald-900", borderColor: "border-emerald-400", icon: <Trophy className="text-emerald-700" /> },
      ]
    };
  
    const studentData = {
      title: "Quản lý Sổ Đăng Bộ học sinh",
      year: "Năm học 2025 - 2026",
      description: "Giám sát, tra cứu và quản lý Sổ Đăng Bộ điện tử Học sinh từ các đơn vị trường học.\nCập nhật: 23/03/2026 - 02:15 PM",
      cards: [
        { title: "Tổng số trường", value: 7191, unit: "Trường", tooltip: "Tổng số trường học thời điểm hiện tại trên địa bàn Thành phố Hồ Chí Minh", bgColor: "bg-blue-100", textColor: "text-blue-900", borderColor: "border-blue-400", icon: <School className="text-blue-700" /> },
        { title: "Chưa đăng nhập", value: 1284, unit: "Trường", tooltip: "Tổng số trường chưa từng đăng nhập vào hệ thống - Trang sodangbo.hcm.edu.vn", bgColor: "bg-indigo-100", textColor: "text-indigo-900", borderColor: "border-indigo-400", icon: <UserX className="text-indigo-700" /> },
        { title: "Chưa khởi tạo sổ", value: 6007, unit: "Trường", tooltip: "Tổng số trường đã đăng nhập hệ thống nhưng chưa thực hiện khởi tạo sổ đăng bộ", bgColor: "bg-orange-100", textColor: "text-orange-900", borderColor: "border-orange-400", icon: <FilePlus className="text-orange-700" /> },
        { title: "Đã ban hành sổ", value: 734, unit: "Sổ", tooltip: "Tổng số sổ học sinh đã được ban hành trong năm nay", bgColor: "bg-amber-100", textColor: "text-amber-900", borderColor: "border-amber-400", icon: <FileCheck className="text-amber-700" /> },
        { title: "Lỗi chữ ký số", value: 636, unit: "Sổ", tooltip: "Tổng số sổ học sinh bị lỗi file chữ ký số XML", bgColor: "bg-rose-100", textColor: "text-rose-900", borderColor: "border-rose-400", icon: <ShieldAlert className="text-rose-700" /> },
        { title: "Đã hoàn thành", value: 1, unit: "Sổ", tooltip: "Tổng số sổ học sinh đã hoàn thành xong bước ký số và đóng dấu cuối năm", bgColor: "bg-emerald-100", textColor: "text-emerald-900", borderColor: "border-emerald-400", icon: <Trophy className="text-emerald-700" /> },
      ]
    };

  const data = activeTab === 'teacher' ? teacherData : studentData;

  return (
    <>
      <div className="bg-white rounded-lg mb-6 px-6 py-5 shadow-sm border border-blue-600 relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-50/50 rounded-full blur-2xl -ml-20 -mb-20"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex p-3 bg-blue-50 rounded-lg shadow-sm border border-slate-300 shrink-0">
              {activeTab === 'teacher' ? <BookOpen size={28} className="text-blue-600" /> : <Users size={28} className="text-blue-600" />}
            </div>
            <div>
              <h1 className="text-2xl md:text-[26px] font-bold text-blue-900 mb-1 tracking-tight uppercase">
                {data.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-500 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Cập nhật: 23/03/2026 - 02:15 PM</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-bold text-sm border border-slate-300 uppercase tracking-wide">
              {data.year}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-indigo-600 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-indigo-700 bg-indigo-600 flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-indigo-100" />
          <h2 className="text-lg font-bold text-white uppercase tracking-wider">Số liệu báo cáo tổng quan</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.cards.map((card, index) => (
              <div key={index}>
                <DashboardCard 
                  title={card.title}
                  value={card.value}
                  unit={card.unit}
                  tooltip={card.tooltip}
                  bgColor={card.bgColor}
                  textColor={card.textColor}
                  borderColor={card.borderColor}
                  icon={card.icon}
                  onClick={card.title === "Tổng số trường" ? () => setShowChart(true) : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {showChart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-300">
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
              <div>
                <h3 className="text-base font-bold text-slate-800 uppercase tracking-tight leading-none mb-0.5">Chi tiết tổng số trường</h3>
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Thống kê hệ thống • 2025-2026</p>
              </div>
              <button 
                onClick={() => setShowChart(false)}
                className="p-1 hover:bg-slate-100 rounded-md transition-all text-slate-400 hover:text-slate-600 active:scale-95"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="p-5">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Chart Section */}
                <div className="w-full md:w-1/2 relative flex flex-col items-center">
                  <div className="h-[220px] w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={85}
                          paddingAngle={4}
                          dataKey="value"
                          animationBegin={0}
                          animationDuration={800}
                          stroke="none"
                          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} className="outline-none" />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            borderRadius: '6px', 
                            border: 'none', 
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                            padding: '6px 10px',
                            fontSize: '11px'
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    
                    {/* Center text for Donut Chart */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-2xl font-bold text-slate-800 leading-none tracking-tighter">7.191</span>
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Tổng số trường</span>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Cơ cấu trường theo cấp học</p>
                  </div>
                </div>

                {/* Legend Section */}
                <div className="w-full md:w-1/2">
                  <div className="grid grid-cols-1 gap-2">
                    {chartData.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-200">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <div className="flex flex-col">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-0.5">{item.name}</span>
                            <span className="text-xs font-bold text-slate-700 leading-none">{item.value.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs font-bold text-slate-800 leading-none mb-0.5">{((item.value / 7191) * 100).toFixed(1)}%</span>
                          <span className="text-[7px] font-bold text-slate-400 uppercase tracking-tighter">Tỷ trọng</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-indigo-600 overflow-hidden">
        <div className="px-6 py-4 border-b border-indigo-700 bg-indigo-600 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <School className="w-5 h-5 text-indigo-100" />
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">Danh sách sổ đăng bộ theo từng trường</h2>
          </div>
        </div>
        <SchoolList activeTab={activeTab} />
      </div>
    </>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'teacher' | 'student'>('student');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-50">
        {isSidebarOpen && (
          <Sidebar 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            onClose={() => setIsSidebarOpen(false)} 
          />
        )}
        
        <div className="flex-1 flex flex-col relative">
          {!isSidebarOpen && (
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="fixed top-4 left-4 z-40 p-2 bg-white border border-slate-300 rounded-lg shadow-md text-slate-600 hover:text-blue-600 transition-all active:scale-95"
              title="Mở menu"
            >
              <Menu size={20} />
            </button>
          )}
          
          <main className="p-6 md:p-10 max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Dashboard activeTab={activeTab} />} />
              <Route path="/school/:id" element={<SchoolDetail />} />
              <Route path="/student-book/:bookId" element={<StudentBookDetail />} />
              <Route path="/student/:studentId" element={<StudentDetail />} />
              <Route path="/teacher-book/:bookId" element={<TeacherBookDetail />} />
              <Route path="/teacher/:teacherId" element={<TeacherDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
