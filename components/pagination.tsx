export function Pagination() {
  return (
    <div className="flex items-center gap-7">
      <button className="border-2 border-slate-400 bg-slate-200 text-slate-600 px-2 py-1">Prev</button>
      <span className="text-slate-800">{`Page 1 / 25`}</span>
      <button className="border-2 border-slate-400 bg-slate-200 text-slate-600 px-2 py-1">Next</button>
    </div>
  );
}