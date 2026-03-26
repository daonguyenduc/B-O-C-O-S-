import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, AlertTriangle, Hourglass, XCircle, CheckCircle, ChevronLeft, Building2 } from 'lucide-react';

const SchoolOverview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data
  const school = {
    name: "Trường Tiểu Học Lê Quý Đôn",
    address: "Khu phố Thắng Lợi 2, Phường Dĩ An, thành phố Hồ Chí Minh",
    principal: "Nhâm Thị Thúy",
    email: "Không có thông tin email",
    stats: [
      { title: "Tổng số Sổ", value: 3, bgColor: "bg-blue-100", textColor: "text-blue-700", borderColor: "border-blue-300", tooltip: "Tổng số sổ bao gồm sổ đang hoạt động và sổ đã hoàn thành (lưu trữ)" },
      { title: "Sổ đang hoạt động", value: 3, bgColor: "bg-green-100", textColor: "text-green-700", borderColor: "border-green-300", tooltip: "Sổ đang được hoạt động trong niên khóa (Đối với sổ học sinh cấp Tiểu học, THCS, THPT) hoặc năm học (Đối với mầm non và sổ giáo viên)" },
      { title: "Sổ đã hoàn thành", value: 0, bgColor: "bg-slate-100", textColor: "text-slate-700", borderColor: "border-slate-300", tooltip: "Sổ đã hoạt động hết niên khóa hoặc năm học, được lưu trữ vĩnh viễn" },
      { title: "Sổ chờ cập nhật", value: 1, bgColor: "bg-yellow-100", textColor: "text-yellow-700", borderColor: "border-yellow-300", tooltip: "Sổ đang chờ cập nhật thông tin" },
      { title: "Sổ có lỗi", value: 2, bgColor: "bg-red-100", textColor: "text-red-700", borderColor: "border-red-300", tooltip: "Sổ bị lỗi chữ ký sô XML" },
    ],
    activeRegisters: [
      { id: '74724411HS2530', year: '2025-2030', grade: 'Khối 01', count: 395, status: 'Chưa ký và đóng dấu năm nay' },
      { id: '74724411HS2429', year: '2024-2029', grade: 'Khối 01', count: '—', status: 'Lỗi chữ ký' },
      { id: '74724411HS2328', year: '2023-2028', grade: 'Khối 01', count: '—', status: 'Lỗi chữ ký' },
    ]
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button onClick={() => navigate('/')} className="flex items-center text-blue-600 mb-4 hover:underline">
        <ChevronLeft size={20} /> Quay lại
      </button>
      
      <div className="bg-white px-6 py-5 rounded-lg border border-slate-200 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-50/50 rounded-full blur-2xl -ml-20 -mb-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-50/50 rounded-xl border border-blue-200 shrink-0 shadow-sm">
              <Building2 size={28} className="text-blue-600"/>
            </div>
            <div>
              <h1 className="text-2xl md:text-[26px] font-bold text-slate-800 tracking-tight">{school.name}</h1>
              <p className="text-slate-500 text-sm mt-1 font-medium">Tổng quan tình hình quản lý Sổ Đăng bộ điện tử của đơn vị.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-3 gap-x-8 pt-4 border-t border-slate-300 text-[13px] font-medium text-slate-600">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
              <div>
                <span className="font-bold text-slate-700 mr-1">Địa chỉ:</span> 
                <span>{school.address}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
              <div>
                <span className="font-bold text-slate-700 mr-1">Hiệu trưởng:</span> 
                <span className="text-slate-600">{school.principal}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
              <div>
                <span className="font-bold text-slate-700 mr-1">Email:</span> 
                <span className="text-slate-600">{school.email || 'Không có thông tin email'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        {school.stats.map((stat, index) => (
          <div key={index} className={`group relative ${stat.bgColor} p-4 rounded-md border ${stat.borderColor} transition-all flex flex-col items-center justify-center text-center cursor-help`}>
            <p className={`text-xs font-extrabold ${stat.textColor.replace('600', '500')} uppercase tracking-widest mb-1 opacity-90`}>{stat.title}</p>
            <p className={`text-3xl font-extrabold ${stat.textColor}`}>{stat.value}</p>
            
            {/* Custom Tooltip */}
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 rounded-md border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none font-medium normal-case tracking-normal text-left text-sm leading-relaxed ${stat.bgColor} ${stat.borderColor} ${stat.textColor}`}>
              {stat.tooltip}
              <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 border-b border-r transform rotate-45 ${stat.bgColor} ${stat.borderColor}`}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-300 overflow-hidden">
        <div className="px-6 py-4 border-b border-indigo-100 bg-indigo-50">
          <h2 className="text-lg font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-2">
            <BookOpen size={20} className="text-indigo-700" /> Sổ Đang Hoạt Động Năm Học 2025 - 2026
          </h2>
        </div>
        <div className="p-6">
          <table className="w-full text-sm text-left">
          <thead className="text-[11px] text-slate-700 uppercase tracking-wider bg-slate-100 border-y border-slate-200">
            <tr className="divide-x divide-slate-200">
              <th className="px-4 py-3 font-extrabold">MÃ SỐ / NIÊN KHÓA</th>
              <th className="px-4 py-3 font-extrabold">KHỐI (NĂM NAY)</th>
              <th className="px-4 py-3 font-extrabold">SĨ SỐ</th>
              <th className="px-4 py-3 font-extrabold">TRẠNG THÁI</th>
              <th className="px-4 py-3 font-extrabold text-right">HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {school.activeRegisters.map((reg, index) => (
              <tr key={index} className="hover:bg-slate-50/80 transition-colors divide-x divide-slate-100">
                <td className="px-4 py-3 font-medium">{reg.id} <span className="text-gray-500 font-normal">({reg.year})</span></td>
                <td className="px-4 py-3">{reg.grade}</td>
                <td className="px-4 py-3">{reg.count}</td>
                <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{reg.status}</span></td>
                <td className="px-4 py-3 text-right text-blue-600 hover:underline cursor-pointer">Xem chi tiết</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};

export default SchoolOverview;
