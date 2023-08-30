type Props = {
  text: string;
};

export default function Heading({ text }: Props) {
  return <h2 className='text-2xl text-purple-950'>{text}</h2>;
}
