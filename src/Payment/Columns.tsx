"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  kelas: string;
  jenjang: string;
  pendapatan: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "kelas",
    header: "Kelas",
  },
  {
    accessorKey: "jenjang",
    header: "Jenjang",
  },
  {
    accessorKey: "pendapatan",
    header: "Pendapatan",
  },
];