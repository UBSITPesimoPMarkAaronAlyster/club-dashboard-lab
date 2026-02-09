import "./App.css"

type ActivitiesProps = {
  items: string[];
};

const Activities = ({ items }: ActivitiesProps) => {
  return (
    <ul>
      {items.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  );
};

export default Activities;
