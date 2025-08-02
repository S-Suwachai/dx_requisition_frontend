"use client";
import CardMetric from "@/components/common/CardMetric";
import { CheckCircleIcon, DocsIcon } from "@/icons";
import { CodeOutlined, FormOutlined, SignatureOutlined } from "@ant-design/icons";
import { Button, Table, Steps } from "antd";
import type { TableProps } from "antd";
import { SolutionOutlined } from "@ant-design/icons";
import React from "react";

interface DataType {
  key: string;
  req_no: string;
  request_date: string;
  factory: string;
  category: string;
  request_title: string;
  schedule_date: string;
  status: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Req. No.",
    dataIndex: "req_no",
    key: "req_no",
  },
  {
    title: "Request Date",
    dataIndex: "request_date",
    key: "request_date",
  },
  {
    title: "Factory",
    dataIndex: "factory",
    key: "factory",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Request title",
    dataIndex: "request_title",
    key: "request_title",
  },
  {
    title: "Schedule Date",
    dataIndex: "schedule_date",
    key: "schedule_date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Timeline",
    key: "timeline",
    render: (_, record) => {
      const statusOrder = ["approval", "inprogress", "testing", "complete"];

      const currentStepIndex = statusOrder.indexOf(record.status.toLowerCase());

      const stepItems = [
        {
          title: "Approval",
          icon: <SignatureOutlined />,
        },
        {
          title: "Inprogress",
          icon: <CodeOutlined />,
        },
        {
          title: "Testing",
          icon: <SolutionOutlined />,
        },
        {
          title: "Complete",
          icon: <CheckCircleIcon />,
        },
      ];

      return (
        <Steps
          size="small"
          current={currentStepIndex === -1 ? 0 : currentStepIndex}
          // className="custom-steps"
          items={stepItems.map((item, index) => ({
            ...item,
            status: index < currentStepIndex ? "finish" : index === currentStepIndex ? "process" : "wait",
          }))}
        />
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Button type="primary" icon={<FormOutlined />} onClick={() => console.log("Req No:", record.req_no)}>
        view
      </Button>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    req_no: "dx-000001",
    request_date: "2025-08-01",
    factory: "NAT",
    category: "create",
    request_title: "test",
    schedule_date: "2025-08-30",
    status: "approval",
  },
  {
    key: "2",
    req_no: "dx-000002",
    request_date: "2025-08-01",
    factory: "NAT",
    category: "create",
    request_title: "test",
    schedule_date: "2025-08-15",
    status: "inprogress",
  },
  {
    key: "3",
    req_no: "dx-000003",
    request_date: "2025-08-01",
    factory: "NAT",
    category: "create",
    request_title: "test",
    schedule_date: "2025-08-20",
    status: "testing",
  },
  {
    key: "4",
    req_no: "dx-000004",
    request_date: "2025-08-01",
    factory: "NAT",
    category: "create",
    request_title: "test",
    schedule_date: "2025-08-10",
    status: "complete",
  },
  {
    key: "5",
    req_no: "dx-000005",
    request_date: "2025-08-01",
    factory: "NAT",
    category: "create",
    request_title: "test",
    schedule_date: "2025-08-17",
    status: "wait approval",
  },
];

export default function JobRequestHomePage() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <CardMetric icon={<DocsIcon />} icon_color="bg-gray-100" topic={"Total request Job"} count={20} progress={1} />
        <CardMetric icon={<CheckCircleIcon />} icon_color="bg-green-100" topic={"Completed job"} count={5} progress={0} />
        <CardMetric icon={<CodeOutlined />} icon_color="bg-yellow-100" topic={"In progress"} count={20} progress={1} />
        <CardMetric icon={<SignatureOutlined />} icon_color="bg-orange-100" topic={"In approval process"} count={20} progress={1} />
      </div>
      <div className="space-y-6">
        <Table<DataType> columns={columns} dataSource={data} bordered pagination={false} />
      </div>
    </div>
  );
}
