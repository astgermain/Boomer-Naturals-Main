// API Key/Password/etc found here
// https://boomerfacemasks.myshopify.com/admin/apps/private/207538520182

// Shopify request documentation: https://shopify.dev/tutorials/make-your-first-graphql-request

// Possibly not needed keeping in case we need to use for post requests

const token = `placeholder`
const url = `placeholder`
const variables = {
  cursor: `placeholder`,
  range: `placeholder`
}
axios({
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': token
  },
  method: 'post',
  data: {
    query: `
      query($range: String!, $cursor: String) {
        tenderTransactions(first: 50, after: $cursor, query: $range) {
          edges {
            node {
              id
            }
            cursor
          }
        }
      }
    `,
    variables: variables
  },
  url: url
}).then(result => {
  console.log(result.data)
}).catch(error => {
  console.log(error)
})