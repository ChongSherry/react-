import { Button } from 'antd';
import React from 'react';
export default class SiderDemo extends React.Component{
    render(){
        return(
          <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
            </div>
        )
    }
}