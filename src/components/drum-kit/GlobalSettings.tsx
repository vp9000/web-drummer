import Icon from "components/icons/Icon";
import Subheading from "components/ui/Subheading";
import TextButton from "components/ui/TextButton";

export default function GlobalSettings() {
  return (
    <>
      <div className='text-right'>
        <Subheading text='Data' />

        <div className='text-2xl flex justify-end gap-3'>
          <TextButton>
            <Icon type='faArrowsRotate' />
          </TextButton>

          <TextButton>
            <Icon type='faFileImport' />
          </TextButton>

          <TextButton>
            <Icon type='faDownload' />
          </TextButton>
        </div>
      </div>
    </>
  );
}
