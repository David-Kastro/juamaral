import React from "react";

interface Props {
  progress: number;
}

const ProgressBar: React.FC<Props> = ({ progress = 50 }) => {
  const percentage = progress < 0 ? 0 : progress > 100 ? 100 : progress;
  return (
    <div className="w-full max-w-[430px] rounded-full border-[1px] p-[6px] border-[#BD4A65]">
      <div className="w-full h-[22px] bg-[#E9E0D199] rounded-full">
        <div style={{ maxWidth: `${percentage}%` }} className="w-full h-full">
          <div className="w-full h-full bg-[#BD4A65] barload rounded-full">
            <div className="w-full fadeIn text-white text-right pr-3 text-sm font-semibold">
              {percentage}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
