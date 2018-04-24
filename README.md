# withUtterances

withUtterances is a React HOC for [Utterance](https://github.com/utterance/utterances).

## Installation

```sh
npm i with-utterances
yarn add with-utterances
```

## Usage

import `withUtterances` to the component that you want to show utterance comment widget.

```jsx
import withUtterances from 'with-utterances'


class PostPage extends React.Component {
  render() {
      return (
      <PostComponent />
    )
  }
}

export default withUtterances(PostPage, 'YOUR_REPO', {issue-term})
```

Pass your github repo and issue-term as props.  
If issue-term is not provided. `pathname` will be default a issue-term.
