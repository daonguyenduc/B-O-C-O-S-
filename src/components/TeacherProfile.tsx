import React from 'react';
import { ArrowLeft, Printer, User, BookOpen, FileCheck, Award, Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface TeacherProfileProps {
  teacher: {
    stt: number;
    maVc: string;
    name: string;
    chuyenMon: string;
    to: string;
    status: string;
  };
  bookCode: string;
  onBack: () => void;
}

const TeacherProfile: React.FC<TeacherProfileProps> = ({ teacher, bookCode, onBack }) => {
  // Mock detailed data for the teacher
  const detailData = {
    personal: {
      gender: 'Nữ',
      dob: '15/08/1985',
      email: 'annt@c2nguyendu.edu.vn',
      phone: '090xxxx123'
    },
    professional: {
      degree: 'Thạc sĩ',
      major: 'Phương pháp Giảng dạy Toán',
      mainSubject: 'Toán',
      department: teacher.to
    },
    contract: {
      type: 'Viên chức (Biên chế)',
      entryDate: '20/08/2008',
      arrivalDate: '01/09/2015'
    },
    timeline: [
      {
        date: 'Tháng 09, 2015',
        title: 'Nhận công tác tại trường',
        description: 'Lý do: Thuyên chuyển từ trường THCS Lê Lợi.',
        type: 'work'
      },
      {
        date: 'Năm học 2018 - 2019',
        title: 'Hoàn thành xuất sắc nhiệm vụ',
        highlights: ['Đạt danh hiệu Giáo viên dạy Giỏi cấp Quận'],
        type: 'achievement'
      },
      {
        date: 'Tháng 08, 2022',
        title: 'Bổ nhiệm Tổ phó chuyên môn',
        description: 'Được bổ nhiệm làm Tổ phó Tổ Toán - Tin theo quyết định số 123/QĐ-ND.',
        type: 'work'
      },
      {
        date: 'Năm học 2023 - 2024',
        title: 'Hoàn thành xuất sắc nhiệm vụ',
        highlights: [
          'Bồi dưỡng học sinh đạt giải Nhì cấp Thành phố môn Toán',
          'Nhận Bằng khen của Giám đốc Sở GD&ĐT'
        ],
        type: 'achievement'
      }
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm transition-colors"
      >
        <ArrowLeft size={16} /> Quay lại danh sách
      </button>

      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-blue-600 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-50/50 rounded-full blur-2xl -ml-20 -mb-20"></div>
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Hồ sơ Giáo viên: {teacher.name}</h1>
            <p className="text-slate-500 text-sm font-medium mt-1">
              Mã Số: <span className="text-slate-700 font-bold">{bookCode}</span> | Mã VC/CC: <span className="text-slate-700 font-bold">{teacher.maVc}</span>
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold text-sm shadow-md active:scale-95 self-start md:self-center">
            <Printer size={18} /> In Hồ sơ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Info Cards */}
        <div className="lg:col-span-4 space-y-6">
          {/* Personal Info */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-[14px] font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2">
                <User size={18} className="text-blue-600"/> Thông tin cá nhân
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start text-sm">
                <span className="text-slate-500 font-bold">Họ và tên:</span>
                <span className="text-slate-800 font-bold text-right">{teacher.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">Giới tính:</span>
                <span className="text-slate-800 font-bold">{detailData.personal.gender}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">Ngày sinh:</span>
                <span className="text-slate-800 font-bold">{detailData.personal.dob}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">Email:</span>
                <span className="text-slate-800 font-bold">{detailData.personal.email}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">Số điện thoại:</span>
                <span className="text-slate-800 font-bold">{detailData.personal.phone}</span>
              </div>
            </div>
          </div>

          {/* Professional Info */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-[14px] font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2">
                <BookOpen size={18} className="text-blue-600"/> Thông tin Chuyên môn
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start text-sm">
                <span className="text-slate-500 font-bold">Trình độ:</span>
                <span className="text-slate-800 font-bold">{detailData.professional.degree}</span>
              </div>
              <div className="flex justify-between items-start text-sm">
                <span className="text-slate-500 font-bold">Chuyên ngành:</span>
                <span className="text-slate-800 font-bold text-right">{detailData.professional.major}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">Môn dạy chính:</span>
                <span className="text-slate-800 font-bold">{detailData.professional.mainSubject}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">Tổ chuyên môn:</span>
                <span className="text-slate-800 font-bold">{detailData.professional.department}</span>
              </div>
            </div>
          </div>

          {/* Contract Info */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-[14px] font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2">
                <FileCheck size={18} className="text-blue-600"/> Thông tin Hợp đồng
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start text-sm">
                <span className="text-slate-500 font-bold">Loại HĐ:</span>
                <span className="text-slate-800 font-bold text-right">{detailData.contract.type}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">Ngày vào ngành:</span>
                <span className="text-slate-800 font-bold">{detailData.contract.entryDate}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">Ngày về trường:</span>
                <span className="text-slate-800 font-bold">{detailData.contract.arrivalDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Timeline */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-300 overflow-hidden h-full">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-[14px] font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2">
                <Briefcase size={18} className="text-blue-600"/> Quá trình Công tác & Thành tích
              </h3>
            </div>
            <div className="p-8">
              <div className="relative space-y-12">
                {/* Vertical Line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-blue-100"></div>

                {detailData.timeline.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    {/* Dot */}
                    <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-white shadow-sm ${item.type === 'achievement' ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-wider">
                        <Calendar size={12} />
                        {item.date}
                      </div>
                      <h4 className="text-lg font-bold text-blue-900">{item.title}</h4>
                      
                      {item.description && (
                        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                      )}

                      {item.highlights && (
                        <div className="mt-3 p-4 bg-amber-50 border border-amber-100 rounded-lg space-y-2">
                          <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                            <Award size={16} /> Thành tích nổi bật
                          </div>
                          <ul className="space-y-1">
                            {item.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="text-amber-800 text-sm flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeacherProfile;
