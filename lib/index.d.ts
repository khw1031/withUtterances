/// <reference types="react" />
import * as React from 'react';
export default function withUtterance<P extends {
    location: {
        pathname: string;
    };
}>(WrappedComponent: React.ComponentClass<P>, repo: string, issueTerm?: string): any;
