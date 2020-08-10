# FlickrApp

View public Flickr Feeds faster with optimized web app based on [React](https://reactjs.org/).

<div align="center">
    <img src="/other/screenshot.png" width="400px"</img> 
</div>

Visit web app here: [https://tonywei92.github.io/flickrapp/](https://tonywei92.github.io/flickrapp/)

## Key Features ❤

- Responsive, enjoy app at any screen size 📱
- Refresh and get latest new feeds without refreshing your browser ⚡
- Navigate using pagination or swipe at ease 👉

## Development and testing

Backend server: [https://github.com/tonywei92/flickrapp-server](https://github.com/tonywei92/flickrapp-server)

Running in development environtment

```bash
$ yarn start
```

### Custom Hooks

FlickrApp uses self-made `useFlickr` that exposes states and functions:

| Name         | Type         | Description                                                                                                |
| ------------ | ------------ | ---------------------------------------------------------------------------------------------------------- |
| feeds        | Array        | An array of FlickrFeeds                                                                                    |
| tags         | String       | Store tags string                                                                                          |
| setTags      | Function     | Set tags                                                                                                   |
| feedsLoading | Boolean      | Indicate feeds is still fetching                                                                           |
| refreshFeeds | Function     | Fetch Flickr feeds with tags argument, if failed, it will not throw an error directly, use "error" instead |
| error        | Error object | Indicate error is occured, default is null                                                                 |
| clearError   | Function     | Clear error, this will be automatically invoked on refreshFeeds calls                                      |

### Building

```bash
$ yarn build
```

### Testing

There are two type of tests implemented, snapshot and integration test.

To run snapshot test:

```bash
$ yarn test
```

You can read more about the Jest snapshot testing [here](https://jestjs.io/docs/en/tutorial-react)

To run integration test:

```bash
$ yarn test:cypress
```

or with GUI:

```bash
$ npx cypress open
```

You can read more about Cypress integration test [here](https://www.cypress.io/how-it-works)

## Built with

- [React](https://reactjs.org/) - UI Framework
- [Material-UI](https://material-ui.com/) - for providing high quality and beautiful React Components

## Acknowledgement

Thanks to [Cypress](https://www.cypress.io) for providing powerful integration testing tool without much hassle 💪
