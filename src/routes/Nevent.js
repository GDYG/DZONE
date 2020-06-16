import React from 'react';
import '../assets/css/event.css';
import { CommentOutlined, TeamOutlined, FieldTimeOutlined, ArrowLeftOutlined, DownOutlined, CalendarOutlined } from '@ant-design/icons';
import {Link} from 'dva/router';
import { TimePicker } from 'antd';
class Nevent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='eventMain'>
            <TimePicker
              onChange={onChange}
              defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
            />
                <header><span><Link to='/'><ArrowLeftOutlined /></Link></span><span>New event</span></header>
                <ul className='contents'>
                    <li><input placeholder="Enter event name here" /></li>
                    <li>
                    <input 
                      placeholder="Enter event name here"
                      className='iconInput'
                      />
                      <DownOutlined className='icon1' />
                    </li>
                    <li>
                    <input 
                      placeholder="Enter event name here"
                      />
                      <CalendarOutlined className='icon1' />
                    </li>
                    <li>
                    <input 
                      placeholder="Enter event name here"
                      />
                      <FieldTimeOutlined className='icon1' />
                    </li>
                    <li>
                    <input 
                      placeholder="Enter event name here"
                      />
                      <FieldTimeOutlined className='icon1' />
                    </li>
                    <li>
                    <input 
                      placeholder="Enter event name here"
                      />
                      <CommentOutlined className='icon1' />
                    </li>
                    <li>
                    <input 
                      placeholder="Enter event name here"
                      />
                      <TeamOutlined className='icon1' />
                    </li>
                    <li>
                      <span className='createEvent'>CREATE EVENT</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nevent;