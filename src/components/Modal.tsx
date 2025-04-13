"use client";

export default function Modal({
  isOpen,
  onClose,
  title,
  message,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">{message}</p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-[#3B3B3B] hover:bg-[#636262] text-white text-sm rounded-lg font-medium"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
