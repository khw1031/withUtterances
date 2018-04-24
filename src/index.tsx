import * as React from 'react'

export default function withUtterance<P extends { location: { pathname: string } }>(
  WrappedComponent: React.ComponentClass<P>,
  repo: string,
  issueTerm: string = location.pathname
): any {
  return class extends React.Component<P> {
    wrappedComponent: React.RefObject<HTMLDivElement> = React.createRef()

    componentDidMount() {
      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.async = true
      script.setAttribute('repo', repo)
      script.setAttribute('issue-term', issueTerm)
      this.wrappedComponent.current.appendChild(script)
    }

    render() {
      return (
        <div ref={this.wrappedComponent}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}
