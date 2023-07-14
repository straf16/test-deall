import clsx from "clsx";

interface PaginationProps {
  page: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, totalPage, onPageChange }: PaginationProps) {
  const handlePrev = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPage) {
      onPageChange(page + 1);
    }
  };

  return (
    <div className="flex items-center gap-7">
      <button
        className={clsx(
          "border-2 border-slate-400 bg-slate-200 text-slate-600 px-2 py-1",
          {
            "opacity-50": page === 1
          }
        )}
        onClick={handlePrev}
        disabled={page === 1}
      >
        Prev
      </button>
      <span className="text-slate-800">{`Page ${page} / ${totalPage}`}</span>
      <button
        className={clsx(
          "border-2 border-slate-400 bg-slate-200 text-slate-600 px-2 py-1",
          {
            "opacity-50": page === totalPage
          }
        )}
        onClick={handleNext}
        disabled={page === totalPage}
      >
        Next
      </button>
    </div>
  );
}