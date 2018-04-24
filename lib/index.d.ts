/// <reference types="react" />
import * as React from 'react';
export default function withUtterances<P extends {
    location: {
        pathname: string;
    };
}>(WrappedComponent: React.ComponentClass<P>, repo: string, issueTerm?: string): any;
