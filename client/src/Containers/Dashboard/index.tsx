import { AxiosResponse } from 'axios';
import * as React from 'react';

import Dashboard from '../../Components/Organisms/Dashboard';
import API from '../../Helpers';
import { CurrentTempResponse } from '../../types';

export interface DashboardState {
  mostRecent: CurrentTempResponse | null;
  temp: AxiosResponse<any> | null;
}

export default class DashboardContainer extends React.Component<
  {},
  DashboardState
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      mostRecent: null,
      temp: null,
    };
  }

  public componentDidMount() {
    API.getMostRecent().then(res => {
      this.setState(
        {
          mostRecent: res.data.temp[0],
        },
        () => console.log(this.state.mostRecent),
      );
    });
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
    return (
      <React.Fragment>
        <Dashboard
          getTemp={this.getTemp}
          temperature={temp}
          mostRecent={mostRecent}
        />
      </React.Fragment>
    );
  }
}
