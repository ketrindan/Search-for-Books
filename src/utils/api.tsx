const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
const key = process.env.REACT_APP_API_KEY || '';

class Book {
  private _baseUrl: string;

  constructor (baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  _serverResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Ошибка: ${res.status}`))
  }

  getBooks(request: string, minInd: string, sorting: string) {
    return fetch(this._baseUrl + '?' + new URLSearchParams({
      q: request,
      startIndex: minInd.toString(),
      maxResults: (30).toString(),
      orderBy: sorting,
      key: key.toString()
    }).toString())
    .then(res => this._serverResponse(res));
  }

  getBook(id: string) {
    return fetch(`${this._baseUrl}/${id}`,)
    .then(res => this._serverResponse(res));
  }
}

const book = new Book(baseUrl);

export default book;