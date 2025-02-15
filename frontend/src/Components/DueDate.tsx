interface DueDateProps {
  dueDate: string;
  timeLimit: string;
}
const DueDate: React.FC<DueDateProps> = ({ dueDate, timeLimit }) => {
  return (
    <p className={`text-sm text-gray-400 ${dueDate ? "block" : "hidden"}`}>
      Due Date: {dueDate} | Time Limit: {timeLimit}
    </p>
  );
};

export default DueDate;
