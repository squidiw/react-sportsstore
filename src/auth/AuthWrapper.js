import React, { Component } from 'react';
import { AuthContext } from './AuthContext';

export const authWrapper = ( WrapperComponent ) => 
    class extends Component {
        render = () => 
        <AuthContext.Consumer>
            { context => 
                <WrapperComponent { ...this.props} {...context} />
            }
        </AuthContext.Consumer>
    }