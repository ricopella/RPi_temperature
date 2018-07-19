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

  public componentDidMount() {
    API.getCurrentTemp()
      .then(res => {
        console.log({ res });
        this.setState({
          temp: res,
        });
      })
      .catch(err => {
        console.log('ERROR Container: ', { err });
      });
  }

  public render() {
    const { temp } = this.state;

    return <div>Temperature is: {temp ? temp : 'N/A'}</div>;
  }
}
