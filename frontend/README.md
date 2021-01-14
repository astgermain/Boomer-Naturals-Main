# Development Notes/Documentation

For Gatsby general information see bottom

# Going Live ToDo
  - Update Shopify Checkout Page Links and Password Recover links in notification templates
  - Prices for custom product builder, and custom product builder products needs too be redone

# Table of Contents

## Todo

- Github Procedure/Code Review/Pull Requests/Merge Conflicts/Branching/etc
- Communication
- Testing/QA
- Requirement Analysis/Priority
- Design
- Implementation (Functional Requirements vs Non Functional and Features)
- Best Practices and Conventions
- Continuous Integration/Development / DevOps
- Software Requirements
- Communication Standards
- Project Overview Standards
- Deadlines and Milestones
- BN Specifics and Commonly Used Software Documentation/Explinations/Why We Need It
- Scaleability/Templating/SAAS
- Cost Analysis of All Software/Dependencies
- More Legal (Copyrighting/Trademarking/Patenting/Licensing)

## Milestones

- M1: Data architecture structuring and GraphQL query(ies)
- M2: Pages
- M3: Shopping Cart/Account
- M4: Blog

## M1 - Data Architecture Structuring

- We need to go over what data is neccessary for function of the site and create a query that doesn't include any unnecessary data
  **Deliverables**
- TBD

## M2 - Pages

- Create functionality for creating pages and editing individual pages
**Deliverables**
1. Home Page

## M3 - Shopping Cart/Account

- Create user account and shopping additions/checkout functionality
**Deliverables**
- TBD

## M4 - Blog

- TBD

## Inventory Check/Sold Out Theory/Implementation
- See info here: https://shopify.dev/tutorials/create-a-checkout-with-storefront-api
- On build, we want to pull as much information as possible preferably building as often as every 10-30 mins max.
- During this time, graphql will pull all data including inventoryTotal and totalAvailable
- On component load for a product, will check if available for sale/displayed and when added doesn't exceed totalAvailable if any left
- A second check needs to be made on check and decide to use graphql mutations or rest to perform checkout.

## Gatsby Basics

- Static site generator that still supports dynamic and interactive content.
- Uses Node, GraphQL, and React.
- Primary benefits are speed, security, and developer experience
- A wide range of community development and plugins.

## Reviews

- Export CSV from Yotpo and create our own reviews component and database

- This code let yotpo reviews appear, but was very sus
```<script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/aUpUeJHAkrqAgePPIRfUHhDJcbK9nhwSUGHVgrVq/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script><script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/aUpUeJHAkrqAgePPIRfUHhDJcbK9nhwSUGHVgrVq/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script><div id="yotpo-testimonials-custom-tab"></div><div class="yotpo bottomLine" data-yotpo-product-id="ADLT-MSHLD-BLK-M"></div>```

## Subscriptions

- https://docs.boldapps.net/subscriptions/storefront/index.html cdn

## Hot Reloading

- I like it and we have it

## Security and Liability

- Security and liability are a big issue and as such all code should hopefully go through code review and any open source, applications, external javascript, or anything of such nature should not be added to this project without careful consideration by the team as a whole

  ### Security with Gatsby

  - Because of the static nature of Gatsby, any breaches of our server would only allow access to HTML files and such so any leaks of security will come from other places(Shopify, API key leaks, passwords, etc.)

  ### Security/Privacy

  Security is a major issue. In 2019, nearly 4.1 billion records were exposed due to data breaches. While about 60% of security breaches come in the form of phishing or social engineering attacks it is imperative we avoid any potential flaws in code.

  **For us at Boomer Naturals there are several extremely important security factors to consider**

  1. Exposing API Keys, Passwords, and other sensitive data via poor handling of data. Besides a leak of login credentials, a leak of our API Key/Password to Shopify would be essentially giving away unrestricted access to everything to an attacker.

  - Key considerations include proper handling of any keys and access tokens including but not limited too expirations, transfer over unsecure networks, storing information unencrypted, w/ weak encryption, or in places that could possibly be exposed do to 3rd party vulnerabilities.
  - Learn More here: https://support.google.com/googleapi/answer/6310037?hl=en

  2. Vulnerabilites in 3rd party software, libraries, frameworks, etc(dependencies)

  - Many vulnerabilites are found everyday in dependencies like the types listed about and by us using them we take on the responsibility of updating/upgrading/removing any software that has been found to have a vulnerability esp those marked as critical.
  - Any and all dependencies etc should be carefully documented and and regularly check for security issues.\*_Github does a decent job of this but not all the work_

  3. Injection type attacks. Most common injection attacks include SQL injection, Cross Site Scripting(XSS), and LDAP injection. The most common cause is unsanitized user input.

  - The steps you can take to reduce this risk are:
    1. Use prepared statements, parameterized queries and stored procedures
    2. Use appropriate privileges and reduce attack surface by not supplying unecessary functionality
    3. Trust no user data

  4. Cross Site Request Forgeries(CSRF or XSRF) - prevent hackers from disguising themselves as other users by using csrf tokens to validate a user
  5. Buffer overflow: prevented with bounds checking
  6. Misc: lack of encapsulation, improper error handling, race conditions, malicious dependencies, unsecure encryption(caesar cipher vs SHA256)

  ### Liability

  - Some things you can do to reduce our liability:
    - Check any licenses on 3rd party code
    - Create code that generates logs of anything and everything done
    - Any action that can or might be considered a B2C contract or agreement should be processed through legal before being added

