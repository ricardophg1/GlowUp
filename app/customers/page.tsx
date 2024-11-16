"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";

const DataTable = dynamic(
  () => import('@/components/customers/data-table').then(mod => mod.DataTable),
  {
    loading: () => <div className="h-[500px] animate-pulse bg-muted rounded-lg" />,
    ssr: true
  }
);

import { columns } from "@/components/customers/columns";
import { customers } from "@/components/customers/data";

export default function CustomersPage() {
  return (
    <div className="h-full flex-1 flex flex-col gap-8 p-8">
      <div className="container max-w-[1200px] mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
            <p className="text-muted-foreground">
              Manage and track your customer relationships
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Customer
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <Suspense fallback={<div className="h-[500px] animate-pulse bg-muted rounded-lg" />}>
            <DataTable columns={columns} data={customers} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}