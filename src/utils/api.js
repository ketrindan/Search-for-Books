const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
const key = process.env.REACT_APP_API_KEY;

class Book {
  constructor (baseUrl) {
    this._baseUrl = baseUrl;
  }

  _serverResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Ошибка: ${res.status}`))
  }

  getBooks(request, minInd, sorting) {
    return fetch(this._baseUrl + '?' + new URLSearchParams({
      q: request,
      startIndex: minInd,
      maxResults: 30,
      orderBy: sorting,
      key: key
  }))
    .then(res => this._serverResponse(res));
  }

  getBook(id) {
    return fetch(`${this._baseUrl}/${id}`,)
    .then(res => this._serverResponse(res));
  }
}

const book = new Book(baseUrl);

export default book;