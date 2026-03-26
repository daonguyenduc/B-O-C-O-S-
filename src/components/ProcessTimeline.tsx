import React, { useState } from 'react';
import { FileText, UserCheck, Stamp, User, Clock, Check, ChevronDown, ChevronUp } from 'lucide-react';

const ProcessTimeline = () => {
  const [isStartOpen, setIsStartOpen] = useState(true);
  const [isEndOpen, setIsEndOpen] = useState(true);

  return (
    <div className="py-1 space-y-4">
      {/* 2. Thẻ chi tiết tiến độ */}
      <div className="space-y-4">
        {/* Đầu năm học */}
        <div className="border border-slate-300 rounded-lg overflow-hidden">
          <button 
            onClick={() => setIsStartOpen(!isStartOpen)}
            className="w-full flex justify-between items-center bg-slate-50 px-4 py-3"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">
                Đầu năm học <span className="text-slate-400 font-normal">(4/4)</span>
              </span>
              <span className="px-3 py-1 rounded-lg text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Đã hoàn thành
              </span>
            </div>
            {isStartOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
          </button>
          
          {isStartOpen && (
            <div className="relative pl-4 pr-2 py-4 space-y-4 bg-white">
              {/* Vertical line */}
              <div className="absolute top-4 bottom-4 left-7 w-0.5 bg-slate-100"></div>
              <div className="absolute top-4 bottom-4 left-7 w-0.5 bg-emerald-500"></div>

              {/* Step 1 */}
              <div className="relative flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <FileText size={12} />
                </div>
                <div className="flex-1 bg-white border border-emerald-100 rounded-lg px-3 py-2 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[12px] font-semibold text-slate-800">Khởi tạo sổ đăng bộ</h4>
                    <Check size={12} className="text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500 font-medium">
                    <span className="flex items-center gap-0.5"><User size={10} /> Nguyễn Văn A</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <UserCheck size={12} />
                </div>
                <div className="flex-1 bg-white border border-emerald-100 rounded-lg px-3 py-2 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[12px] font-semibold text-slate-800">Ký số duyệt khởi tạo</h4>
                    <Check size={12} className="text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500 font-medium">
                    <span className="flex items-center gap-0.5"><User size={10} /> Lê Văn C</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <Stamp size={12} />
                </div>
                <div className="flex-1 bg-white border border-emerald-100 rounded-lg px-3 py-2 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[12px] font-semibold text-slate-800">Đóng dấu ban hành sổ</h4>
                    <Check size={12} className="text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500 font-medium">
                    <span className="flex items-center gap-0.5"><User size={10} /> Văn thư</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <User size={12} />
                </div>
                <div className="flex-1 bg-white border border-emerald-100 rounded-lg px-3 py-2 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[12px] font-semibold text-slate-800">Cấp mã số đăng bộ</h4>
                    <Check size={12} className="text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500 font-medium">
                    <span className="flex items-center gap-0.5"><User size={10} /> Học vụ</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cuối năm học */}
        <div className="border border-slate-300 rounded-lg overflow-hidden">
          <button 
            onClick={() => setIsEndOpen(!isEndOpen)}
            className="w-full flex justify-between items-center bg-slate-50 px-4 py-3"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">
                Cuối năm học <span className="text-slate-400 font-normal">(1/3)</span>
              </span>
              <span className="px-3 py-1 rounded-lg text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                Chờ ký xác nhận dữ liệu
              </span>
            </div>
            {isEndOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
          </button>

          {isEndOpen && (
            <div className="relative pl-4 pr-2 py-4 space-y-4 bg-white">
              {/* Vertical line */}
              <div className="absolute top-4 bottom-4 left-7 w-0.5 bg-slate-100"></div>
              <div className="absolute top-4 h-[50px] left-7 w-0.5 bg-emerald-500"></div>

              {/* Step 5 */}
              <div className="relative flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <Clock size={12} />
                </div>
                <div className="flex-1 bg-white border border-emerald-100 rounded-lg px-3 py-2 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[12px] font-semibold text-slate-800">Đồng bộ dữ liệu</h4>
                    <Check size={12} className="text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500 font-medium">
                    <span className="flex items-center gap-0.5"><User size={10} /> Học vụ</span>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm ring-2 ring-amber-50">
                  <User size={12} />
                </div>
                <div className="flex-1 bg-white border border-amber-200 rounded-lg px-3 py-2 shadow-sm">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[12px] font-semibold text-amber-900">Ký số xác nhận dữ liệu</h4>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500 font-medium">
                    <span className="flex items-center gap-0.5"><User size={10} /> Hiệu trưởng</span>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="relative flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center shrink-0 z-10 border border-slate-300">
                  <Stamp size={12} />
                </div>
                <div className="flex-1 bg-slate-50/50 border border-slate-100 rounded-lg px-3 py-2">
                  <h4 className="text-[12px] font-semibold text-slate-400">Đóng dấu xác nhận</h4>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400 font-medium">
                    <span className="flex items-center gap-0.5"><User size={10} /> Văn thư</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
