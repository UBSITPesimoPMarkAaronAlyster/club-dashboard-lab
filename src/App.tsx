import "./App.css";
import MembersList from "./MembersList";

const App = () => {
  const members = [
    { 
      name: "Mark Aaron Alyster P. Pesimo", 
      course: "BSIT", 
      status: "Active", 
      email: "20246896@s.ubaguio.edu", 
      phone: "09761492051", 
      activities: ["Orientation", "Workshop", "Club Meeting"]
    },
    { 
      name: "Joe Jujutsu", 
      course: "BSCS", 
      status: "Inactive", 
      email: "20243232@s.ubaguio.edu", 
      phone: "09763492054",
      activities: ["Fundraiser", "Seminar", "Volunteer Event"] 
    },
    { 
      name: "Mary Grace Solis", 
      course: "BSCS", 
      status: "Active", 
      email: "20246004@s.ubaguio.edu", 
      phone: "0976762904",
      activities: ["Project planning", "Social Event", "Leadership Training"]
    }
  ];

  return (
    <>
      <h1>School of Information Technology Students</h1>
      <section>
        <h2>List of Students</h2>
        {members.map((member, index) => (
          <MembersList
            key={index}
            name={member.name}
            course={member.course}
            status={member.status}
            email={member.email}
            phone={member.phone}
            activities={member.activities} 
          />
        ))}
   </section>
    </>
  );
};

export default App;