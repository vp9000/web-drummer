import DescriptiveText from "components/ui/DescriptiveText";
import Slider from "../ui/Slider";

type Props = {
  name: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function InstrumentParameter({ name, value, onChange }: Props) {
  return (
    <div>
      <Slider id={name} value={value ?? 0} onChange={onChange} />
      <DescriptiveText>{name}</DescriptiveText>
    </div>
  );
}
