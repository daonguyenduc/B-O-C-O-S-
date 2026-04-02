import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Printer, User, BookOpen, Briefcase, GraduationCap, ShieldCheck, FileText, Download, Share2, Award, MapPin, Calendar, CreditCard, Info } from 'lucide-react';
import { motion } from 'motion/react';

const TeacherDetail = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { teacher: passedTeacher, bookCode, schoolName, schoolId } = location.state || {};

  // Comprehensive mock data for demonstration
  const defaultTeacher = {
    stt: '1',
    maGv: '7903663195',
    maSoDangBo: 'GV079093026117',
    name: 'Nguyễn Thị An',
    dob: '12-08-1985',
    gender: 'Nữ',
    hometown: 'Quận 1, Thành phố Hồ Chí Minh',
    cccd: '079185001234',
    arrivalDate: '05-09-2010',
    position: 'Giáo viên',
    department: 'Tổ Toán - Tin',
    qualification: 'Thạc sĩ',
    teachingAssignment: 'Toán học',
    major: 'Sư phạm Toán học',
    salaryRank: 'Giáo viên THCS hạng I (V.07.04.10)',
    partyDate: '19-05-2015',
    awards: 'Chiến sĩ thi đua cấp Thành phố năm học 2023-2024',
    notes: 'Đang công tác tại đơn vị'
  };

  // Merge passed data with default data to ensure no empty fields
  const teacher = { ...defaultTeacher, ...passedTeacher };

  const sections = [
    {
      title: 'Thông tin định danh & Cơ bản',
      icon: <User size={16} className="text-blue-600" />,
      fields: [
        { label: 'Mã giáo viên', value: teacher.maGv },
        { label: 'Mã số đăng bộ', value: teacher.maSoDangBo },
        { label: 'Họ và tên', value: teacher.name, highlight: true },
        { label: 'Ngày tháng năm sinh', value: teacher.dob },
        { label: 'Giới tính', value: teacher.gender },
        { label: 'Quê quán', value: teacher.hometown, fullWidth: true },
        { label: 'Số CCCD', value: teacher.cccd },
      ]
    },
    {
      title: 'Thông tin công tác & Chuyên môn',
      icon: <Briefcase size={16} className="text-blue-600" />,
      fields: [
        { label: 'Ngày về trường công tác', value: teacher.arrivalDate },
        { label: 'Chức vụ/Tổ chuyên môn', value: `${teacher.position} - ${teacher.department}` },
        { label: 'Trình độ chuyên môn cao nhất', value: teacher.qualification },
        { label: 'Phân công giảng dạy', value: teacher.teachingAssignment },
        { label: 'Chuyên ngành đào tạo', value: teacher.major },
        { label: 'Mã số, ngạch, bậc lương', value: teacher.salaryRank, fullWidth: true },
        { label: 'Ngày vào Đảng (nếu có)', value: teacher.partyDate || '—' },
      ]
    },
    {
      title: 'Khen thưởng & Ghi chú',
      icon: <Award size={16} className="text-blue-600" />,
      fields: [
        { label: 'Khen thưởng/Kỷ luật nổi bật', value: teacher.awards, fullWidth: true },
        { label: 'Ghi chú (Thuyên chuyển/nghỉ hưu...)', value: teacher.notes, fullWidth: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumbs - Compact */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-blue-600/60 mb-4">
          <button onClick={() => navigate('/')} className="hover:text-blue-600 transition-colors">Hệ thống</button>
          <span className="mx-2 text-slate-300">/</span>
          <button onClick={() => navigate(`/school/${schoolId || '1'}`, { state: { schoolName, activeTab: 'teacher' } })} className="hover:text-blue-600 transition-colors">Trường học</button>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-400 font-medium">Hồ sơ giáo viên</span>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto px-4 pb-8"
      >
        {/* Compact Header */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-600 overflow-hidden mb-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-4 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg shrink-0">
                <User size={40} className="text-white/90" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-xl font-bold text-white tracking-tight uppercase">{teacher.name}</h1>
                  <span className="px-2 py-0.5 bg-emerald-500 text-white text-[9px] font-bold uppercase rounded-full tracking-widest shadow-sm">
                    Đang công tác
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-blue-100 text-[11px] font-medium uppercase tracking-wide opacity-90">
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={12} className="text-blue-300" />
                    <span>{teacher.position}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={12} className="text-blue-300" />
                    <span>{teacher.department}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileText size={12} className="text-blue-300" />
                    <span>Mã GV: {teacher.maGv}</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/10" title="In hồ sơ">
                  <Printer size={18} />
                </button>
                <button className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/10" title="Tải PDF">
                  <Download size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Info Sections Grid - Grouped into distinct clusters */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50/30">
            {sections.map((section, idx) => (
              <div 
                key={idx} 
                className={`${section.fields.some(f => f.fullWidth) ? 'md:col-span-2' : ''} bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-blue-200 transition-colors`}
              >
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-3">
                  <div className="p-1.5 bg-blue-50 rounded-lg">
                    {section.icon}
                  </div>
                  <h3 className="text-[13px] font-bold text-blue-700 uppercase tracking-widest">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {section.fields.map((field, fIdx) => (
                    <div key={fIdx} className={`${field.fullWidth ? 'sm:col-span-2' : ''}`}>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                        {field.label}
                      </span>
                      <p className={`text-xs ${field.highlight ? 'text-blue-600 font-bold' : 'text-slate-700 font-medium'} leading-snug`}>
                        {field.value || '—'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Footer - Compact */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <ShieldCheck size={18} className="text-blue-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Dữ liệu đã xác thực</p>
              <p className="text-[9px] text-slate-500 font-medium">Hệ thống Sổ Đăng Bộ điện tử Thành phố Hồ Chí Minh</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Cập nhật lần cuối</p>
            <p className="text-[10px] font-medium text-slate-700">02/04/2026 - 02:15 PM</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeacherDetail;
