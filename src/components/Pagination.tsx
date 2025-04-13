"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="mt-6 flex items-center justify-center gap-4 text-sm">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-[#585660] px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        ← Back
      </button>

      <span className="text-gray-700">
        Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-[#585660] px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Next →
      </button>
    </div>
  );
}
