import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Building2, Search, BookOpen, Archive } from 'lucide-react';

const SchoolDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.state?.activeTab || 'student';
  const schoolName = location.state?.schoolName || (activeTab === 'teacher' ? "Trường THCS Lai Hưng" : "Trường Tiểu Học Lê Quý Đôn");

  const school = {
    name: schoolName,
    description: "Tổng quan tình hình quản lý Sổ Đăng bộ điện tử của đơn vị.",
    address: "Khu phố Thắng Lợi 2, Phường Dĩ An, thành phố Hồ Chí Minh",
    principal: "Nhâm Thị Thúy",
    email: "Không có thông tin email",
    summary: activeTab === 'teacher' ? [
      { title: "Tổng số Sổ", value: 1, color: "text-blue-700", bg: "bg-blue-100", border: "border-blue-300", tooltip: "Tổng số sổ bao gồm sổ đang hoạt động và sổ đã hoàn thành (lưu trữ)" },
      { title: "Sổ đang hoạt động", value: 1, color: "text-green-700", bg: "bg-green-100", border: "border-green-300", tooltip: "Sổ đang được hoạt động trong niên khóa (Đối với sổ học sinh cấp Tiểu học, THCS, THPT) hoặc năm học (Đối với mầm non và sổ giáo viên)" },
      { title: "Sổ đã hoàn thành", value: 0, color: "text-slate-700", bg: "bg-slate-100", border: "border-slate-300", tooltip: "Sổ đã hoạt động hết niên khóa hoặc năm học, được lưu trữ vĩnh viễn" },
      { title: "Sổ có lỗi", value: 0, color: "text-red-700", bg: "bg-red-100", border: "border-red-300", tooltip: "Sổ bị lỗi chữ ký sô XML" },
    ] : [
      { title: "Tổng số Sổ", value: 2, color: "text-blue-700", bg: "bg-blue-100", border: "border-blue-300", tooltip: "Tổng số sổ bao gồm sổ đang hoạt động và sổ đã hoàn thành (lưu trữ)" },
      { title: "Sổ đang hoạt động", value: 1, color: "text-green-700", bg: "bg-green-100", border: "border-green-300", tooltip: "Sổ đang được hoạt động trong niên khóa (Đối với sổ học sinh cấp Tiểu học, THCS, THPT) hoặc năm học (Đối với mầm non và sổ giáo viên)" },
      { title: "Sổ đã hoàn thành", value: 1, color: "text-slate-700", bg: "bg-slate-100", border: "border-slate-300", tooltip: "Sổ đã hoạt động hết niên khóa hoặc năm học, được lưu trữ vĩnh viễn" },
      { title: "Sổ có lỗi", value: 0, color: "text-red-700", bg: "bg-red-100", border: "border-red-300", tooltip: "Sổ bị lỗi chữ ký sô XML" },
    ],
    activeBooks: activeTab === 'teacher' ? [
      { code: 'GV-ND-2025 (2025-2026)', grade: 'Cán bộ - Giáo viên', studentCount: 65, status: 'Đã đồng bộ dữ liệu', statusColor: 'text-blue-700 bg-blue-50 border-blue-100' },
    ] : [
      { code: '74724411HS2530 (2025-2030)', grade: 'Khối 01', studentCount: 395, status: 'Đã đồng bộ dữ liệu', statusColor: 'text-blue-700 bg-blue-50 border-blue-100' },
      { code: '74724411HS2429 (2024-2029)', grade: 'Khối 02', studentCount: '—', status: 'Chưa thực hiện', statusColor: 'text-slate-500 bg-slate-50 border-slate-100' },
      { code: '74724411HS2328 (2023-2028)', grade: 'Khối 03', studentCount: '—', status: 'Chưa thực hiện', statusColor: 'text-slate-500 bg-slate-50 border-slate-100' },
      { code: '74724411HS2227 (2022-2027)', grade: 'Khối 04', studentCount: '—', status: 'Chưa thực hiện', statusColor: 'text-slate-500 bg-slate-50 border-slate-100' },
      { code: '74724411HS2126 (2021-2026)', grade: 'Khối 05', studentCount: '—', status: 'Chưa thực hiện', statusColor: 'text-slate-500 bg-slate-50 border-slate-100' },
    ],
    completedBooks: activeTab === 'teacher' ? [] : [
      { code: '74724411HS2025 (2020-2025)', grade: 'Khối 05', studentCount: 350, status: 'Đã khóa sổ niên khóa', statusColor: 'text-green-700 bg-green-50 border-green-100' }
    ]
  };

  const handleBookClick = (bookCode: string) => {
    const code = bookCode.split(' ')[0];
    if (activeTab === 'teacher') {
      navigate(`/teacher-book/${code}`, { state: { schoolName: school.name, schoolId: id } });
    } else {
      navigate(`/student-book/${code}`, { state: { schoolName: school.name, schoolId: id } });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center text-sm text-blue-600 mb-6">
        <button onClick={() => navigate('/')} className="hover:underline font-bold">Quản lý Sổ Đăng bộ {activeTab === 'teacher' ? 'giáo viên' : 'học sinh'}</button>
        <span className="mx-2 text-slate-300">›</span>
        <span className="text-slate-900 font-bold">Chi tiết trường</span>
      </div>

      <div className="bg-white px-6 py-5 rounded-lg border border-blue-600 shadow-sm mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-50/50 rounded-full blur-2xl -ml-20 -mb-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-50/50 rounded-xl border border-blue-200 shrink-0 shadow-sm">
              <Building2 size={28} className="text-blue-600"/>
            </div>
            <div>
              <h1 className="text-2xl md:text-[26px] font-bold text-slate-800 tracking-tight">{school.name}</h1>
              <p className="text-slate-500 text-sm mt-1 font-medium">{school.description}</p>
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
                <span className="text-slate-600">{school.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {school.summary.map((item, index) => (
          <div key={index} className={`group relative p-4 rounded-md border ${item.border} ${item.bg} transition-all flex flex-col items-center justify-center text-center cursor-help`}>
            <p className={`text-xs font-extrabold ${item.color.replace('600', '500')} uppercase tracking-widest mb-1 opacity-90`}>{item.title}</p>
            <p className={`text-3xl font-extrabold ${item.color}`}>{item.value}</p>
            
            {/* Custom Tooltip */}
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 rounded-md border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none font-medium normal-case tracking-normal text-left text-sm leading-relaxed ${item.bg} ${item.border} ${item.color}`}>
              {item.tooltip}
              <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 border-b border-r transform rotate-45 ${item.bg} ${item.border}`}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-md shadow-sm border border-slate-300 overflow-hidden">
          <div className="px-6 py-4 border-b border-indigo-100 bg-indigo-50">
            <h3 className="text-[15px] font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={18} className="text-indigo-700" /> Sổ Đang Hoạt Động Năm Học 2025 - 2026
            </h3>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="text-[11px] text-slate-700 uppercase tracking-wider bg-slate-100 border-y border-slate-200">
                <tr className="divide-x divide-slate-200">
                  <th className="px-4 py-3 font-extrabold w-[30%]">MÃ SỐ / NIÊN KHÓA</th>
                  <th className="px-4 py-3 font-extrabold w-[30%]">{activeTab === 'teacher' ? 'ĐỐI TƯỢNG' : 'KHỐI (NĂM NAY)'}</th>
                  <th className="px-4 py-3 font-extrabold w-[10%]">{activeTab === 'teacher' ? 'SỐ LƯỢNG' : 'SĨ SỐ'}</th>
                  <th className="px-4 py-3 font-extrabold w-[20%]">TRẠNG THÁI</th>
                  <th className="px-4 py-3 font-extrabold w-[10%] text-right">HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {school.activeBooks.map((book, index) => (
                  <tr key={index} className="hover:bg-slate-50/80 transition-colors divide-x divide-slate-100">
                    <td className="px-4 py-4 font-bold text-slate-700">{book.code}</td>
                    <td className="px-4 py-4 font-medium text-slate-600">{book.grade}</td>
                    <td className="px-4 py-4 font-medium text-slate-600">{book.studentCount}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${book.statusColor}`}>
                        {book.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      {book.status !== 'Chưa thực hiện' ? (
                        <button 
                          onClick={() => handleBookClick(book.code)}
                          className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
                        >
                          Chi tiết
                        </button>
                      ) : (
                        <span className="text-slate-300 font-bold cursor-not-allowed">Chi tiết</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm border border-slate-300 overflow-hidden">
          <div className="px-6 py-4 border-b border-indigo-100 bg-indigo-50">
            <h3 className="text-[15px] font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-2">
              <Archive size={18} className="text-indigo-700" /> Sổ Đã Hoàn Thành (Lưu trữ)
            </h3>
          </div>
          {school.completedBooks.length > 0 ? (
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="text-[11px] text-slate-700 uppercase tracking-wider bg-slate-100 border-y border-slate-200">
                  <tr className="divide-x divide-slate-200">
                    <th className="px-4 py-3 font-extrabold w-[30%]">MÃ SỐ / NIÊN KHÓA</th>
                    <th className="px-4 py-3 font-extrabold w-[30%]">{activeTab === 'teacher' ? 'ĐỐI TƯỢNG' : 'KHỐI (NĂM KẾT THÚC NIÊN KHÓA)'}</th>
                    <th className="px-4 py-3 font-extrabold w-[10%]">{activeTab === 'teacher' ? 'SỐ LƯỢNG' : 'SĨ SỐ'}</th>
                    <th className="px-4 py-3 font-extrabold w-[20%]">TRẠNG THÁI</th>
                    <th className="px-4 py-3 font-extrabold w-[10%] text-right">HÀNH ĐỘNG</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {school.completedBooks.map((book, index) => (
                    <tr key={index} className="hover:bg-slate-50/80 transition-colors divide-x divide-slate-100">
                      <td className="px-4 py-4 font-bold text-slate-700">{book.code}</td>
                      <td className="px-4 py-4 font-medium text-slate-600">{book.grade}</td>
                      <td className="px-4 py-4 font-medium text-slate-600">{book.studentCount}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${book.statusColor}`}>
                          {book.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        {book.status !== 'Chưa thực hiện' ? (
                          <button 
                            onClick={() => handleBookClick(book.code)}
                            className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
                          >
                            Chi tiết
                          </button>
                        ) : (
                          <span className="text-slate-300 font-bold cursor-not-allowed">Chi tiết</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-slate-300" size={24} />
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Không có dữ liệu lưu trữ</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolDetail;
