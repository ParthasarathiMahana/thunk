import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector, usersActions } from '../redux/reducer'
// import axios from 'axios'
import { userThunk } from '../redux/reducer'

const List = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userThunk())
    },[])

    const userData = useSelector(userSelector);
    // console.log(userData);


  return (
    <div>
      {userData.map((item,index)=>{
        return<div key={index}>
            <div>{item.name}</div>
        </div>
      })}
    </div>
  )
}

export default List