## Shopfiy GraphQL API and Gatsby

- Gatsby uses GraphQL to let us pull any and all data we need for components and pages at build time reducing the number of network requests needed and creating a static snapshot of all data we need.
- **Benefits**
  - Greatly reduces the number of networks requests
  - Most complexities done at build time
  - Only data that is need is sent to components
  - Data can be transformed at build time rather than on live site
    - Ex. Shopify returns order datas in the format mm/dd/yyyy but we can transform that to dd/mm/yy if need be
  - Data transformations include image processessing for optimal performance
  - Learn more about data transformations here: https://www.gatsbyjs.com/docs/graphql-concepts/#powerful-data-transformations
- **Things To Consider While Writing Queries**
  - Fragments can be defined and exported to keep code readable and clean or during refactoring
  - The power of data transformations rather than direct edits/processing of data in React
  - Data bloat can still be an issue if you over allocate data
    - Ex. Requesting access to Orders and Customers for a component that only requires Orders
- **Advanced Considerations**

  - Interfaces and Unions used in conjunction with fragments to perform switch statement like type queries that can be used to generate more comprehensive results such as a search. Example Below

    - Union

    ```javascript
    union SearchResult = User | Movie | Book

    type Query {
      search(text: String!): [SearchResult]!
    }
    ```

    - Interface

    ```javascript
    interface Searchable {
      searchPreviewText: String!
    }

    type User implements Searchable {
      searchPreviewText: String!
      username: String!
    }

    type Movie implements Searchable {
      searchPreviewText: String!
      directory: String!
    }

    type Book implements Searchable {
      searchPreviewText: String!
      author: String!
    }

    type Query {
      search(text: String!): [Searchable]!
    }
    ```

    - Query

    ```javascript
    query {
      search(text: "cat") {
        searchPreviewText
      }
    }
    ```

    - Read more about this here: https://medium.com/the-graphqlhub/graphql-tour-interfaces-and-unions-7dd5be35de0d

  - GraphQL Specifications here: https://spec.graphql.org/October2016/
  - Gatsby's processing of queries using Relay here: https://relay.dev/docs/en/compiler-architecture.html

- **Connecting to Shopify GraphQL API**
  - We will be using the gatsby-source-graphql dependencies which is a gatsby package for connecting GraphQL API's to Gatsby's GraphQL
  - Everything you need to know should be here: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-graphql

## Gatsby Image Handling

- Read here: https://www.gatsbyjs.com/docs/gatsby-image/

## Using Data From Shopify To Populate blogs/pages/templates

- Using the data sourced from the Shopify GraphQL API, we can query data into specific components in Gatsby
- The easiest way to do this is to use the GraphiQL page which you can choose all the data you want to display for a certain page/blog/template and then use the Code Exporter to generate the basic component with the query hook and have a page/blog/template with only that information available. This make's pages lightweight and easy to create.
- More information on that here: https://www.gatsbyjs.com/docs/recipes/querying-data/

## Editing Page Specific Head Elements

- Project makes use of React-Helmet which can be used to insert page, blog, and/or template specific head elements such as but not limited to <link> <script> <meta> etc. 
- More information here: https://github.com/nfl/react-helmet

## Creating Page Slugs

- Page and or blog slugs are based off of file name. As for templates there should be an option when pulling data to set the slug to product title or such(tbd).

## Templating and Dynamic Page Creation

- Using layouts and templates
- More information here: https://www.gatsbyjs.com/blog/2019-05-02-how-to-build-a-blog-with-wordpress-and-gatsby-part-3/#creating-a-page-template

## Cost/Budget Analysis of Software/Dependencies

### Hosting options

- Since sites are static we can host really cheap since we don't need a server to run them. CDN's are a great option since they can serve static content really fast..

- AWS Amplify/Amplify Console

Hosting and CI/CD for static sites

- Netlify

Hosting and Serverless Backend, CI/CD, application delivery network infrastructure(Faster distribution, improved server latency and reduced chance of overload), Enterprise Level Software

- Starting at \$3,000/month. Tailored to team and performance requirements.
- 99.99% uptime SLA
- 24×7×365 premium support
- Enterprise-grade global edge network
- High-performance builds with SLAs
- Custom contracts & invoicing
- Security & compliance review
- Pentesting and load testing

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's blog starter
</h1>

Kick off your project with this blog boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog starter.

    ```shell
    # create a new Gatsby site using the blog starter
    gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-blog-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-blog)

<!-- AUTO-GENERATED-CONTENT:END -->
