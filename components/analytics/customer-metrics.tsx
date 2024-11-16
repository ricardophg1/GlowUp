"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Users, Activity, Target, TrendingUp } from "lucide-react";

const metrics = [
  {
    title: "Total Customers",
    value: "2,350",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Active Users",
    value: "1,875",
    change: "+8%",
    trend: "up",
    icon: Activity,
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-2%",
    trend: "down",
    icon: Target,
  },
  {
    title: "Revenue Growth",
    value: "24%",
    change: "+5%",
    trend: "up",
    icon: TrendingUp,
  },
];

export function CustomerMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const isUp = metric.trend === "up";
        
        return (
          <Card key={metric.title} className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium">{metric.title}</p>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">{metric.value}</p>
              <div className={`flex items-center text-sm ${
                isUp ? "text-green-500" : "text-red-500"
              }`}>
                {isUp ? (
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                ) : (
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                )}
                {metric.change}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}