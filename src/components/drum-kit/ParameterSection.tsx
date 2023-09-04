import DescriptiveText from "components/ui/DescriptiveText";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  name: string;
};

export default function ParameterSection({ children, name }: Props) {
  return (
    <div>
      <div className='border-2 border-yellow-400 rounded-xl h-28 flex items-center p-4'>
        <div>{children}</div>
      </div>

      <DescriptiveText>{name}</DescriptiveText>
    </div>
  );
}
