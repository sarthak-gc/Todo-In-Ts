interface LabelProp {
  forHtml: string;
  label: string;
}
const Label: React.FC<LabelProp> = ({ forHtml, label }) => {
  return (
    <label className="block text-white mb-2" htmlFor={forHtml}>
      {label}
    </label>
  );
};

export default Label;
