import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Download, CheckCircle, FileText, Clock, Search } from 'lucide-react';

import ProcessTimeline from './ProcessTimeline';

const StudentBookDetail = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedYear, setSelectedYear] = useState('Năm học 2025 - 2026');

  const rawId = bookId || "74724411HS2530 (2025-2030)";
  const match = rawId.match(/(.*?)\s*\((.*?)\)/);
  const parsedCode = match ? match[1] : rawId;
  const parsedYear = match ? match[2] : "2025-2030";
  const schoolName = location.state?.schoolName || "Trường Tiểu Học Lê Quý Đôn";
  const schoolId = location.state?.schoolId;

  const book = {
    name: "Sổ Đăng bộ",
    code: parsedCode,
    year: parsedYear,
    school: schoolName,
    info: {
      maSo: parsedCode,
      ngayTao: "06/01/2026",
      capHoc: "Tiểu học",
      loaiHinh: "Công lập"
    },
    status: {
      title: "Cập nhật năm học 2025-2026",
      state: "Chưa ký",
    },
    dataByYear: {
      'Năm học 2025 - 2026': [
        { stt: 1, maHs: 'HS079314005227', name: 'Hoàng Ngọc Thiên An', ngaySinh: '08/03/2014', ketQua: 'Trúng tuyển' },
        { stt: 2, maHs: 'HS079314005228', name: 'Nguyễn Văn Bảo', ngaySinh: '12/05/2014', ketQua: 'Trúng tuyển' },
        { stt: 3, maHs: 'HS079314005229', name: 'Trần Thị Cẩm', ngaySinh: '20/08/2014', ketQua: 'Trúng tuyển' },
        { stt: 4, maHs: 'HS079314005230', name: 'Lê Hoàng Duy', ngaySinh: '05/11/2014', ketQua: 'Trúng tuyển' },
        { stt: 5, maHs: 'HS079314005231', name: 'Phạm Ngọc Em', ngaySinh: '15/02/2014', ketQua: 'Trúng tuyển' },
        { stt: 6, maHs: 'HS079314005232', name: 'Vũ Đình Phong', ngaySinh: '22/09/2014', ketQua: 'Trúng tuyển' },
        { stt: 7, maHs: 'HS079314005233', name: 'Đặng Mai Giang', ngaySinh: '10/01/2014', ketQua: 'Trúng tuyển' },
        { stt: 8, maHs: 'HS079314005234', name: 'Bùi Xuân Hùng', ngaySinh: '30/04/2014', ketQua: 'Trúng tuyển' },
        { stt: 9, maHs: 'HS079314005235', name: 'Ngô Thanh Hương', ngaySinh: '18/07/2014', ketQua: 'Trúng tuyển' },
        { stt: 10, maHs: 'HS079314005236', name: 'Lý Gia Khang', ngaySinh: '25/12/2014', ketQua: 'Trúng tuyển' },
      ],
      'Năm học 2026 - 2027': [],
      'Năm học 2027 - 2028': [],
      'Năm học 2028 - 2029': [],
      'Năm học 2029 - 2030': []
    }
  };

  const students = book.dataByYear[selectedYear as keyof typeof book.dataByYear] || [];

  return (
    <div className="min-h-screen">
      <div className="flex items-center text-sm text-blue-600 mb-6">
        <button onClick={() => navigate('/')} className="hover:underline font-bold">Quản lý Sổ Đăng bộ</button>
        <span className="mx-2 text-slate-300">›</span>
        <button onClick={() => navigate(`/school/${schoolId || '1'}`, { state: { schoolName: schoolName } })} className="hover:underline font-bold">Chi tiết trường</button>
        <span className="mx-2 text-slate-300">›</span>
        <span className="text-slate-900 font-bold">Chi tiết sổ {book.code}</span>
      </div>

      <div className="bg-white px-6 py-5 rounded-lg shadow-sm border border-blue-600 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-50/50 rounded-full blur-2xl -ml-20 -mb-20"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-[26px] font-bold text-slate-800 tracking-tight">{book.name}: <span className="text-blue-600">{book.code}</span></h1>
          <p className="text-slate-500 text-sm mt-1.5 font-medium">Niên khóa: <span className="text-slate-700 font-bold">{book.year}</span> | Trường: <span className="text-blue-600 font-bold">{book.school}</span></p>
        </div>
        <div className="relative z-10 flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 bg-white rounded-lg text-slate-700 hover:bg-slate-50 transition-all font-bold text-sm shadow-sm active:scale-95">
            <Download size={18} /> Tải về XML
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold text-sm shadow-md active:scale-95">
            <CheckCircle size={18} /> Xác thực chữ ký số
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
              <div className="flex justify-between items-center"><span className="text-slate-400 font-bold uppercase tracking-wider">Ngày tạo</span> <span className="font-bold text-slate-700">{book.info.ngayTao}</span></div>
              <div className="flex justify-between items-center"><span className="text-slate-400 font-bold uppercase tracking-wider">Cấp học</span> <span className="font-bold text-slate-700">{book.info.capHoc}</span></div>
              <div className="flex justify-between items-center"><span className="text-slate-400 font-bold uppercase tracking-wider">Loại hình</span> <span className="font-bold text-slate-700">{book.info.loaiHinh}</span></div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-sm border border-slate-300 overflow-hidden">
            <div className="px-6 py-4 border-b border-indigo-100 bg-indigo-50 flex justify-between items-center">
              <h3 className="text-[13px] font-bold text-indigo-900 uppercase tracking-widest">
                Tiến độ thực hiện năm nay
              </h3>
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100/50 px-2 py-0.5 rounded border border-indigo-200">5/7 BƯỚC</span>
            </div>
            <div className="p-6">
              <ProcessTimeline />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-white rounded-md shadow-sm border border-slate-300 overflow-hidden">
          <div className="px-6 py-4 border-b border-indigo-100 bg-indigo-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-white border border-slate-300 text-slate-700 rounded-md py-2 px-3 text-xs w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
              >
                {Object.keys(book.dataByYear).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input type="text" placeholder="Tìm kiếm học sinh..." className="bg-white border border-slate-300 rounded-md py-2 pl-9 pr-4 text-xs w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm" />
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h3 className="font-bold text-slate-800 text-[15px]">Danh sách Học sinh <span className="text-slate-500 ml-1">({students.length})</span></h3>
            </div>

            {students.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200">
                  <thead className="text-[11px] text-slate-700 uppercase tracking-wider bg-slate-100 border-b border-slate-200">
                    <tr className="divide-x divide-slate-200">
                      <th className="px-4 py-3 font-extrabold w-12 text-center">STT</th>
                      <th className="px-4 py-3 font-extrabold w-32">MÃ SĐB</th>
                      <th className="px-4 py-3 font-extrabold">HỌ VÀ TÊN</th>
                      <th className="px-4 py-3 font-extrabold w-1/6">NGÀY SINH</th>
                      <th className="px-4 py-3 font-extrabold w-1/6 text-right">HÀNH ĐỘNG</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {students.map(student => (
                      <tr key={student.maHs} className="hover:bg-slate-50/80 transition-colors divide-x divide-slate-200">
                        <td className="px-4 py-4 text-slate-500 font-medium text-center">{student.stt}</td>
                        <td className="px-4 py-4 font-bold text-slate-700">{student.maHs}</td>
                        <td className="px-4 py-4 font-bold text-slate-700">{student.name}</td>
                        <td className="px-4 py-4 font-medium text-slate-600">{student.ngaySinh}</td>
                        <td className="px-4 py-4 text-right">
                          <button 
                            onClick={() => navigate(`/student/${student.maHs}`, { state: { schoolId: location.pathname.split('/')[2], bookId: book.code, schoolName: book.school } })}
                            className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
                          >
                            Xem chi tiết
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center text-slate-400 font-bold text-sm">
                Chưa có dữ liệu cho năm học này
              </div>
            )}
            
            {students.length > 0 && (
              <div className="flex justify-center mt-8 gap-2">
                <button className="px-4 py-1.5 border border-slate-300 rounded-md text-[11px] font-bold text-slate-400 hover:bg-slate-50 transition-all active:scale-90">Trước</button>
                <button className="px-4 py-1.5 bg-slate-900 text-white rounded-md text-[11px] font-bold shadow-sm shadow-slate-200">1</button>
                <button className="px-4 py-1.5 border border-slate-300 rounded-md text-[11px] font-bold text-slate-400 hover:bg-slate-50 transition-all active:scale-90">Sau</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentBookDetail;
