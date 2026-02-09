import "./App.css";
import MembersList from "./MembersList";

const App = () => {
  const members = [
    { 
      name: "Alyster Pesimo", 
      course: "BSIT", 
      status: "Active", 
      email: "20246896@s.ubaguio.edu", 
      phone: "09666888712", 
      activities: ["Gaming", "Cubing", "Playing"]
    },
    { 
      name: "Joe Jujutsu", 
      course: "BSCS", 
      status: "Inactive", 
      email: "20243232@s.ubaguio.edu", 
      phone: "09671288007",
      activities: ["Martial Arts", "Seminar", "Battle"] 
    },
    { 
      name: "Mary Grace Solis", 
      course: "BSCS", 
      status: "Active", 
      email: "20246004@s.ubaguio.edu", 
      phone: "092342342",
      activities: ["Gaming", "Ramping", "Dancing"]
    }
  ];

  return (
    <>
      <h1>School of SIT Students</h1>
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
   <h1>Member Activities</h1>
   <p>Activity 1</p>
   <p>Activity 2</p>
   <p>Activity 3</p>
    </>
  );
};

export default App;