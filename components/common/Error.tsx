interface Props {
  text: string;
}
const Error = ({ text }: Props) => {
  return <div>{text}</div>;
};

export default Error;
