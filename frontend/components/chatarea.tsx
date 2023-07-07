import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl as codeStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

type MessageType = {
  content: string;
  isUser: boolean;
};
export default function ChatArea(allMessages: MessageType[]) {
  const allMessagesPrint = allMessages.map((message, index) => (
    <ReactMarkdown
      className={`justify-left ${
        message.isUser ? "bg-cyan-50" : "bg-gray-50"
      } pl-2 pt-2 pb-2`}
      key={index}
      children={message.content}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const [tooltipVisible, setTooltipVisible] = useState(false);

          const handleCopy = () => {
            setTooltipVisible(true);
            console.log("tooltip");
            setTimeout(() => {
              setTooltipVisible(false);
            }, 1500);
          };
          return !inline && match ? (
            <div className="relative">
              <CopyToClipboard text={children} onCopy={handleCopy}>
                <div className="absolute right-2 top-2 text-white cursor-pointer text-xl hover:text-lime-400">
                  <FaRegCopy />
                  {tooltipVisible && (<div className="absolute right-0 top-4.5 text-lime-500 text-sm">
                    Copied!
                  </div>)}
                </div>
              </CopyToClipboard>
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                style={codeStyle}
                language={match[1]}
                PreTag="div"
                showLineNumbers="true"
                wrapLines="true"
                wrapLongLines="true"
                className="rounded-lg"
              />
            </div>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    />
  ));
  return (
    <div
      className="bg-gray-50 overflow-auto translate-x-20 rounded-lg"
      style={{ width: "calc(100vw - 14rem)", height: "calc(100vh - 17rem)" }}
    >
      {allMessagesPrint}
    </div>
  );
}
