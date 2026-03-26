import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Download, FileText, Clock, Search, FileDown, ArrowLeft } from 'lucide-react';

import ProcessTimeline from './ProcessTimeline';
import TeacherProfile from './TeacherProfile';

const TeacherBookDetail = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedYear, setSelectedYear] = useState('Năm học 2025 - 2026');
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);

  const rawId = bookId || "GV-ND-2025 (2025-2026)";
  const match = rawId.match(/(.*?)\s*\((.*?)\)/);
  const parsedCode = match ? match[1] : rawId;
  const parsedYear = match ? match[2] : "2025-2026";
  const schoolName = location.state?.schoolName || "Trường THCS Lai Hưng";
  const schoolId = location.state?.schoolId;

  const book = {
    name: "Sổ Đăng bộ Giáo viên",
    code: parsedCode,
    year: parsedYear,
    school: schoolName,
    info: {
      maSo: parsedCode,
      namHoc: parsedYear,
      ngayTao: "05/09/2024",
      soLuong: 8
    },
    status: {
      title: "Ký duyệt cuối năm học 2024-2025",
      state: "Chờ ký",
      signer: "Hiệu trưởng THS. Nguyễn Văn B"
    },
    dataByYear: {
      'Năm học 2025 - 2026': [
        { stt: 1, maVc: 'VC001', name: 'Nguyễn Thị An', chuyenMon: 'Toán', to: 'Tổ Toán - Tin', status: 'Đang công tác' },
        { stt: 2, maVc: 'VC002', name: 'Trần Văn Bình', chuyenMon: 'Ngữ Văn', to: 'Tổ Xã hội', status: 'Đang công tác' },
        { stt: 3, maVc: 'VC003', name: 'Lê Thị Cẩm', chuyenMon: 'Tiếng Anh', to: 'Tổ Ngoại ngữ', status: 'Đang công tác' },
        { stt: 4, maVc: 'VC004', name: 'Phạm Hoàng Duy', chuyenMon: 'Vật Lý', to: 'Tổ Tự nhiên', status: 'Đang công tác' },
        { stt: 5, maVc: 'VC005', name: 'Vũ Ngọc Em', chuyenMon: 'Hóa Học', to: 'Tổ Tự nhiên', status: 'Đang công tác' },
        { stt: 6, maVc: 'VC006', name: 'Đặng Đình Phong', chuyenMon: 'Lịch Sử', to: 'Tổ Xã hội', status: 'Đang công tác' },
        { stt: 7, maVc: 'VC007', name: 'Bùi Mai Giang', chuyenMon: 'Địa Lý', to: 'Tổ Xã hội', status: 'Đang công tác' },
        { stt: 8, maVc: 'VC008', name: 'Ngô Xuân Hùng', chuyenMon: 'Tin Học', to: 'Tổ Toán - Tin', status: 'Đang công tác' },
      ],
      'Năm học 2026 - 2027': [],
      'Năm học 2027 - 2028': [],
      'Năm học 2028 - 2029': []
    }
  };

  const teachers = book.dataByYear[selectedYear as keyof typeof book.dataByYear] || [];

  if (selectedTeacher) {
    return (
      <div className="min-h-screen p-4 md:p-8 bg-slate-50/30">
        <div className="max-w-7xl mx-auto">
          <TeacherProfile 
            teacher={selectedTeacher} 
            bookCode={book.code} 
            onBack={() => setSelectedTeacher(null)} 
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex items-center text-sm text-blue-600 mb-6">
        <button onClick={() => navigate('/')} className="hover:underline font-bold">Quản lý Sổ Đăng bộ giáo viên</button>
        <span className="mx-2 text-slate-300">›</span>
        <button onClick={() => navigate(`/school/${schoolId || '1'}`, { state: { schoolName: schoolName, activeTab: 'teacher' } })} className="hover:underline font-bold">Chi tiết trường</button>
        <span className="mx-2 text-slate-300">›</span>
        <span className="text-slate-900 font-bold">Chi tiết sổ {book.code}</span>
      </div>

      <div className="bg-white px-6 py-5 rounded-lg shadow-sm border border-blue-600 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-50/50 rounded-full blur-2xl -ml-20 -mb-20"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-[26px] font-bold text-slate-800 tracking-tight">{book.name}: <span className="text-blue-600">{book.code}</span></h1>
          <p className="text-slate-500 text-sm mt-1.5 font-medium">Năm học: <span className="text-slate-700 font-bold">{book.year}</span> | Trường: <span className="text-blue-600 font-bold">{book.school}</span></p>
        </div>
        <div className="relative z-10 flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 bg-white rounded-lg text-slate-700 hover:bg-slate-50 transition-all font-bold text-sm shadow-sm active:scale-95">
            <Download size={18} /> Tải về XML
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold text-sm shadow-md active:scale-95">
            <FileDown size={18} /> Xuất PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-md shadow-sm border border-slate-300 overflow-hidden">
            <div className="px-6 py-4 border-b border-indigo-100 bg-indigo-50">
              <h3 className="text-[13px] font-bold text-indigo-900 uppercase tracking-widest">
                Thông tin Sổ
              </h3>
            </div>
            <div className="p-6 space-y-4 text-xs">
              <div className="flex justify-between items-center"><span className="text-slate-400 font-bold uppercase tracking-wider">Mã số sổ</span> <span className="font-bold text-slate-700">{book.info.maSo}</span></div>
              <div className="flex justify-between items-center"><span className="text-slate-400 font-bold uppercase tracking-wider">Năm học</span> <span className="font-bold text-slate-700">{book.info.namHoc}</span></div>
              <div className="flex justify-between items-center"><span className="text-slate-400 font-bold uppercase tracking-wider">Ngày tạo</span> <span className="font-bold text-slate-700">{book.info.ngayTao}</span></div>
              <div className="flex justify-between items-center"><span className="text-slate-400 font-bold uppercase tracking-wider">Số lượng</span> <span className="font-bold text-slate-700">{book.info.soLuong}</span></div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-sm border border-slate-300 overflow-hidden">
            <div className="px-6 py-4 border-b border-indigo-100 bg-indigo-50">
              <h3 className="text-[13px] font-bold text-indigo-900 uppercase tracking-widest">
                Tiến độ thực hiện năm nay
              </h3>
            </div>
            <div className="p-6">
              <ProcessTimeline />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-white rounded-md shadow-sm border border-slate-300 overflow-hidden">
          <div className="px-6 py-4 border-b border-indigo-100 bg-indigo-50 flex items-center justify-between">
            <h3 className="font-bold text-indigo-900 text-[15px]">Danh sách Cán bộ - Giáo viên - Nhân viên <span className="text-indigo-700/60 ml-1">({teachers.length})</span></h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400" size={14} />
              <input type="text" placeholder="Tìm kiếm cán bộ..." className="bg-white border border-indigo-200 rounded-md py-2 pl-9 pr-4 text-xs w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" />
            </div>
          </div>

          <div className="p-6 overflow-x-auto">
            <table className="w-full text-xs text-left table-fixed">
              <thead className="text-[10px] text-slate-400 uppercase tracking-widest border-b border-slate-50">
                <tr>
                  <th className="px-2 py-3 font-bold w-12 text-center">STT</th>
                  <th className="px-2 py-3 font-bold w-24">MÃ VC/CC</th>
                  <th className="px-4 py-3 font-bold w-1/4">HỌ VÀ TÊN</th>
                  <th className="px-4 py-3 font-bold">CHUYÊN MÔN</th>
                  <th className="px-4 py-3 font-bold">TỔ</th>
                  <th className="px-4 py-3 font-bold w-1/6">TRẠNG THÁI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {teachers.length > 0 ? teachers.map(teacher => (
                  <tr key={teacher.maVc} className="hover:bg-slate-50/30 transition-colors">
                    <td className="px-2 py-4 text-slate-500 font-medium truncate text-center">{teacher.stt}</td>
                    <td className="px-2 py-4 font-bold text-slate-700 truncate">{teacher.maVc}</td>
                    <td 
                      className="px-4 py-4 font-bold text-blue-600 cursor-pointer hover:underline break-words"
                      onClick={() => setSelectedTeacher(teacher)}
                    >
                      {teacher.name}
                    </td>
                    <td className="px-4 py-4 font-medium text-slate-600 break-words">{teacher.chuyenMon}</td>
                    <td className="px-4 py-4 font-medium text-slate-600 break-words">{teacher.to}</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 truncate">
                        {teacher.status}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Không có dữ liệu cho năm học này</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-center mt-8 gap-2 p-6 border-t border-slate-50">
            <button className="px-4 py-1.5 border border-slate-300 rounded-md text-[11px] font-bold text-slate-400 hover:bg-slate-50 transition-all active:scale-90">Trước</button>
            <button className="px-4 py-1.5 bg-slate-900 text-white rounded-md text-[11px] font-bold shadow-sm shadow-slate-200">1</button>
            <button className="px-4 py-1.5 border border-slate-300 rounded-md text-[11px] font-bold text-slate-400 hover:bg-slate-50 transition-all active:scale-90">Sau</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherBookDetail;
