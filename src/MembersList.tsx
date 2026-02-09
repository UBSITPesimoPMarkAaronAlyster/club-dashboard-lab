import "./App.css";
import Activities from "./Activities";

type MembersProps = {
    name: string;
    course: string;
    status: string;
    email: string;
    phone: string;
    activities: string[];
};

const MembersList = ({
    name,
    course,
    status,
    email,
    phone,
    activities,
}: MembersProps) => {
    return (
        <div className="member-card">
            <h2>{name}</h2>
            <hr/>
            <p>Course: {course}</p>
            <p>Status: {status}</p>
            <p>Email: {email}</p>
            <p>Phone #: {phone}</p>
            <hr/>
            <h3>Activities:</h3>
            <Activities items={activities} />
            <hr/>
        </div>
    );
};

export default MembersList;