import React from "react";

const Shift = ({ shift }) => {
  if (!shift) return <td className="border-[1px] border-black"></td>;

  const { start_at, end_at, role, color } = shift;

  const cssColors = {
    red: "bg-red-700",
    orange: "bg-orange-500",
    green: "bg-green-600",
    purple: "bg-purple-700",
  };

  return (
    <td className="border-[1px] border-black">
      <div className={`${cssColors[color]} text-white p-3 font-semibold`}>
        <div>
          {start_at} - {end_at}
        </div>
        <div> {role} </div>
      </div>
    </td>
  );
};

export default Shift;
