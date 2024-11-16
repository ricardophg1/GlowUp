"use client";

import { ReactNode } from "react";
import { chartConfig } from "./chart-config";

interface TooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  valuePrefix?: string;
  valueSuffix?: string;
}

export function ChartTooltip({ 
  active, 
  payload, 
  label,
  valuePrefix = "",
  valueSuffix = "",
}: TooltipProps): ReactNode {
  if (!active || !payload?.length) return null;

  const { style, labelStyle, valueStyle } = chartConfig.tooltip;

  return (
    <div className={style}>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <span className={labelStyle}>Month</span>
          <span className={valueStyle}>{payload[0].payload.month}</span>
        </div>
        <div className="flex flex-col">
          <span className={labelStyle}>{label}</span>
          <span className={valueStyle}>
            {valuePrefix}{payload[0].value}{valueSuffix}
          </span>
        </div>
      </div>
    </div>
  );
}