import React from 'react';
import '../assets/css/seeEvent.css';
import {Link} from 'dva/router';
import { TeamOutlined, ClockCircleFilled, PlusOutlined, BulbOutlined, FlagOutlined, ArrowLeftOutlined } from '@ant-design/icons';

class seeEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='seeEventMain'>
                <header>
                    <div className='title'><Link to='/'><ArrowLeftOutlined /></Link>Aug 2020</div>
                    <ul className='dateList'>
                        <li><span className='dateItem'>1</span></li>
                        <li><span className='dateItem'>2</span></li>
                        <li><span className='dateItem'>3</span></li>
                        <li><span className='dateItem'>4</span></li>
                        <li><span className='dateItem active'>5</span></li>
                        <li><span className='dateItem'>6</span></li>
                        <li><span className='dateItem'>7</span></li>
                        <li><span className='dateItem'>8</span></li>
                        <li><span className='dateItem'>9</span></li>
                        <li><span className='dateItem'>10</span></li>
                    </ul>
                </header>
                <div className='midContent'>
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
                    <span className='footLeft' onClick={() => {this.props.history.push({pathname: '/selectDateSeeEvent'})}}><FlagOutlined /></span>
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

export default seeEvent;