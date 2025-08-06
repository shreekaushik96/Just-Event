// src/pages/Leave/all-leave/leavebalance/index.jsx

import { TableComponent } from "@/components/table/TableComponent";
import { leaveBalanceData, leaveBalanceColumns } from "./constant";
import { useState, useEffect } from "react";

const LeaveBalanceTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  
  const handleEdit = (userData) => {
    console.log("Edit clicked for user:", userData);
    setSelectedUser(userData);
    setIsModalOpen(true);
  };


  useEffect(() => {
    console.log("Modal state:", { isModalOpen, selectedUser });
  }, [isModalOpen, selectedUser]);


  const columnsWithActions = [
    ...leaveBalanceColumns.filter(col => col.accessorKey !== "actions"),
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-1">
          <button
            className="btn btn-sm btn-icon btn-clear"
            title="Edit"
            onClick={(e) => {
              e.stopPropagation(); // Prevent row selection
              handleEdit(row.original);
            }}
          >
            <i className="ki-filled ki-notepad-edit text-primary"></i>
          </button>
        </div>
      )
    }
  ];

  return (
    <>
      <TableComponent 
        columns={columnsWithActions} 
        data={leaveBalanceData}
        paginationSize={10}
      />
    </>
  );
};

export default LeaveBalanceTable;
