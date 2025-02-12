import Image from "next/image";
import Link from "next/link";

function SchoolCard({ school }) {
  return (
    <Link href={'/school-details'} className="w-full h-[20rem] flex flex-col overflow-hidden bg-white rounded-2xl shadow-lg p-4">
      <Image 
        src={school.image} 
        width={600} 
        height={600} 
        className="object-cover w-full h-48 rounded-t-2xl" 
        alt={school.name}
      />
      <div className="flex flex-col p-4">
        <div className="text-lg font-semibold">{school.name}</div>
        <div className="text-sm text-gray-600">{school.smallDetail}</div>
      </div>
    </Link>
  );
}

export default SchoolCard;
