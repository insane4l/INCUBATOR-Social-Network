import React from 'react';
import { connect } from 'react-redux';
import { getUserAuthData } from '../../redux/authReducer';
import { AppStateType } from '../../redux/store';
import Header from './Header';


class HeaderC extends React.Component<HeaderCPropsType> {

    componentDidMount() {
        this.props.getUserAuthData();
    }

    render() {
        return <Header isUserAuthorized={this.props.isUserAuthorized} userName={this.props.login} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isUserAuthorized: state.auth.isUserAuthorized,
    login: state.auth.login
});

export default connect(mapStateToProps, {getUserAuthData})(HeaderC);



type mapStatePropsType = {
    isUserAuthorized: boolean
    login: string | null
}

type mapDispatchPropsType = {
    getUserAuthData: () => void
}

type HeaderCPropsType = mapStatePropsType & mapDispatchPropsType