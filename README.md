# sunny-go-round

This is a carousel component made in React for "Moderately Sized Japan". It is made specifically for this purpose, but the code is available for anyone to view and even submit pull requests, I guess. The slides on this component are hard-coded so it isn't very extensible, but the hard-coded slides allow us to completely customize their appearance while also not having to make costly API requests to load them from a database or something.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find the most recent version of the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

To build for production run the `./sunny-build.sh` script. Since we're using create-react-app, it bundles the entire source as a complete web app, which we don't really want in production. The shell script separates the sources into the final `dist/sunny-go-round.js` and `dist/sunny-go-round.css` files.
