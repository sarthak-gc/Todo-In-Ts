interface FormHeadingProp {
  title: string;
}
const FormHeading: React.FC<FormHeadingProp> = ({ title }) => {
  return (
    <h2 className="text-white text-2xl mb-4 text-center font-bold">{title}</h2>
  );
};

export default FormHeading;
