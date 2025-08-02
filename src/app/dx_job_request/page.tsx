import CardMetric from "@/components/common/CardMetric";
import type { Metadata } from "next";
import { CheckCircleIcon, DocsIcon, PencilIcon, TimeIcon } from "@/icons";

export const metadata: Metadata = {
  title: "DX Job Request",
  description: "DX Job Request",
};

export default function Home() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <CardMetric icon={<DocsIcon />} icon_color="bg-gray-100" topic={"Total request Job"} count={20} progress={1} />
        <CardMetric icon={<CheckCircleIcon />} icon_color="bg-green-100" topic={"Completed job"} count={5} progress={0} />
        <CardMetric icon={<TimeIcon />} icon_color="bg-yellow-100" topic={"In progress"} count={20} progress={1} />
        <CardMetric icon={<PencilIcon />} icon_color="bg-orange-100" topic={"In approval process"} count={20} progress={1} />
      </div>
			<div className="space-y-6">
			</div>
    </div>
  );
}
