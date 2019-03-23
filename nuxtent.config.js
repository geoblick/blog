module.exports = {
  content: {
    permalink: ':slug',
    page: '/_content',
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: false
  },
  api: {
    baseURL: 'https://jovial-goldberg-232f4e.netlify.com',
    browserBaseURL: 'https://jovial-goldberg-232f4e.netlify.com'
  }
}
