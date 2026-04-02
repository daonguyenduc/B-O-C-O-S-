import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { User, BookOpen, MapPin, Award, ChevronLeft, LogIn, LogOut, Star, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const StudentDetail = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { schoolId, bookId, schoolName } = location.state || {};

  // Mock data - In a real app, this would be fetched based on studentId
  const student = {
    id: studentId,
    name: studentId === 'HS079314005227' ? "Hoàng Ngọc Thiên An" : 
          studentId === 'HS079314005228' ? "Nguyễn Văn Bảo" :
          studentId === 'HS079314005229' ? "Trần Thị Cẩm" :
          studentId === 'HS079314005230' ? "Lê Hoàng Duy" :
          studentId === 'HS079314005231' ? "Phạm Ngọc Em" :
          studentId === 'HS079314005232' ? "Vũ Đình Phong" :
          studentId === 'HS079314005233' ? "Đặng Mai Giang" :
          studentId === 'HS079314005234' ? "Bùi Xuân Hùng" :
          studentId === 'HS079314005235' ? "Ngô Thanh Hương" :
          studentId === 'HS079314005236' ? "Lý Gia Khang" : "Học sinh không xác định",
    maSo: studentId || "HS000000000000",
    maSoSo: bookId || "74724411HS2530",
    personal: {
      hoTen: studentId === 'HS079314005227' ? "Hoàng Ngọc Thiên An" : "Học sinh",
      gioiTinh: "Nữ",
      ngaySinh: "08/03/2014",
      noiSinh: "TP. Hồ Chí Minh",
      danToc: "Kinh"
    },
    family: {
      cha: "Hoàng Văn A",
      ngheNghiepCha: "Kỹ sư",
      me: "Nguyễn Thị B",
      ngheNghiepMe: "Giáo viên"
    },
    residence: {
      choO: "Số 123/45/67 Đường Nguyễn Văn Cừ, Phường Cầu Kho, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
      chinhSach: "Không"
    },
    history: [
      { year: "2025 - 2026", class: "Lớp 5A", school: "Trường Tiểu Học Lê Quý Đôn" },
      { year: "2024 - 2025", class: "Lớp 4A", school: "Trường Tiểu Học Lê Quý Đôn" }
    ],
    learningProcess: [
      { 
        year: "2025 - 2026", 
        entry: { class: "1.1", reason: "Trúng tuyển" },
        exit: null,
        rewards: ["Học sinh giỏi học kỳ 1"],
        diploma: null
      },
      { 
        year: "2026 - 2027", 
        entry: { class: "2.1", reason: "Lên lớp" },
        exit: null,
        rewards: ["Giải nhất hội khỏe phù đổng"],
        diploma: null
      },
      { 
        year: "2027 - 2028", 
        entry: { class: "3.1", reason: "Lên lớp" },
        exit: null,
        rewards: null,
        diploma: null
      },
      { 
        year: "2028 - 2029", 
        entry: { class: "4.1", reason: "Lên lớp" },
        exit: null,
        rewards: ["Học sinh tiêu biểu"],
        diploma: null
      },
      { 
        year: "2029 - 2030", 
        entry: { class: "5.1", reason: "Lên lớp" },
        exit: { class: "5.1", reason: "Hoàn thành chương trình tiểu học" },
        rewards: ["Học sinh giỏi toàn cấp"],
        diploma: { rank: "Giỏi", id: "7472/TH/2030", date: "15/06/2030" }
      },
    ]
  };

  return (
    <div className="min-h-screen p-6 bg-slate-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center text-sm text-blue-600 mb-6">
          <button onClick={() => navigate('/')} className="hover:underline font-bold">Quản lý Sổ Đăng bộ</button>
          <span className="mx-2 text-slate-300">›</span>
          <button onClick={() => navigate(`/school/${schoolId || '1'}`, { state: { schoolName: schoolName || 'Trường Tiểu Học Lê Quý Đôn' } })} className="hover:underline font-bold">Chi tiết trường</button>
          <span className="mx-2 text-slate-300">›</span>
          <button onClick={() => navigate(`/student-book/${bookId || '74724411HS2530'}`, { state: { schoolName: schoolName || 'Trường Tiểu Học Lê Quý Đôn' } })} className="hover:underline font-bold">Chi tiết sổ {bookId || '74724411HS2530'}</button>
          <span className="mx-2 text-slate-300">›</span>
          <span className="text-slate-900 font-bold">Chi tiết học sinh</span>
        </div>

        {/* Compact Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-600 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-6 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="w-24 h-24 rounded-full border-4 border-white/30 bg-white/20 flex items-center justify-center overflow-hidden shadow-xl backdrop-blur-sm">
                <User size={48} className="text-white/90" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{student.name}</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-bold backdrop-blur-md border border-white/10">
                    Mã SĐB: {student.maSo}
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-bold backdrop-blur-md border border-white/10">
                    Mã sổ: {student.maSoSo}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Thông tin cá nhân */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-200 transition-all">
            <h3 className="text-sm font-bold text-slate-700 uppercase mb-4 flex items-center gap-2">
              <User size={16} className="text-blue-600"/> Thông tin cá nhân
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Họ tên</span>
                <span className="text-slate-900 font-bold">{student.personal.hoTen}</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Giới tính</span>
                <span className="text-slate-700 font-medium">{student.personal.gioiTinh}</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Ngày sinh</span>
                <span className="text-slate-700 font-medium">{student.personal.ngaySinh}</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Nơi sinh</span>
                <span className="text-slate-700 font-medium">{student.personal.noiSinh}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Dân tộc</span>
                <span className="text-slate-700 font-medium">{student.personal.danToc}</span>
              </div>
            </div>
          </div>

          {/* Thông tin gia đình */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-200 transition-all">
            <h3 className="text-sm font-bold text-slate-700 uppercase mb-4 flex items-center gap-2">
              <User size={16} className="text-blue-600"/> Thông tin gia đình
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Họ tên cha</span>
                <span className="text-slate-900 font-bold">{student.family.cha}</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Nghề nghiệp cha</span>
                <span className="text-slate-700 font-medium">{student.family.ngheNghiepCha}</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Họ tên mẹ</span>
                <span className="text-slate-900 font-bold">{student.family.me}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Nghề nghiệp mẹ</span>
                <span className="text-slate-700 font-medium">{student.family.ngheNghiepMe}</span>
              </div>
            </div>
          </div>

          {/* Thông tin cư trú & Chính sách */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-200 transition-all md:col-span-2">
            <h3 className="text-sm font-bold text-slate-700 uppercase mb-4 flex items-center gap-2">
              <MapPin size={16} className="text-blue-600"/> Thông tin cư trú & Chính sách
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex flex-col md:flex-row md:justify-between gap-2 border-b border-slate-50 pb-2">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Chỗ ở hiện tại</span>
                <span className="text-slate-700 font-medium md:text-right max-w-2xl leading-relaxed">{student.residence.choO}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Chính sách ưu tiên</span>
                <span className="text-slate-700 font-medium">{student.residence.chinhSach}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: QUÁ TRÌNH HỌC TẬP & KHEN THƯỞNG */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-600">
        <h3 className="text-sm font-bold text-slate-700 uppercase mb-6 flex items-center gap-2">
          <BookOpen size={18} className="text-blue-600"/> QUÁ TRÌNH HỌC TẬP & KHEN THƯỞNG
        </h3>
        
        <div className="relative">
          {/* Timeline Header - Desktop Only */}
          <div className="hidden lg:grid grid-cols-[140px_1fr_1fr_1fr] items-center mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 pl-10">
            <div className="pl-4">Năm học</div>
            <div className="px-4 border-l border-slate-100 flex items-center gap-2"><LogIn size={12} className="text-blue-500"/> Vào trường</div>
            <div className="px-4 border-l border-slate-100 flex items-center gap-2"><LogOut size={12} className="text-rose-500"/> Ra trường</div>
            <div className="px-4 border-l border-slate-100 flex items-center gap-2"><Star size={12} className="text-amber-500"/> Khen thưởng</div>
          </div>

          {/* Vertical Line for Timeline */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
          
          <div className="space-y-2">
            {student.learningProcess.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative group pl-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 shadow-sm z-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                </div>

                <div className="bg-slate-50/30 group-hover:bg-white rounded-lg border border-slate-200 group-hover:border-blue-200 group-hover:shadow-sm transition-all grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr_1fr] items-stretch">
                  {/* Year Label */}
                  <div className="p-3 pl-4 flex flex-col justify-center gap-1">
                    <div className="text-blue-700 text-xs font-bold flex items-center gap-1.5">
                      <Calendar size={12} />
                      {item.year}
                    </div>
                  </div>

                  {/* Entry Info */}
                  <div className="p-3 lg:px-4 lg:border-l border-slate-100 flex flex-col justify-center text-[11px]">
                    <div className="lg:hidden flex items-center gap-1 text-blue-600 font-bold uppercase mb-1">
                      <LogIn size={12}/> Vào trường
                    </div>
                    <p className="text-slate-600 leading-relaxed flex items-center gap-2">
                      <span>Lớp <span className="text-slate-900 font-bold">{item.entry.class}</span></span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-50 text-slate-600 border border-slate-200">
                        {item.entry.reason}
                      </span>
                    </p>
                  </div>

                  {/* Exit Info */}
                  <div className="p-3 lg:px-4 lg:border-l border-slate-100 flex flex-col justify-center text-[11px]">
                    {item.exit ? (
                      <>
                        <div className="lg:hidden flex items-center gap-1 text-rose-600 font-bold uppercase mb-1">
                          <LogOut size={12}/> Ra trường
                        </div>
                        <p className="text-slate-600 leading-relaxed flex items-center gap-2">
                          <span>Lớp <span className="text-slate-900 font-bold">{item.exit.class}</span></span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-50 text-slate-600 border border-slate-200">
                            {item.exit.reason}
                          </span>
                        </p>
                      </>
                    ) : <span className="hidden lg:inline text-slate-300 italic">—</span>}
                  </div>

                  {/* Rewards */}
                  <div className="p-3 lg:px-4 lg:border-l border-slate-100 flex flex-col justify-center text-[11px]">
                    {item.rewards && item.rewards.length > 0 ? (
                      <>
                        <div className="lg:hidden flex items-center gap-1 text-amber-600 font-bold uppercase mb-1">
                          <Star size={12}/> Khen thưởng
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.rewards.map((reward, rIndex) => (
                            <span key={rIndex} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                              <Star size={10} className="fill-amber-400 text-amber-400"/> {reward}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : <span className="hidden lg:inline text-slate-300 italic">—</span>}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Separate Diploma Card at the end */}
            {student.learningProcess.some(item => item.diploma) && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: student.learningProcess.length * 0.05 }}
                className="relative group pl-10"
              >
                {/* Timeline Dot - Graduation Icon */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 shadow-md z-10 flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-white">
                  <GraduationCap size={12} className="text-white" />
                </div>

                <div className="bg-emerald-50/20 rounded-lg border border-emerald-200 transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr_1fr] items-stretch">
                  {/* Graduation Year & Label */}
                  <div className="p-3 pl-4 flex items-center gap-2 h-full">
                    <GraduationCap size={12} className="text-emerald-600" />
                    <div className="text-emerald-700 text-xs font-bold">
                      Năm {student.learningProcess.find(item => item.diploma)?.year.split(' - ')[1]}
                    </div>
                  </div>

                  {/* Diploma Details spread across columns to match dividers */}
                  <div className="p-3 lg:px-4 lg:border-l border-emerald-100 flex flex-col justify-center text-[11px]">
                    {student.learningProcess.filter(item => item.diploma).map((item, dIndex) => (
                      <div key={dIndex} className="flex items-center gap-2">
                        <span className="text-emerald-600 font-bold uppercase tracking-tighter text-[8px]">Xếp loại:</span>
                        <span className="text-emerald-900 font-bold">{item.diploma?.rank}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 lg:px-4 lg:border-l border-emerald-100 flex flex-col justify-center text-[11px]">
                    {student.learningProcess.filter(item => item.diploma).map((item, dIndex) => (
                      <div key={dIndex} className="flex items-center gap-2">
                        <span className="text-slate-400 font-bold uppercase tracking-tighter text-[8px]">Số hiệu:</span>
                        <span className="text-slate-700 font-medium">{item.diploma?.id}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 lg:px-4 lg:border-l border-emerald-100 flex flex-col justify-center text-[11px]">
                    {student.learningProcess.filter(item => item.diploma).map((item, dIndex) => (
                      <div key={dIndex} className="flex items-center gap-2">
                        <span className="text-slate-400 font-bold uppercase tracking-tighter text-[8px]">Ngày cấp:</span>
                        <span className="text-slate-700 font-medium">{item.diploma?.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default StudentDetail;
