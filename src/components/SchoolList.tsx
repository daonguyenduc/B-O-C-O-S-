import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon, Search } from 'lucide-react';

interface SchoolDetail {
  id: string;
  year: string;
  status: string;
  studentCount: number;
}

interface School {
  id: number;
  name: string;
  status: string;
  level: 'preschool' | 'primary' | 'junior' | 'senior';
  errorCount?: number;
  details: SchoolDetail[];
}

const FilterSection = () => (
  <div className="mb-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Tìm kiếm</label>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input 
            type="text" 
            placeholder="Tên, mã, ghi chú..."
            className="w-full bg-white border border-slate-300 rounded-md py-1.5 pl-8 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" 
          />
        </div>
      </div>
      <div>
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phường/Xã</label>
        <select className="w-full bg-white border border-slate-300 rounded-md py-1.5 px-3 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer">
          <option>Tất cả</option>
          <optgroup label="Quận 1">
            <option>Phường Bến Nghé</option>
            <option>Phường Bến Thành</option>
            <option>Phường Cô Giang</option>
            <option>Phường Cầu Kho</option>
            <option>Phường Cầu Ông Lãnh</option>
            <option>Phường Đa Kao</option>
            <option>Phường Nguyễn Cư Trinh</option>
            <option>Phường Nguyễn Thái Bình</option>
            <option>Phường Phạm Ngũ Lão</option>
            <option>Phường Tân Định</option>
          </optgroup>
          <optgroup label="Quận 3">
            <option>Phường Võ Thị Sáu</option>
            <option>Phường 01</option>
            <option>Phường 02</option>
            <option>Phường 03</option>
            <option>Phường 04</option>
            <option>Phường 05</option>
          </optgroup>
          <optgroup label="TP. Thủ Đức">
            <option>Phường An Khánh</option>
            <option>Phường An Lợi Đông</option>
            <option>Phường An Phú</option>
            <option>Phường Bình Chiểu</option>
            <option>Phường Bình Thọ</option>
            <option>Phường Bình Trưng Đông</option>
            <option>Phường Bình Trưng Tây</option>
            <option>Phường Cát Lái</option>
            <option>Phường Hiệp Bình Chánh</option>
            <option>Phường Hiệp Bình Phước</option>
            <option>Phường Hiệp Phú</option>
            <option>Phường Linh Chiểu</option>
            <option>Phường Linh Đông</option>
            <option>Phường Linh Tây</option>
            <option>Phường Linh Trung</option>
            <option>Phường Linh Xuân</option>
            <option>Phường Long Bình</option>
            <option>Phường Long Phước</option>
            <option>Phường Long Thạnh Mỹ</option>
            <option>Phường Long Trường</option>
            <option>Phường Phú Hữu</option>
            <option>Phường Phước Bình</option>
            <option>Phường Phước Long A</option>
            <option>Phường Phước Long B</option>
            <option>Phường Tam Bình</option>
            <option>Phường Tam Phú</option>
            <option>Phường Tăng Nhơn Phú A</option>
            <option>Phường Tăng Nhơn Phú B</option>
            <option>Phường Thạnh Mỹ Lợi</option>
            <option>Phường Thảo Điền</option>
            <option>Phường Thủ Thiêm</option>
            <option>Phường Trường Thạnh</option>
            <option>Phường Trường Thọ</option>
          </optgroup>
          <optgroup label="Quận Bình Thạnh">
            <option>Phường 01</option>
            <option>Phường 02</option>
            <option>Phường 03</option>
            <option>Phường 05</option>
            <option>Phường 06</option>
            <option>Phường 07</option>
            <option>Phường 11</option>
            <option>Phường 12</option>
            <option>Phường 13</option>
            <option>Phường 14</option>
            <option>Phường 15</option>
            <option>Phường 17</option>
            <option>Phường 19</option>
            <option>Phường 21</option>
            <option>Phường 22</option>
            <option>Phường 24</option>
            <option>Phường 25</option>
            <option>Phường 26</option>
            <option>Phường 27</option>
            <option>Phường 28</option>
          </optgroup>
          <optgroup label="Quận Gò Vấp">
            <option>Phường 01</option>
            <option>Phường 03</option>
            <option>Phường 04</option>
            <option>Phường 05</option>
            <option>Phường 06</option>
            <option>Phường 07</option>
            <option>Phường 08</option>
            <option>Phường 09</option>
            <option>Phường 10</option>
            <option>Phường 11</option>
            <option>Phường 12</option>
            <option>Phường 13</option>
            <option>Phường 14</option>
            <option>Phường 15</option>
            <option>Phường 16</option>
            <option>Phường 17</option>
          </optgroup>
        </select>
      </div>
      <div>
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Trạng thái sổ</label>
        <select className="w-full bg-white border border-slate-300 rounded-md py-1.5 px-3 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer">
          <option>Tất cả</option>
          <optgroup label="Đầu năm">
            <option>Đã khởi tạo sổ</option>
            <option>Đã ký ban hành</option>
            <option>Đã đóng dấu ban hành</option>
          </optgroup>
          <optgroup label="Cuối năm">
            <option>Đã đồng bộ dữ liệu</option>
            <option>Đã ký duyệt cuối năm</option>
            <option>Đã đóng dấu cuối năm</option>
          </optgroup>
          <optgroup label="Khác">
            <option>Đã khóa sổ niên khóa</option>
            <option>Chưa thực hiện</option>
            <option>Lỗi chữ ký số</option>
          </optgroup>
        </select>
      </div>
    </div>
  </div>
);

