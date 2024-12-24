"use client";

import TabButton from "./TabButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getRole } from "../actions/getRole";

const NavMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("post");
  const [role, setRole] = useState("APPLICANT");
  const tabs = [
    { name: "post", label: "내가 쓴 글" },
    { name: "comment", label: "내가 쓴 댓글" },
    { name: "scrap", label: "스크랩" },
  ];

  const filteredTabs =
    role === "OWNER" ? tabs.filter((tab) => tab.name !== "scrap") : tabs;

  useEffect(() => {
    const fetchRole = async () => {
      const roleFromServer = await getRole();
      setRole(roleFromServer);
    };
    fetchRole();
  }, []);

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl && tabs.some((tab) => tab.name === tabFromUrl)) {
      setActiveTab(tabFromUrl);
    } else {
      router.push(`/mypage?tab=post`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, router]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/mypage?tab=${tab}`);
  };

  return (
    <div className="flex max-w-[327px] gap-[10px] rounded-[14px] bg-background-200 p-[6px] pc:w-[422px]">
      {filteredTabs.map((tab) => (
        <TabButton
          key={tab.name}
          onClick={() => handleTabChange(tab.name)}
          className={
            activeTab === tab.name
              ? "bg-gray-50 text-black-400"
              : "text-gray-400"
          }
        >
          {tab.label}
        </TabButton>
      ))}
    </div>
  );
};

export default NavMenu;
