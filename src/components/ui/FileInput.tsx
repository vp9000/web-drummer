import Icon from "components/icons/Icon";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FileInput({ onChange }: Props) {
  return (
    <div>
      <label htmlFor='file-input' className='cursor-pointer'>
        <span className='text-4xl text-purple-400 hover:text-purple-500 transition-colors'>
          <Icon type='faUpload' />
        </span>
      </label>

      <input
        id='file-input'
        type='file'
        onChange={onChange}
        accept='application/json'
        className='hidden'
      />
    </div>
  );
}
