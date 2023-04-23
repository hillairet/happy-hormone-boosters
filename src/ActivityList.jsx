export const ActivityList = ({ activities }) => {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity}>{activity}</li>
      ))}
    </ul>
  );
};
