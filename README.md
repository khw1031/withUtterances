# React ❤️ [Utterances](https://github.com/utterance/utterances)

**WithUtterances** is a React Higher-Order-Component for Super LightWeight Comments Widget named [Utterances](https://github.com/utterance/utterances). 

### No need Duplicated DOM Bindings for each react component. 

#### Just Wrap It!

1. `import withUtterances from 'with-utterances'`
2. Wrap your react component
3. Pass your repo as a String
4. Done!

### Installation

```sh
npm i with-utterances
yarn add with-utterances
```

### Usage

import `withUtterances` to the file which has component that you want to show utterances comment widget.

```jsx
import withUtterances from 'with-utterances'


class PostPage extends React.Component {
    //...
}

// OR

const PostPage = () => {
    //...
}

export default withUtterances(PostPage, 'YOUR_REPO')
```

It uses your pathname as `issue-term`.

### PS. preload and prefetch Applied

It will make your Utterances Widget to load slightly faster. <3


### PS. DEMO SITE

[Demo Using withUtterance](https://khw1031.github.io)

