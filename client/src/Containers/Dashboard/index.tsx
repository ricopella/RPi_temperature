import { AxiosResponse } from 'axios';
import * as React from 'react';

import API from '../../Helpers';
import { CurrentTempResponse } from '../../types';
import { formatDate } from '../../utils/strings';

export interface DashboardState {
  mostRecent: CurrentTempResponse | null;
  temp: AxiosResponse<any> | null;
}

export default class Dashboard extends React.Component<{}, DashboardState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      mostRecent: null,
      temp: null,
    };
  }

  public componentDidMount() {
    API.getMostRecent().then(res => {
      this.setState({
        mostRecent: res.data.temp[0]
      }, () => console.log(this.state.mostRecent))
    })
  }

  private getTemp = () => {
    API.getCurrentTemp()
      .then(res => {
        console.log({ res });
        this.setState({
          temp: res.data.temp,
        });
      })
      .catch(err => {
        console.log('ERROR Container: ', { err });
      });
  };

  public render() {
    const { mostRecent, temp } = this.state;
    const date = mostRecent && mostRecent.createdAt ? formatDate(mostRecent.createdAt) : 'N/A';

    return (
    <div>
      <h3>Most Recent Temperature: {mostRecent && mostRecent.temperature ? mostRecent.temperature : null}. Last check on {date}</h3>
      <div>
        Current Temperature is: <i>{temp ? temp : 'N/A'}</i>
      </div>
      <button onClick={this.getTemp}>Click Me!</button>
    </div>
    )}
}
