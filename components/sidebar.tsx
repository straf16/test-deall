"use client"

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function Sidebar() {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-slate-400 bg-slate-200 lg:bottom-0 lg:z-auto lg:w-64 lg:border-b-0 lg:border-r-2 lg:border-slate-400">
      <div
        className="fixed flex border-b border-slate-400 bg-slate-200 lg:static lg:block inset-x-0 lg:mt-6 lg:border-0"
      >
        <nav className="space-y-6 w-full lg:px-4 lg:py-5">
          <div>
            <div className={clsx(
              "px-2 text-xs font-semibold tracking-wider lg:border-l-4",
              {
                "lg:border-indigo-500 text-indigo-700": segment === "product"
              }
            )}>
              <Link
                // onClick={close}
                href={"/product"}
                className={"block px-2 py-3 lg:px-3 lg:py-4 text-sm text-center lg:text-left font-medium hover:text-indigo-200"}
              >
                {"Products"}
              </Link>
            </div>
            <div className={clsx(
              "px-2 text-xs font-semibold tracking-wider lg:border-l-4",
              {
                "lg:border-indigo-500 text-indigo-700": segment === "cart"
              }
            )}>
              <Link
                // onClick={close}
                href={"/cart"}
                className={"block px-2 py-3 lg:px-3 lg:py-4 text-sm text-center lg:text-left font-medium hover:text-indigo-200"}
              >
                {"Carts"}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}