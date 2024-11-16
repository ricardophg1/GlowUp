"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 2500 },
  { month: "Mar", revenue: 3000 },
  { month: "Apr", revenue: 2800 },
  { month: "May", revenue: 3500 },
  { month: "Jun", revenue: 4000 },
  { month: "Jul", revenue: 4200 },
];

interface XAxisProps {
  hide?: boolean;
  dataKey?: string;
  stroke?: string;
  fontSize?: number;
}

interface YAxisProps {
  hide?: boolean;
  stroke?: string;
  fontSize?: number;
  tickFormatter?: (value: number) => string;
}

const CustomXAxis = ({ hide = false, dataKey = "month", stroke = "#888888", fontSize = 12 }: XAxisProps) => (
  <XAxis 
    dataKey={dataKey}
    stroke={stroke}
    fontSize={fontSize}
    hide={hide}
    tickLine={false}
    axisLine={false}
  />
);

const CustomYAxis = ({ 
  hide = false, 
  stroke = "#888888", 
  fontSize = 12,
  tickFormatter = (value: number) => `$${value}`
}: YAxisProps) => (
  <YAxis
    stroke={stroke}
    fontSize={fontSize}
    hide={hide}
    tickLine={false}
    axisLine={false}
    tickFormatter={tickFormatter}
  />
);

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <defs>
                <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CustomXAxis />
              <CustomYAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#revenue)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}