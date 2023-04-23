export const ActivityList = ({ activities }) => {
  return (
    <ul>
      // Here I assume `activity` is a unique string & can be used as key
      {activities.map((activity) => (
        <li key={activity}>{activity}</li>
      ))}
    </ul>
  );
};
