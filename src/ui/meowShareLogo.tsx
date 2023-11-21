import { CameraIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/ui/fonts';

export default function MeowShareLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-left leading-none text-white`}
    >
      <CameraIcon className="h-20 w-20 rotate-[15deg]" />
      <p className="text-[30px]">Meow Share</p>
    </div>
  );
}
