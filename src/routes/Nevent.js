import React from 'react';
import '../assets/css/event.css';
import { CommentOutlined, TeamOutlined, ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import {Link} from 'dva/router';
import { DatePicker, TimePicker, Input, AutoComplete } from 'antd';
import moment from 'moment';

class Nevent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
          value: null
        };
    }
    onChange=(time)=> {
      console.log(moment(time))
      this.setState({
        value: time
      })
    }
    selectDate=(date, dateString)=>{
      console.log(date, dateString);
    }
    onClick=()=> {
      this.props.history.push({
        pathname: '/seeEvent'
      })
    }
    render() {
        return (
            <div className='eventMain'>
                <header><span><Link to='/'><ArrowLeftOutlined /></Link></span><span>New event</span></header>
                <ul className='contents'>
                    <li>
                      <Input 
                        placeholder="Enter event name here"
                        className='iconInput'
                      />
                    </li>
                    <li>
                      <Input.Group compact>
                        <AutoComplete
                          placeholder="Select Event Type"
                          options={[{ value: 'text 1' }, { value: 'text 2' }]}
                        />
                        <DownOutlined className='icon1 icon2' />
                      </Input.Group>
                    </li>
                    <li>
                      <DatePicker onChange={this.selectDate} placeholder="Set event date" />
                    </li>
                    <li>
                      <TimePicker
                        placeholder="Event start time"
                        value={this.state.value} onChange={this.onChange} />
                    </li>
                    <li>
                      <TimePicker 
                        placeholder="Event end time"
                        value={this.state.value} onChange={this.onChange} />
                    </li>
                    <li>
                      <Input 
                        placeholder="Describe the event"
                        className='iconInput'
                      />
                      <CommentOutlined className='icon1' />
                    </li>
                    <li>
                      <Input 
                        placeholder="Whoid the event with"
                        className='iconInput'
                      />
                      <TeamOutlined className='icon1' />
                    </li>
                    <li>
                      <span className='createEvent' onClick={this.onClick}>CREATE EVENT</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nevent;