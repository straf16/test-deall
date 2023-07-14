"use client"

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function Sidebar() {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-slate-400 bg-slate-200 lg:bottom-0 lg:z-auto lg:w-64 lg:border-b-0 lg:border-r-2 lg:border-slate-400">
      <div
        className='overflow-y-auto lg:static lg:block fixed inset-x-0 bottom-0 top-14 mt-6'
      >
        <nav className="space-y-6 px-4 py-5">
          <div>
            <div className={clsx(
              "px-2 text-xs font-semibold tracking-wider border-l-4",
              {
                "border-indigo-500 text-indigo-700": segment === "product"
              }
            )}>
              <Link
                // onClick={close}
                href={"/product"}
                className={"block rounded-md px-3 py-4 text-sm font-medium hover:text-indigo-200"}
              >
                {"Product"}
              </Link>
            </div>
            <div className={clsx(
              "px-2 text-xs font-semibold tracking-wider border-l-4",
              {
                "border-indigo-500 text-indigo-700": segment === "cart"
              }
            )}>
              <Link
                // onClick={close}
                href={"/cart"}
                className={"block rounded-md px-3 py-4 text-sm font-medium hover:text-indigo-200"}
              >
                {"Cart"}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}