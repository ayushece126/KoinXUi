import Image from "next/image";
// import { fetchTeamData } from "@/utils/api";

export function Team() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Designation here",
      image: "/placeholder-avatar.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more team members as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Team</h2>
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg p-4 flex items-start"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={64}
              height={64}
              className="rounded-lg mr-4"
            />
            <div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="mt-2 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
