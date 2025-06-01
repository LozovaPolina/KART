export default function Pagination({ totalPages, currentPage, setPage }) {
  return (
    <div className="flex justify-center mt-6 gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`w-8 h-8 rounded-md hover:shadow hover:bg-[#A0C287] hover:text-white text-sm font-medium ${currentPage === i ? 'bg-[#A0C287] text-[#FFFFFF]' : 'border border-[#A0C287] text-[#A0C287] '
            }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
