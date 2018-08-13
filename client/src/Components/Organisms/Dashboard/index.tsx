import { AxiosResponse } from 'axios';
import * as React from 'react';

import { CurrentTempResponse } from '../../../types';
import { formatDate, removeLineBreak } from '../../../utils/strings';
import Tile from '../../Atoms/Tile';

import './dashboard.css';

export interface DashboardProps {
  getTemp: () => void;
  mostRecent: CurrentTempResponse | null;
  temperature: AxiosResponse<any> | null;
}

export default class Dashboard extends React.PureComponent<
  DashboardProps,
  any
> {
  public render() {
    const { getTemp, mostRecent, temperature } = this.props;

    const date =
      mostRecent && mostRecent.createdAt
        ? formatDate(mostRecent.createdAt)
        : 'N/A';
    return (
      <div className="dashboard-container">
        <Tile>
          <div className="dashboard-header">
            <h3>
              Most Recent Temperature:{' '}
              {mostRecent && mostRecent.temperature
                ? `${removeLineBreak(mostRecent.temperature)}.`
                : 'N/A'}
            </h3>
            <span>
              <i>Last checked: {date}</i>
            </span>
          </div>
          <div className="dashboard-body">
            Current Temperature is: <i>{temperature ? temperature : 'N/A'}</i>
          </div>
          <button onClick={getTemp}>Get Temperature!</button>
        </Tile>
      </div>
    );
  }
}
