import React from 'react';
import '../assets/css/seeEvent.css';
import '../assets/css/selectDate.css';
import { TeamOutlined, ClockCircleFilled, PlusOutlined, ArrowLeftOutlined, BulbOutlined, FlagOutlined } from '@ant-design/icons';
import { Calendar, Empty } from 'antd';
import {Link} from 'dva/router';
import moment from 'moment';
import { connect } from 'dva';

class SelectDateSeeEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectDate: nowDateString()
         };
    }
    onPanelChange=(value)=>{
        this.setState({
            selectDate: moment(value).format('YYYY-MM-DD')
        })
    }
    onSelectDate=(date)=> {
        this.setState({
            selectDate: moment(date).format("YYYY-MM-DD")
        })
    }
    render() {
        const { data } = this.props.events
        return (
            <div className='seeEventMain'>
                <header>
                    <div className='title'><Link to='/'><ArrowLeftOutlined /></Link>{moment().format('MMM YYYY')}</div>
                </header>
                <div className="site-calendar-demo-card">
                        <Calendar
                         fullscreen={false} 
                         onPanelChange={this.onPanelChange}
                         mode='month'
                         onSelect={this.onSelectDate}
                        />
                </div>
                <div className='midContent' style={{height: 'calc(100% - 8.56rem)'}}>
                        <div className='firstRow'><span>Accepted events</span></div>
                        <ul className='eItemUl'>
                        {
                               data && data.length ? data.map((item)=> {
                                    return dateString(item.startDate) === this.state.selectDate ? <li key={item.id} className={
                                                                                                           item.etype && item.etype === '重要+紧急' ? 'red' : item.etype === '重要+不紧急' ? 'yellow' : item.etype === '不重要+紧急' ? 'green' : item.etype === '不重要+不紧急' ? 'purple' : 'white'                           
                                                                                                  }>
                                                <span className='arc'></span>
                                                <span className='rightCard'>
                                                    <p>{item.ename}</p>
                                                    <p>{item.desc}</p>
                                                    <span className='rightFoot'>
                                                        <span className='times'>
                                                            <ClockCircleFilled />
                                                            <span className='timeArounds'>{moment(item.startTime).format('HH:mm')}-{moment(item.endTime).format('HH:mm')}</span>
                                                        </span>
                                                        <span className='times time1'>
                                                            <TeamOutlined />
                                                            <span className='orders'>{item.order}</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </li> : ''
                                }) : <Empty 
                                        description={
                                        <span>
                                            No Events
                                        </span>} 
                                     />
                            }
                        </ul>
                </div>
                <footer>
                    <span className='footLeft active'><FlagOutlined /></span>
                    <span className='footMid'>
                        <span className='box'>
                            <span className='addEvents' onClick={()=>{this.props.history.push({pathname: '/event'})}}><PlusOutlined /></span>
                        </span>
                    </span>
                    <span className='footRight' onClick={()=> {this.props.history.push({pathname: '/seeEvent'})}}><BulbOutlined /></span>
                </footer>
            </div>
        );
    }
}

//获取当前事件创建的日期
const dateString = (date) => {
    return moment(date).format('YYYY-MM-DD');
}
//获取当前日期
const nowDateString = () => { 
    return moment().format('YYYY-MM-DD');
}

const mapStateToProps = (state)=> {
    return state
}
const mapDispatchToProps = (dispatch)=> {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectDateSeeEvent);