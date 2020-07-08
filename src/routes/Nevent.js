import React from 'react';
import '../assets/css/event.css';
import { CommentOutlined, TeamOutlined, ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import {Link} from 'dva/router';
import { DatePicker, TimePicker, Input, AutoComplete, message } from 'antd';
const { connect } = require('dva')

message.config({
  duration: 2,
  maxCount: 3,
  rtl: false,
});

class Nevent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    //选择事件开始时间
    onStartTime=(date)=> {
      this.props.dispatch({
        type: 'events/setProps',
        payload: {
          type: 'setEstartTime',
          value: date
        }
      })
    }
    //选择事件结束时间
    onEndTime=(date)=> {
      this.props.dispatch({
        type: 'events/setProps',
        payload: {
          type: 'setEendTime',
          value: date
        }
      })
    }

    //选择创建日期
    selectDate=(date, dateString)=>{
      this.props.dispatch({
        type: 'events/setProps',
        payload: {
          type: 'setEdate',
          value: date
        }
      })
    }
    onClick=()=> {
     let dispatch = this.props.dispatch
     this.props.dispatch({
        type: 'events/setData',
        payload: {
          dispatch
        }
     })
    }
    //选择事件类型
    handleChange=(value)=> {
      this.props.dispatch({
        type: 'events/setProps',
        payload: {
          type: 'setEtype',
          value: value
        }
      })
    }

    //事件描述
    onDesc=(el)=> {
      this.props.dispatch({
        type: 'events/setProps',
        payload: {
          type: 'setEdesc',
          value: el.target.value
        }
      })
    }
    //事件创建人
    onOrder=(el)=> {
     el.target.value.length >= 12 ? message.info('最大长度不超过12个字符！') : this.props.dispatch({
      type: 'events/setProps',
      payload: {
        type: 'setEorder',
        value: el.target.value
      }
     })
    }
    //写入事件名称
    onNameChange=(el)=> {
      this.props.dispatch({
        type: 'events/setProps',
        payload: {
          type: 'setEname',
          value: el.target.value
        }
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
                        value={this.props.events.ename}
                        onChange={this.onNameChange}
                      />
                    </li>
                    <li>
                      <Input.Group compact>
                        <AutoComplete
                          placeholder="Select Event Type"
                          options={eventList}
                          onChange={this.handleChange}
                          value={this.props.events.etype}
                        />
                        <DownOutlined className='icon1 icon2' />
                      </Input.Group>
                    </li>
                    <li>
                      <DatePicker 
                      onChange={this.selectDate} 
                      placeholder="Set event date"
                      value={this.props.events.startDate}
                      />
                    </li>
                    <li>
                      <TimePicker
                        placeholder="Event start time"
                        value={this.props.events.startTime} 
                        onChange={this.onStartTime} />
                    </li>
                    <li>
                      <TimePicker 
                        placeholder="Event end time"
                        value={this.props.events.endTime}
                        onChange={this.onEndTime} />
                    </li>
                    <li>
                      <Input 
                        placeholder="Describe the event"
                        className='iconInput'
                        value={this.props.events.desc}
                        onChange={this.onDesc}
                      />
                      <CommentOutlined className='icon1' />
                    </li>
                    <li>
                      <Input 
                        placeholder="Whoid the event with"
                        className='iconInput'
                        maxLength='12'
                        value={this.props.events.order}
                        onChange={this.onOrder}
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

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}
const mapStateToProps = (state) => {
  return state;
}

const eventList = [
  { value: '重要+紧急' }, 
  { value: '重要+不紧急' },
  { value: '不重要+紧急' },
  { value: '不重要+不紧急' },
]

export default connect(mapStateToProps, mapDispatchToProps)(Nevent);