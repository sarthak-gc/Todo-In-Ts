interface PriorityProp {
  priority: string;
}
const Priority: React.FC<PriorityProp> = ({ priority }) => {
  return (
    <span
      className={`text-sm px-4 py-1 rounded-sm  ${
        priority === "urgent"
          ? "bg-red-500 text-white border-2 border-red-700"
          : priority === "mid"
          ? "bg-yellow-500 text-black border-2 border-yellow-700"
          : priority === "clear" || !priority
          ? ""
          : "bg-green-500 text-white border-2 border-green-700"
      }`}
    >
      {priority === "clear" ? "" : priority}
    </span>
  );
};

export default Priority;
