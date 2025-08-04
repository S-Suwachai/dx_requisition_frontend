import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";
import type { Metadata } from "next";
import ComponentCard from "@/components/common/ComponentCard";
import { Input } from "antd";
import { CalendarOutlined, CodeOutlined, LoadingOutlined, SignatureOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";
import { Steps } from "antd";
import { CheckCircleIcon } from "@/icons";

export const metadata: Metadata = {
  title: "New Request Job",
  description: "New Request Job",
};

export default function NewRequestPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="New Request" />
      <div className="rounded-2xl border border-gray-200 bg-white mb-4">
        <div className="py-10 px-8">
          <Steps
            items={[
              {
                title: "Approval 1",
                status: "process",
                description: (
                  <>
                    <div><UserOutlined /> : Suwachai</div>
                    <div><CalendarOutlined /> : xx-xx-xx</div>
                  </>
                ),
                icon: <LoadingOutlined />,
              },
              {
                title: "Approval 2",
                status: "wait",
                description: (
                  <>
                    <div><UserOutlined /> : Rujira</div>
                    <div><CalendarOutlined /> : xx-xx-xx</div>
                  </>
                ),
                icon: <SignatureOutlined />,
              },
              {
                title: "Inprogress",
                status: "wait",
                description: (
                  <>
                    <div><UserOutlined /> : Supattra</div>
                    <div><CalendarOutlined /> : xx-xx-xx</div>
                  </>
                ),
                icon: <CodeOutlined />,
              },
              {
                title: "Testing",
                status: "wait",
                description: (
                  <>
                    <div><UserOutlined /> : User request</div>
                    <div><CalendarOutlined /> : xx-xx-xx</div>
                  </>
                ),
                icon: <SolutionOutlined />,
              },
              {
                title: "Complete",
                status: "wait",
                description: (
                  <>
                    <div><CalendarOutlined /> : xx-xx-xx</div>
                  </>
                ),
                icon: <CheckCircleIcon />,
              },
            ]}
          />
        </div>
      </div>
      <ComponentCard title="Default Input">
        <div>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
      </ComponentCard>
    </div>
  );
}
