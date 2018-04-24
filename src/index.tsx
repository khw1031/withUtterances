import * as React from 'react'

export default function withUtterances<P extends { location: { pathname: string } }>(
  WrappedComponent: React.ComponentClass<P>,
  repo: string,
  issueTerm?: string
): any {
  return class extends React.Component<P> {
    wrappedComponent: React.RefObject<HTMLDivElement> = React.createRef()

    componentDidMount() {
      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.async = true
      script.setAttribute('repo', repo)
      const issue = issueTerm || document.location.pathname
      script.setAttribute('issue-term', issue)
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
