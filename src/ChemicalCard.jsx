import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { ActivityList } from './ActivityList';

import "primeflex/primeflex.css";                                  //easy CSS flex

export const ChemicalCard = ({ chemical, description, activities, color }) => {

  return (
    <Card title={chemical} subTitle={description} style={{ backgroundColor: color }} >
      <div class="flex justify-content-start">
          <ActivityList activities={activities} />
      </div>
    </Card>
  )
}
