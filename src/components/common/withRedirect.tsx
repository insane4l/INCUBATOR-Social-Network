import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../../redux/store'

const mstp = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isUserAuthorized
})

export const withRedirect = (WrappedComponent: React.ComponentType) => {

    const RedirectWrapper: React.FC<RedirectWrapperPropsType> = (props) => {

        return props.isAuth
            ? <WrappedComponent />
            : <Navigate to='/login' replace />
    }

    return connect(mstp)(RedirectWrapper)
}



type MapStatePropsType = {
    isAuth: boolean
}
type RedirectWrapperPropsType = MapStatePropsType