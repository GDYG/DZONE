import { message } from 'antd';
import { routerRedux } from 'dva/router';

export default {
    namespace: 'events',
    state: {
        ename: '',
        etype: '',
        startDate: '',
        startTime: '',
        endTime: '',
        desc: '',
        order: '',
        data: []
    },
    reducers: {
        setData(state, {payload}) {
            const objState = {}; //所有属性
            objState.ename = state && state.ename ? state.ename : '';
            objState.etype = state && state.etype ? state.etype : '';
            objState.startDate = state && state.startDate ? state.startDate : '';
            objState.startTime = state && state.startTime ? state.startTime : '';
            objState.endTime = state && state.endTime ? state.endTime : '';
            objState.desc = state && state.desc ? state.desc : '';
            objState.order = state && state.order ? state.order : '';
            if(objState.ename === '') {
                message.error('事件名称不能为空！')
                return Object.assign({}, state);
            }
            if(objState.etype === '') {
                message.error('事件类型不能为空！')
                return Object.assign({}, state);
            }
            if(objState.startDate === '') {
                message.error('创建日期不能为空！')
                return Object.assign({}, state);
            }
            if(objState.startTime === '') {
                message.error('事件开始时间不能为空！')
                return Object.assign({}, state);
            }
            if(objState.endTime === '') {
                message.error('事件结束时间不能为空！')
                return Object.assign({}, state);
            }
            if(objState.desc === '') {
                message.error('事件描述不能为空！')
                return Object.assign({}, state);
            }
            if(objState.order === '') {
                message.error('事件创建人不能为空！')
                return Object.assign({}, state);
            }
            state.data && state.data.length === 0 ? objState.id = 0 : objState.id = state.data[state.data.length -1].id + 1;
            state.data.push(objState)
            payload.dispatch(routerRedux.push({
                pathname: '/seeEvent'
            }))
            state.ename = '';
            state.etype = '';
            state.startDate = '';
            state.startTime = '';
            state.endTime = '';
            state.desc = '';
            state.order = '';
            return Object.assign({}, state)
        },
        setProps(state, {payload}) {
            switch(payload.type) {
                case 'setEname':
                    return Object.assign({}, state, {ename: payload.value});
                case 'setEtype':
                    return Object.assign({}, state, {etype: payload.value});
                case 'setEdate':
                    return Object.assign({}, state, {startDate: payload.value});
                case 'setEstartTime':
                    return Object.assign({}, state, {startTime: payload.value});
                case 'setEendTime':
                    return Object.assign({}, state, {endTime: payload.value});
                case 'setEdesc':
                    return Object.assign({}, state, {desc: payload.value});
                case 'setEorder':
                    return Object.assign({}, state, {order: payload.value});
                default:
                    return state;
            }
        }
    },
    effects: {},
    subscriptions: {},
}