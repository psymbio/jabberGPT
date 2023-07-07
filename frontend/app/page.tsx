'use client';
import { RootState } from "@/app/redux/store";
import HeadNav from "@/components/headnav";
import SendMessage from "@/components/sendmessage";
import ChatArea from "@/components/chatarea";
import { useSelector } from "react-redux";
import SideNav from "@/components/sidenav";

export default function Home() {
  const allMessages = useSelector((state: RootState) => state.testChat.messages);
  const chatAreaRendered = ChatArea(allMessages);
  return (
    <div className="flex overflow-x-hidden overflow-y-hidden">
      <div className="fixed w-full z-10">
        <HeadNav />
      </div>
      <div className="flex flex-grow">
        <div className="fixed z-10">
          <SideNav />
        </div>
        <div className="flex-grow float-left pt-20 z-0 ml-32">{chatAreaRendered}</div>
        <div className="fixed bottom-5 z-0 left-16 ml-32">
          <SendMessage />
        </div>
      </div>
    </div>
  );
}
