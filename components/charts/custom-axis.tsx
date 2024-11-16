"use client";

import { XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts";

interface AxisProps {
  dataKey?: string;
  tickFormatter?: (value: any) => string;
}

export function XAxis({ dataKey, ...props }: AxisProps) {
  return (
    <RechartsXAxis
      dataKey={dataKey}
      stroke="hsl(var(--muted-foreground))"
      fontSize={12}
      tickLine={false}
      axisLine={false}
      {...props}
    />
  );
}

export function YAxis({ tickFormatter, ...props }: AxisProps) {
  return (
    <RechartsYAxis
      stroke="hsl(var(--muted-foreground))"
      fontSize={12}
      tickLine={false}
      axisLine={false}
      tickFormatter={tickFormatter}
      {...props}
    />
  );
}