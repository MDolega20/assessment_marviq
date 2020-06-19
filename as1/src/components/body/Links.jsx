
const linksChoice = {
  dev: {
    message: "/api/v1/message"
  },
  production: {
    message: "/api/v1/message"
  }
};
let links;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  links = linksChoice.dev;
} else {
  links = linksChoice.production;
}

export default links;