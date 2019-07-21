//引入redux
import { createStore, combineReducers } from 'redux'


//创建存储

import user from './user'
import company from './company'

let arr = combineReducers({
        user: user,
        company: company
    })
    // 创建存储对象
export default createStore(arr)