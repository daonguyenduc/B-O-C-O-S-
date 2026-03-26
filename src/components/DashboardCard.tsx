import React from 'react';

interface DashboardCardProps {
  title: string;
  value: number;
  unit?: string;
  tooltip?: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const DashboardCard = ({ title, value, unit, tooltip, bgColor, textColor, borderColor, icon, onClick }: DashboardCardProps) => {
  return (
    <div 
      onClick={onClick}
      className={`group relative p-4 rounded-md ${bgColor} ${borderColor} flex flex-row items-center gap-4 h-full transition-all hover:shadow-md hover:-translate-y-0.5 border shadow-sm ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Custom Tooltip */}
      {tooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-[11px] font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-normal w-64 z-50 shadow-xl text-center border border-slate-700">
          {tooltip}
          {/* Tooltip Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
        </div>
      )}

      <div className="p-3 bg-white/90 backdrop-blur-sm rounded-md shadow-sm border border-slate-300 shrink-0">
        {React.cloneElement(icon as React.ReactElement, { size: 22 })}
      </div>
      <div className="flex flex-col justify-center text-left min-w-0">
        <h3 className="report-label mb-0.5">
          {title}
        </h3>
        <p className={`text-2xl md:text-3xl report-value ${textColor}`}>
          {value.toLocaleString()} <span className="text-sm font-bold opacity-70">{unit}</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
