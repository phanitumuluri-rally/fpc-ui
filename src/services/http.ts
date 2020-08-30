let baseUrl = "http://localhost:9000/api/v1/";

const http: Record<string, Function> = {};

const makeHttpCall = (
  path: string,
  data: {},
  method: string,
  headers = {}
) => {
  const endPoint = path.toLowerCase().startsWith('http') ? path : (baseUrl + path);

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(endPoint, {
        method,
        headers: {
            'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        return reject(response.status);
      }

      try {
        const json = await response.json();
        return resolve(json);
      } catch(err) {
        try {
          const text = await response.text();
          return resolve(text);
        } catch(e) { return resolve(); }
      }
    } catch(error) {
      return reject(error);
    }
  });
};

http.get = (path: string, data: any, headers: any = {}) => {
  return makeHttpCall(path, data, "GET", headers);
};

http.post = (path: string, data: any, headers: any = {}) => {
  return makeHttpCall(path, data, "POST", headers);
};

http.put = (path: string, data: any, headers: any = {}) => {
  return makeHttpCall(path, data, "PUT", headers);
};

http.delete = (path: string, data: any, headers: any = {}) => {
  return makeHttpCall(path, data, "DELETE", headers);
};

http.getBaseUrl = () => {
  return baseUrl;
};

http.updateBaseUrl = (url: string) => {
  baseUrl = url;
};

export default http;
export const { get, post, put, getBaseUrl, updateBaseUrl } = http;
