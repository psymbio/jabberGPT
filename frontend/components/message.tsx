export default function Message({ content }: { content: string }) {
  return (
    <div>
      <div className="flex justify-center bg-red-100">
        <p>{content}</p>
      </div>
    </div>
  );
}
