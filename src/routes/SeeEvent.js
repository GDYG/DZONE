import React from 'react';
import '../assets/css/seeEvent.css';
import {Link} from 'dva/router';
import { TeamOutlined, ClockCircleFilled, PlusOutlined, BulbOutlined, FlagOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import moment from 'moment';
import { Empty } from 'antd';
import $ from 'jquery';

const allMonthDay = moment().daysInMonth()
const dayArr = []
for(let i = 1; i <= allMonthDay; i++){
   dayArr.push(i)
}

class seeEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectDate: nowDateString()
         };
    }
    addClassName=(el)=> {
        $(el.currentTarget).toggleClass('active').siblings().removeClass('active');
        let setDay = $(el.currentTarget).data('id')
        //设置当前日期显示的事件，默认显示当前日期的事件，选择日期后查看该日期创建的事件（要代办的事件）
        this.setState({
            selectDate: moment().date(setDay).format("YYYY-MM-DD")
        })
    }
    componentDidMount() {
    }
    render() {
        const { data } = this.props.events
        return (
            <div className='seeEventMain'>
                <header>
                    <div className='title'><Link to='/'><ArrowLeftOutlined /></Link>{moment().format('MMM YYYY')}</div>
                    <ul className='dateList'>
                        {
                            dayArr.map((day)=> {
                               return <li data-id={day} className={moment().date() === day ? 'dateItem active' : 'dateItem'} key={day} onClick={this.addClassName}><span className='dateItem'>{day}</span></li>
                            })
                        }
                    </ul>
                </header>
                <div className='midContent'>
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
                    <span className='footLeft' onClick={() => {this.props.history.push({pathname: '/selectDateSeeEvent'})}}><FlagOutlined /></span>
                    <span className='footMid'>
                        <span className='box'>
                            <span className='addEvents' onClick={()=>{this.props.history.push({pathname: '/event'})}}><PlusOutlined /></span>
                        </span>
                    </span>
                    <span className='footRight active' onClick={()=> {this.props.history.push({pathname: '/seeEvent'})}}><BulbOutlined /></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(seeEvent);