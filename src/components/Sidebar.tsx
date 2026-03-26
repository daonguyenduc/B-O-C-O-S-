import React from 'react';
import { BookOpen, Users, X, LogOut, User, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  activeTab: 'teacher' | 'student';
  onTabChange: (tab: 'teacher' | 'student') => void;
  onClose: () => void;
}

const Sidebar = ({ activeTab, onTabChange, onClose }: SidebarProps) => {
  const navigate = useNavigate();

  const handleTabChange = (tab: 'teacher' | 'student') => {
    onTabChange(tab);
    navigate('/');
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/50 z-40 md:hidden" 
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="w-64 bg-[#1a2332] text-white min-h-screen p-4 flex flex-col fixed md:sticky top-0 shadow-2xl z-50 h-screen overflow-y-auto left-0">
        {/* Header with Close Button */}
        <div className="flex items-start justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md shrink-0 p-1">
              <img src="https://picsum.photos/seed/logo/60/60" alt="Logo" className="w-full h-full object-cover rounded-lg" referrerPolicy="no-referrer" />
            </div>
            <span className="font-bold text-lg text-white">VNEdu Portal</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white shrink-0 mt-2"
            title="Đóng menu"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-4 mb-4">Danh mục quản lý</p>
        <button 
          onClick={() => handleTabChange('student')}
          className={`flex items-center w-full p-4 rounded-xl transition-all duration-200 group ${activeTab === 'student' ? 'bg-[#1d4ed8] text-white shadow-md' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
        >
          <Users className={`mr-4 transition-colors ${activeTab === 'student' ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} size={22} />
          <span className="text-[15px] font-bold">Sổ đăng bộ học sinh</span>
        </button>
        <button 
          onClick={() => handleTabChange('teacher')}
          className={`flex items-center w-full p-4 rounded-xl transition-all duration-200 group ${activeTab === 'teacher' ? 'bg-[#1d4ed8] text-white shadow-md' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
        >
          <BookOpen className={`mr-4 transition-colors ${activeTab === 'teacher' ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} size={22} />
          <span className="text-[15px] font-bold">Sổ đăng bộ giáo viên</span>
        </button>
      </nav>

      {/* User Profile & Logout */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="bg-white/5 rounded-md p-4 mb-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-900/40">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">adminso</p>
              <p className="text-[10px] text-slate-500 font-medium truncate">Quản trị viên hệ thống</p>
            </div>
          </div>
          <button className="flex items-center gap-2 w-full p-2.5 rounded-md text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all">
            <User size={14} />
            Thông tin tài khoản
          </button>
        </div>
        <button className="flex items-center justify-center gap-2 w-full p-3 rounded-md bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-200 font-bold text-sm">
          <LogOut size={18} />
          Đăng xuất
        </button>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
