import React from "react";
import { tableData } from "../constants/data";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
  /**
   * 1st column
   * cell :: Defining what value will be rendered in the cell when iterating each table row,
   * header :: Defining how Header will be rendered in the table,
   */
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: () => <span className="bg-red-500">ID</span>,
  }),

  /**
   * 2nd column
   */
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span className="bg-red-500">Name</span>,
  }),

  /**
   * 3rd column
   */
  columnHelper.accessor("email", {
    cell: (info) => (
      <span className="text-sky-500 italic">{info.getValue()}</span>
    ),
    header: () => <span className="bg-red-500">Email</span>,
    enableSorting: true,
    sortDescFirst: true,
  }),

  /**
   * 4th column
   */
  columnHelper.accessor("phone", {
    cell: (info) => info.getValue(),
    header: () => <span className="bg-red-500">Phone</span>,
  }),
];

const TanstackTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  console.log("Table --->", table);
  console.log("Table Header Groups -->", table.getHeaderGroups());
  console.log("Table Actual Header -->", table.getHeaderGroups()[0].headers);

  console.log("Table Rows -->", table.getRowModel().rows);
  console.log("Table Rows 1st Row -->", table.getRowModel().rows[0]);
  // console.log("Table Rows 1st Row Cells -->", table.getRowModel().rows[0].);

  return (
    <div className="bg-white text-black">
      <table className="divide-y divide-gray-400">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            /**
             * This map is only once.
             */
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  <div
                    className={
                      header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : ""
                    } // Make sortable headers clickable
                    onClick={header.column.getToggleSortingHandler()} // Toggle sorting on click
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {/* Add sorting indicators */}
                    {{
                      asc: " ↑",
                      desc: " ↓",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TanstackTable;
