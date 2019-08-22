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

// Or

const PostPage = () => {
    //...
}

export default withUtterances(PostPage, 'YOUR_REPO')

// Or to specify a theme

export default withUtterances(PostPage, 'YOUR_REPO', 'github-dark')

// Or to specfiy an issue term

export default withUtterances(PostPage, 'YOUR_REPO', 'github-light', 'og:title')


// Or to specfiy label for newly created issues
export default withUtterances(PostPage, 'YOUR_REPO', 'github-light', 'og:title', 'comments')
```

It uses your pathname as `issue-term`.

#### Supported Themes

By default [Utterances](https://github.com/utterance/utterances) comes with 6 choices for themes:
- `github-light` - The normal Github style
- `github-dark` - A dark mode in the style of Github
- `github-dark-orange` - A custom dark orange mode in the style of Github
- `icy-dark` - A custom blue glow theme
- `dark-blue` - A custom blue and black theme
- `photon-dark` - A custom dark grey and blue theme

More themes can be added [with additional stylesheets](https://github.com/utterance/utterances/blob/master/CONTRIBUTING.md#theme-development).

### Supported Issue Terms

- `pathname` - Issue title which contains the path of the current page.
- `url` - Issue title which contains the URL of the current page.
- `title` - Issue title which contains the tab title of the current page.
- `og:title` - Issue title which contains the Open Graph title meta.
- `<serach term>` - Issue title which contains the given String.

### PS. preload and prefetch Applied

It will make your Utterances Widget to load slightly faster. <3


### PS. DEMO SITE

[Demo Using withUtterance](https://khw1031.github.io/posts/withUtterances)
