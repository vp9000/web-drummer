type Props = {
  text: string;
};

export default function Subheading({ text }: Props) {
  return <h3 className=' mb-2 text-purple-950 text-opacity-70'>{text}</h3>;
}
