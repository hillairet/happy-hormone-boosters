import React from 'react';

export const ActivityList = ({ activities }) => {
  const listActivities = activities.map(activity =>
    <li>{activity}</li>
  );
  return <ul>{listActivities}</ul>;
}
