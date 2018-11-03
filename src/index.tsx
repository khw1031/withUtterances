import * as React from 'react'

export default function withUtterances<P extends { location: { pathname: string } }>(
  WrappedComponent: React.ComponentClass<P>,
  repo: string,
  theme: string = 'github-light'
) {
  return class extends React.Component<P> {
    withUtterancesContainer: React.RefObject<HTMLDivElement> = React.createRef()

    componentDidMount() {
      this.initUtterances()
    }

    injectScript = () => {
      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.async = true
      script.setAttribute('repo', repo)
      script.setAttribute('theme', theme)
      script.setAttribute('issue-term', this.props.location.pathname || document.location.pathname)
      this.withUtterancesContainer.current.appendChild(script)
    }

    injectPrefetch = () => {
      document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="prefetch" href="https://utteranc.es/client.js" />'
      )
    }

    injectPreload = () => {
      document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="preload" href="https://utteranc.es/client.js" as="script" />'
      )
    }

    initUtterances = () => {
      this.injectPrefetch()
      this.injectPreload()
      this.injectScript()
    }

    render() {
      return (
        <div ref={this.withUtterancesContainer}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}
