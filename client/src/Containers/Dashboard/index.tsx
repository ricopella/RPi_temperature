import { AxiosResponse } from 'axios';
import * as React from 'react';
import API from '../../Helpers/index';

export interface DashboardState {
  temp: AxiosResponse<any> | null;
}

export default class Dashboard extends React.Component<{}, DashboardState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      temp: null,
    };
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
    const { temp } = this.state;

    return (
    <div>
      <div>
        Temperature is: <i>{temp ? temp : 'N/A'}</i>
      </div>
      <button onClick={this.getTemp}>Click Me!</button>
    </div>
    )}
}
