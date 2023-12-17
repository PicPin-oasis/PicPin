interface Props {
  text: string;
}
export const Error = ({ text }: Props) => {
  return <div>{text}</div>;
};
