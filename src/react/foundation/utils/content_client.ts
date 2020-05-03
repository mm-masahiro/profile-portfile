import * as contentful from 'contentful';

class ContentClient {
  _client: any;

  constructor(space, accessToken) {
    const client = contentful.createClient({
      space,
      accessToken,
    })

    this._client = client
  }

  async get(query) {
    const res = await this._client.getEntries(query)
    console.log(res)
    return res.items
  }
}

export default ContentClient