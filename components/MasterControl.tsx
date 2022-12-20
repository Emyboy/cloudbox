import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/reducers/auth.reducer'

type Props = {}

export default function MasterControl({}: Props) {
   
    const dispatch = useDispatch()

    useEffect(() => {
        const _user = localStorage.getItem('user')
        if(_user){
            // console.log('THE USER --',_user)
            dispatch(setUserData(JSON.parse(_user)))
        }
    },[])
    
  return (
    <></>
  )
}