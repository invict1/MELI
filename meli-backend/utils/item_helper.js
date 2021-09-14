const axios = require('axios');

const API_URL = process.env.API_URL;
const API_REGION = process.env.API_REGION;

const limit = 4;

exports.getItems = (query, res) => {
  axios.get(
    `${API_URL}${API_REGION}search?q=${query}&limit=${limit}`)
    
  .then((response) => {
    res.json(buildResponse(response.data));
  })
  .catch((err) => {
    res.send(err);
  });
};

exports.getItem = (id, res) => {
  const detail = {};
  axios.all([
    axios.get(`${API_URL}items/${id}`),
    axios.get(`${API_URL}items/${id}/description`)
  ])
  .then(axios.spread((item, description) => {
    detail.author = getAuthor();
    
    setDetailCategories(item, detail, res);
    
    detail.item = buildDetail(item.data, description.data);
  }));
};

function setDetailCategories(item, detail, res) {
  axios.get(`${API_URL}categories/${item.data.category_id}`)
  .then((response) => {
    detail.categories = response.data.path_from_root.map(
      (category) => {
        return category.name;
      }
    );
    res.json(detail);
  })
  .catch((err) => {
    res.send(err);
  });
}

function buildResponse(response) {
  const itemsFormat = {};
  itemsFormat.author = getAuthor();
  itemsFormat.categories = getCategories(response.filters);
  itemsFormat.items = getItems(response.results);

  return itemsFormat;
}

const getAuthor = () => ({
  name: 'Pablo', 
  lastname: 'Pereira' 
});

const getCategories = ([firstFilter]) => {
  let categories = [];
  if (!!firstFilter.id && firstFilter.id == 'category') {
    categories = firstFilter.values[0].path_from_root.map((category) => {
      return category.name;
    });
  }
  return categories;
}

const getItems = (items) => {
  return items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      address: item.address.state_name
    };
  });
}

const buildDetail = (item, description) => {
  const detail = {};

  detail.id = item.id;
  detail.title = item.title;
  detail.price = {
    amount: item.price,
    currency: item.currency_id
  };
  detail.picture = item.pictures.length ? item.pictures[0].secure_url : undefined;
  detail.condition = item.condition === 'new' ? 'Nuevo' : 'Usado';
  detail.free_shipping = item.shipping.free_shipping;
  detail.sold_quantity = item.sold_quantity;
  detail.description = description.plain_text;
  detail.permalink = item.permalink;

  return detail;
}