type SchoolLevel = 'all' | 'preschool' | 'primary' | 'junior' | 'senior';

interface SchoolListProps {
  activeTab: 'teacher' | 'student';
}

const SchoolList = ({ activeTab }: SchoolListProps) => {
  const navigate = useNavigate();
  const [expandedSchoolId, setExpandedSchoolId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeLevel, setActiveLevel] = useState<SchoolLevel>('all');
  const schoolsPerPage = 5;

  const studentSchools: School[] = [
    { 
      id: 1, name: 'Trường TH Đông Hòa B', status: '1 Sổ đang hoạt động', level: 'primary', errorCount: 1,
      details: [{ id: '74724411HS2530', year: '2025-2030', status: 'Đã đồng bộ dữ liệu', studentCount: 395 }]
    },
    { 
      id: 3, name: 'Trường THCS Bình An', status: 'Chưa thực hiện', level: 'junior',
      details: []
    },
    { 
      id: 5, name: 'Trường THPT Chuyên Lê Hồng Phong', status: 'Chưa thực hiện', level: 'senior',
      details: [{ id: '74724411HS2530', year: '2025-2028', status: 'Đã khóa sổ niên khóa', studentCount: 1200 }]
    },
    { 
      id: 7, name: 'Trường THCS Nguyễn Du', status: 'Chưa thực hiện', level: 'junior',
      details: [
        { id: '74724411HS2425', year: '2024-2025', status: 'Đã khóa sổ niên khóa', studentCount: 850 },
        { id: '74724411HS2324', year: '2023-2024', status: 'Đã khóa sổ niên khóa', studentCount: 820 }
      ]
    },
    { 
      id: 9, name: 'Trường Tiểu học Lê Quý Đôn', status: '2 Sổ đang hoạt động', level: 'primary', errorCount: 2,
      details: [
        { id: '74724411HS2526', year: '2025-2026', status: 'Đã đồng bộ dữ liệu', studentCount: 450 },
        { id: '74724411HS2425', year: '2024-2025', status: 'Đã đồng bộ dữ liệu', studentCount: 430 }
      ]
    },
    { 
      id: 11, name: 'Trường mầm non Vành Khuyên', status: 'Chưa thực hiện', level: 'preschool',
      details: []
    },
    { 
      id: 12, name: 'Trường mầm non Sen Hồng', status: '1 Sổ đang hoạt động', level: 'preschool',
      details: [{ id: 'MN74721502', year: '2025-2026', status: 'Đã đồng bộ dữ liệu', studentCount: 30 }]
    },
  ];

  const teacherSchools: School[] = [
    { 
      id: 4, name: 'Trường THCS Lai Hưng', status: '1 Sổ đang hoạt động', level: 'junior', errorCount: 1,
      details: [{ id: '74721502GV2526', year: '2025-2026', status: 'Đã đồng bộ dữ liệu', studentCount: 60 }]
    },
    { 
      id: 2, name: 'THPT Hoàng Thế Thiện', status: '1 Sổ đang hoạt động', level: 'senior',
      details: [{ id: '74721502GV2526', year: '2025-2026', status: 'Đã đồng bộ dữ liệu', studentCount: 60 }]
    },
    { 
      id: 6, name: 'Trường Tiểu học Nguyễn Du', status: 'Chưa thực hiện', level: 'primary',
      details: [
        { id: '74721502GV2526', year: '2025-2026', status: 'Đã khóa sổ niên khóa', studentCount: 45 },
        { id: '74721502GV2425', year: '2024-2025', status: 'Đã khóa sổ niên khóa', studentCount: 42 }
      ]
    },
    { 
      id: 8, name: 'Trường THPT Trần Đại Nghĩa', status: 'Chưa thực hiện', level: 'senior',
      details: [{ id: '74721502GV2425', year: '2024-2025', status: 'Đã khóa sổ niên khóa', studentCount: 110 }]
    },
    { 
      id: 10, name: 'Trường mầm non Hoa Hồng', status: '1 Sổ đang hoạt động', level: 'preschool', errorCount: 1,
      details: [{ id: '74721502GV2526', year: '2025-2026', status: 'Đã đồng bộ dữ liệu', studentCount: 25 }]
    },
  ];

  const allSchools = activeTab === 'student' ? studentSchools : teacherSchools;
  const schools = activeLevel === 'all' ? allSchools : allSchools.filter(s => s.level === activeLevel);

  const indexOfLastSchool = currentPage * schoolsPerPage;
  const indexOfFirstSchool = indexOfLastSchool - schoolsPerPage;
  const currentSchools = schools.slice(indexOfFirstSchool, indexOfLastSchool);
  const totalPages = Math.ceil(schools.length / schoolsPerPage);

  const toggleExpand = (id: number) => {
    setExpandedSchoolId(expandedSchoolId === id ? null : id);
  };

  const levels: { id: SchoolLevel; label: string }[] = [
    { id: 'all', label: 'Tất cả' },
    { id: 'preschool', label: 'Mầm non' },
    { id: 'primary', label: 'Tiểu học' },
    { id: 'junior', label: 'THCS' },
    { id: 'senior', label: 'THPT' },
  ];

  return (
    <div className="px-6 pb-6 pt-6">
      <FilterSection />
      
      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar w-full pb-2">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => {
              setActiveLevel(level.id);
              setCurrentPage(1);
              setExpandedSchoolId(null);
            }}
            className={`w-24 sm:w-28 py-1 flex items-center justify-center text-[12px] font-bold uppercase tracking-widest transition-all duration-200 rounded-lg whitespace-nowrap border ${
              activeLevel === level.id 
                ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                : 'bg-white border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/50 shadow-sm'
            }`}
          >
            {level.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {currentSchools.length > 0 ? (
          currentSchools.map((school) => (
            <div 
              key={school.id} 
              className={`border border-slate-200 shadow-sm rounded-xl overflow-hidden transition-all hover:border-indigo-300 hover:shadow-md relative ${
                school.level === 'preschool' ? 'bg-pink-50' :
                school.level === 'primary' ? 'bg-amber-50' :
                school.level === 'junior' ? 'bg-indigo-50' :
                'bg-purple-50'
              }`}
            >
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                school.level === 'preschool' ? 'bg-pink-500' :
                school.level === 'primary' ? 'bg-amber-500' :
                school.level === 'junior' ? 'bg-indigo-500' :
                'bg-purple-500'
              }`}></div>

              <div 
                className={`p-4 pl-5 flex items-center justify-between cursor-pointer transition-colors ${expandedSchoolId === school.id ? 'bg-black/5' : 'hover:bg-black/5'}`}
                onClick={() => toggleExpand(school.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-1 rounded-md transition-transform duration-200 ${expandedSchoolId === school.id ? 'rotate-90 bg-blue-100 text-blue-600' : 'text-slate-400'}`}>
                    <ChevronRight size={18} />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      school.level === 'preschool' ? 'bg-pink-50 text-pink-600' :
                      school.level === 'primary' ? 'bg-amber-50 text-amber-600' :
                      school.level === 'junior' ? 'bg-indigo-50 text-indigo-600' :
                      'bg-purple-50 text-purple-600'
                    }`}>
                      <span className="text-[10px] font-black uppercase">{
                        school.level === 'preschool' ? 'MN' :
                        school.level === 'primary' ? 'TH' :
                        school.level === 'junior' ? 'CS' : 'PT'
                      }</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm">{school.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                          {school.status}
                        </span>
                        {school.errorCount && (
                          <span className="text-[11px] font-bold text-rose-500 flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                            {school.errorCount} Sổ đã đồng bộ dữ liệu
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {expandedSchoolId === school.id && school.details.length > 0 && (
                <div className="px-4 pb-4 border-t border-slate-50 pt-4 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="text-[11px] text-slate-700 uppercase tracking-wider bg-slate-100 border-y border-slate-200">
                        <tr className="divide-x divide-slate-200">
                          <th className="px-4 py-3 font-extrabold">MÃ SỐ / NIÊN KHÓA</th>
                          <th className="px-4 py-3 font-extrabold">TRẠNG THÁI SỔ</th>
                          <th className="px-4 py-3 font-extrabold">SĨ SỐ</th>
                          <th className="px-4 py-3 font-extrabold text-right">HÀNH ĐỘNG</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {school.details.map(detail => (
                          <tr key={detail.id} className="hover:bg-slate-50/80 transition-colors divide-x divide-slate-100">
                            <td className="px-4 py-4 font-bold text-slate-700">
                              {detail.id} 
                              <span className="block text-[10px] font-medium text-slate-400 mt-0.5">{detail.year}</span>
                            </td>
                            <td className="px-4 py-4">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${
                                detail.status.includes('ký') || detail.status.includes('duyệt') ? 'bg-amber-50 text-amber-700 border-amber-100' : 
                                detail.status.includes('khóa') ? 'bg-green-50 text-green-700 border-green-100' :
                                detail.status === 'Chưa thực hiện' ? 'bg-slate-50 text-slate-500 border-slate-100' :
                                'bg-blue-50 text-blue-700 border-blue-100'
                              }`}>
                                {detail.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 font-medium text-slate-600">{detail.studentCount}</td>
                            <td className="px-4 py-4 text-right">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate(`/school/${school.id}`, { state: { activeTab, schoolName: school.name } });
                                }}
                                className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
                              >
                                Chi tiết
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="py-12 text-center bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <p className="text-slate-400 text-xs font-medium">Không có dữ liệu trường cho cấp học này</p>
          </div>
        )}
      </div>
      {schools.length > 0 && (
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Hiển thị {indexOfFirstSchool + 1} - {Math.min(indexOfLastSchool, schools.length)} / {schools.length}
          </span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 border border-slate-300 rounded-md hover:bg-slate-50 disabled:opacity-30 transition-all active:scale-90"
            >
              <ChevronLeft size={14} className="text-slate-600" />
            </button>
            <span className="text-[11px] font-bold text-slate-700 px-2">{currentPage} / {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1.5 border border-slate-300 rounded-md hover:bg-slate-50 disabled:opacity-30 transition-all active:scale-90"
            >
              <ChevronRightIcon size={14} className="text-slate-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolList;
