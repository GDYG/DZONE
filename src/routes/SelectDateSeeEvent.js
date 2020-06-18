import React from 'react';
import '../assets/css/seeEvent.css';
import '../assets/css/selectDate.css';
import { TeamOutlined, ClockCircleFilled, PlusOutlined, ArrowLeftOutlined, BulbOutlined, FlagOutlined } from '@ant-design/icons';
import { Calendar } from 'antd';
import {Link} from 'dva/router';

class SelectDateSeeEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    onPanelChange=(value, mode)=>{
        console.log(value, mode);
    }
    render() {
        return (
            <div className='seeEventMain'>
                <header>
                    <div className='title'><Link to='/'><ArrowLeftOutlined /></Link>Aug 2020</div>
                </header>
                <div className="site-calendar-demo-card">
                        <Calendar
                         fullscreen={false} 
                         onPanelChange={this.onPanelChange}
                         mode='month'
                        />
                </div>
                <div className='midContent' style={{height: 'calc(100% - 8.56rem)'}}>
                        <div className='firstRow'><span>Accepted events</span></div>
                        <ul className='eItemUl'>
                            <li className='yellow'>
                                <span className='arc'></span>
                                <span className='rightCard'>
                                    <p>Virtual Doctors</p>
                                    <p>Regular virutal catchup with the Doctors</p>
                                    <span className='rightFoot'>
                                        <span className='times'>
                                            <ClockCircleFilled />
                                            <span className='timeArounds'>12:00-1:00</span>
                                        </span>
                                        <span className='times time1'>
                                            <TeamOutlined />
                                            <span className='orders'>Dr.Juliean doctor</span>
                                        </span>
                                    </span>
                                </span>
                            </li>
                            <li className='yellow'>
                                <span className='arc'></span>
                                <span className='rightCard'>
                                    <p>Virtual Doctors</p>
                                    <p>Regular virutal catchup with the Doctors</p>
                                    <span className='rightFoot'>
                                        <span className='times'>
                                            <ClockCircleFilled />
                                            <span className='timeArounds'>12:00-1:00</span>
                                        </span>
                                        <span className='times time1'>
                                            <TeamOutlined />
                                            <span className='orders'>Dr.Juliean doctor</span>
                                        </span>
                                    </span>
                                </span>
                            </li>
                            <li className='yellow'>
                                <span className='arc'></span>
                                <span className='rightCard'>
                                    <p>Virtual Doctors</p>
                                    <p>Regular virutal catchup with the Doctors</p>
                                    <span className='rightFoot'>
                                        <span className='times'>
                                            <ClockCircleFilled />
                                            <span className='timeArounds'>12:00-1:00</span>
                                        </span>
                                        <span className='times time1'>
                                            <TeamOutlined />
                                            <span className='orders'>Dr.Juliean doctor</span>
                                        </span>
                                    </span>
                                </span>
                            </li>
                        </ul>
                </div>
                <footer>
                    <span className='footLeft'><FlagOutlined /></span>
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

export default SelectDateSeeEvent;