import { CameraIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/ui/fonts';

export default function MeowShareLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-end leading-none text-white`}
    >
      <CameraIcon className="h-30 w-20 transform rotate-[15deg]" />
      <p className="flex flow-row text-[30px]">Meow Share</p>
    </div>
  );
}
