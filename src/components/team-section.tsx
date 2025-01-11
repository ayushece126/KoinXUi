import Image from "next/image";

export function TeamSection() {
  const team = [
    {
      name: "John Smith",
      role: "Designation here",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20at%202.56.48%E2%80%AFAM-XDsepZQJsC8VuYirJ8XJ6KN6jlglCq.png",
      bio: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra.",
    },
    // Add more team members as needed
  ];

  return (
    <div className="rounded-lg border bg-white p-4 sm:p-6">
      <h2 className="mb-4 text-lg sm:text-xl font-bold">Team</h2>
      <p className="mb-6 text-sm sm:text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam.
      </p>
      <div className="space-y-4">
        {team.map((member) => (
          <div key={member.name} className="rounded-lg bg-blue-50 p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
                <h3 className="mt-2 font-semibold text-sm sm:text-base">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {member.role}
                </p>
              </div>
              <p className="flex-1 text-sm sm:text-base text-gray-600">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
