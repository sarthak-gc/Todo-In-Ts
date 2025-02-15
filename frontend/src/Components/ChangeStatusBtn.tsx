interface ChangeStatusBtnProps {
  changeWorkStatus: (id: string) => Promise<void>;
  id: string;
  completed: boolean;
}
const ChangeStatusBtn: React.FC<ChangeStatusBtnProps> = ({
  changeWorkStatus,
  id,
  completed,
}) => {
  return (
    <button
      onClick={() => {
        changeWorkStatus(id);
      }}
      className={`px-4 py-2 rounded-lg  ${
        completed
          ? "bg-green-500 text-white hover:bg-green-700"
          : "bg-gray-600 text-gray-300 hover:bg-gray-700"
      }`}
    >
      {completed ? "Mark as Incomplete" : "Mark as Done"}
    </button>
  );
};

export default ChangeStatusBtn;
