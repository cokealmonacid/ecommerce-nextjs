interface Props {
  status: boolean;
}

const ToggleStatus = ({ status }: Props) => {
  return (
    <label className="relative inline-flex items-center mr-5 cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" defaultChecked={status}/>
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-transparent peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
    </label>
  );
};

export default ToggleStatus;
