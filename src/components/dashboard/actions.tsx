import Image from 'next/image'

interface ActionsProps {
  edit?: boolean;
  remove?: boolean;
  view?: boolean;
}

const Actions = ({ edit, remove, view }: ActionsProps) => {
  return (
    <div className="flex gap-2">
      { view && <div className="cursor-pointer"><Image src="/eye.png" alt="Ver detalle" width={20} height={20}/></div> }
      { edit && <div className="cursor-pointer"><Image src="/pencil.png" alt="Ver detalle" width={20} height={20}/></div> }
      { remove && <div className="cursor-pointer"><Image src="/trash.png" alt="Ver detalle" width={20} height={20}/></div>}
    </div>
  )
}

export default Actions