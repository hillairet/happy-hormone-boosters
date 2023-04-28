export const ActivityList = ({ activities }) => {
  return (
    <ul>
      {activities.map((activity) => (
        <li class="text-left" key={activity}>{activity}</li>
      ))}
    </ul>
  );
};
