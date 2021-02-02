# Urban Eatery 🍔

Urban Eatery is an app to search about restaurant in the city.
With this app you can search about food term like 'burritos' and city like 'Miami' and find many businesess in the city. 
You can see photos, reviews , the schedule and another info.


## 📝 Installation

To use this app you need have install Node in your computer and donwload the repo.
After must have go to [Yelp](https://www.yelp.com/developers/graphql/guides/intro)
register is FREE! and get a API_KEY.

With this API_KEY you can access to GraphQL Api from Yelp

```npm
git clone git@github.com:KrlosAren/guruHotel-yelp.git

cd guruHotel-yelp && npm install
```

## 😍 Usage

In folder of project you need do that

```
./src/apollo/index.js
```

```js

const API_KEY = 'your api key'

const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Accept-Language': 'en_US',
  },
});

```
To view project in your machine you must run
```
npm run start
```
and now see the project in 
```
http://localhost:3500
```
##  Production

To get your code to production run 
```
npm run build:dll && npm run build:dev && npm run server
```
and now go to 
```
http://localhost:3001
```
## :pill: Technologies
1. HTML
2. Sass
3. React
5. Redux
6. GraphQL
7. ApolloClient
8. Webpack

## License
[MIT](https://choosealicense.com/licenses/mit/)