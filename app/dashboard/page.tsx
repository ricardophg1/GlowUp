"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { StatCard } from "@/components/dashboard/stat-card";
import { Users, BarChart3, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LoadingSpinner } from "@/components/loading-spinner";

// Lazy load charts with custom loading states
const RevenueChart = dynamic(
  () => import('@/components/charts/revenue-chart').then(mod => mod.RevenueChart),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] w-full flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }
);

const ActivityTimeline = dynamic(
  () => import('@/components/dashboard/activity-timeline').then(mod => mod.ActivityTimeline),
  {
    loading: () => <div className="h-[400px] animate-pulse bg-muted rounded-lg" />
  }
);

// Pre-define static data
const stats = [
  {
    title: "Total Customers",
    value: "2,350",
    icon: Users,
    change: { value: "12% from last month", positive: true }
  },
  {
    title: "Active Projects",
    value: "145",
    icon: BarChart3,
    change: { value: "4% from last month", positive: false }
  },
  {
    title: "Customer Satisfaction",
    value: "98%",
    icon: ArrowUpRight,
    change: { value: "2% from last month", positive: true }
  },
  {
    title: "Revenue Growth",
    value: "24%",
    icon: ArrowDownRight,
    change: { value: "8% from last month", positive: true }
  }
];

export default function DashboardPage() {
  return (
    <div className="container max-w-[1200px] mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <Suspense fallback={<div className="h-[300px] animate-pulse bg-muted rounded-lg" />}>
            <RevenueChart />
          </Suspense>
        </div>
        <div className="col-span-3">
          <Suspense fallback={<div className="h-[400px] animate-pulse bg-muted rounded-lg" />}>
            <ActivityTimeline />
          </Suspense>
        </div>
      </div>
    </div>
  );
}