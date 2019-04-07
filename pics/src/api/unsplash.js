import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 1c6ac0fe04269c4a249356ed67580b322a8e8c1816122d399b0e839251089498"
      }
})