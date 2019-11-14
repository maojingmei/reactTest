import React, {Component} from 'react'
import {connect} from 'dva'
import {Table} from 'antd'

const MODELS = 'users'
class Users extends Component{
  
  componentDidMount() {
    this.props.dispatch({
      type:`${MODELS}/fetchUserList`
    })
  }
  render(){
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: '网站',
        dataIndex: 'website',
        key: 'website'
      },
    ]
    
    const tableProps = {
      dataSource: this.props.users.userList,
      columns,
      rowKey: record => record.id
    }
    return(
      <Table {...tableProps}/>
    )
  }
}

export default connect(({users}) => ({users}))(Users) 