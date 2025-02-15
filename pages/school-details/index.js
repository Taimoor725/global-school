import Image from "next/image";
import { useSchoolStore } from "@/stores/UseStore";
import Schools from "@/utlities/SchoolsData";

function Details() {
    const { index } = useSchoolStore();
    const school = Schools[index];

    return (
        <div className="relative w-screen h-screen overflow-x-hidden">
            <Image
                src={school.image}
                alt={school.name}
                width={1920}
                height={1080}
                className="w-screen h-screen object-cover"
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-5">
                <div className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">{school.name}</div>
                <div className="text-lg md:text-xl font-light mt-2">{school.smallDetail}</div>
            </div>



            <div className="w-full bg-gray-100 py-12 px-6 md:px-16 lg:px-24 flex shadow-lg gap-12">
            
            
                {/* INFO */}
                <div className="w-1/2 mx-auto h-[60vh] bg-white p-10 rounded-2xl shadow-md">
                    <div className="text-5xl font-bold text-gray-800 mb-6">More Details</div>

                    <div className="text-gray-700 text-4xl">
                        <strong className="text-gray-900">Headmaster:</strong> {school.largeDetail.headmaster}
                    </div>

                    <div className="mt-6">
                        <div className="text-2xl font-semibold text-gray-900">Staff Members</div>
                        <div className="mt-2 space-y-2">
                            {school.largeDetail.staff.map((member, i) => (
                                <div key={i} className="text-lg text-gray-700">
                                    <strong className="text-gray-900">{member.name}</strong> - {member.position}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="text-2xl font-semibold text-gray-900">Facilities</div>
                        <div className="mt-2 space-y-2">
                            {school.largeDetail.facilities.map((facility, i) => (
                                <div key={i} className="text-lg text-gray-700">• {facility}</div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="text-2xl font-semibold text-gray-900">Achievements</div>
                        <div className="mt-2 space-y-2">
                            {school.largeDetail.achievements.map((achievement, i) => (
                                <div key={i} className="text-lg text-gray-700">🏆 {achievement}</div>
                            ))}
                        </div>
                    </div>
                </div>




                {/* Feed backs */}
                <div className="w-full h-[60vh] bg-white rounded-2xl shadow-md flex flex-col gap-10 p-3">
                    <div className="w-full border-4 h-[80vh] rounded-2xl">
                        <div className="max-w-full h-full overflow-y-auto overflow-x-hidden p-5">
                                abc
                        </div>
                    </div>

                    <div className="green w-full h-[10%] flex gap-5">
                        <input type="text" className="flex-grow border-4 outline-none px-3 text-2xl font-medium rounded-2xl" />
                        <button className="bg-blue-300 px-7 py-4 text-2xl font-bold flex justify-center items-center rounded-2xl">
                            Comment
                        </button>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default Details;
