"use client";
import type { ReactNode } from "react";
import Badge from "../ui/badge/Badge";
import { ArrowUpIcon, DocsIcon } from "@/icons";

interface CardMetricProps {
  icon: ReactNode;
	icon_color: string,
  topic: string;
  count: number;
  progress: number;
}

const CardMetric: React.FC<CardMetricProps> = ({ icon, icon_color, topic, count, progress }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
      <div className={`flex items-center justify-center w-12 h-12 ${icon_color} rounded-xl`}>{icon}</div>
      <div className="flex items-end justify-between mt-3">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{topic}</span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">{count}</h4>
        </div>
        <Badge color="success">
          <ArrowUpIcon />
          {progress}
        </Badge>
      </div>
    </div>
  );
};

export default CardMetric;
