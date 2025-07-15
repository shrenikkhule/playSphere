// EditUserModal.jsx
import React from "react";

const EditUserModal = ({
  isOpen,
  onClose,
  onSave,
  editedData,
  setEditedData,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md mx-auto rounded-xl shadow-xl p-6 relative">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit User</h2>

        <input
          type="text"
          value={editedData.phone}
          onChange={(e) =>
            setEditedData({ ...editedData, phone: e.target.value })
          }
          className="w-full mb-3 p-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="Phone Number"
        />

        <input
          type="text"
          value={editedData.address}
          onChange={(e) =>
            setEditedData({ ...editedData, address: e.target.value })
          }
          className="w-full mb-3 p-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="Address"
        />

        <select
          value={editedData.role}
          onChange={(e) =>
            setEditedData({ ...editedData, role: e.target.value })
          }
          className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors appearance-none"
        >
          <option value="admin">Admin</option>
          <option value="player">Player</option>
          <option value="coach">Coach</option>
          <option value="turf owner">Turf Owner</option>
          <option value="academies">Academy</option>
        </select>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
