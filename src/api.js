export const netWorkService = ({ url, method, body }) => {
    console.log("serv", method, body, url);
  
    const name = body ? JSON.stringify(body) : null;
  
    return fetch(`http://localhost:7777/${url}`, {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: name,
    }).then((res) => res.json());
  };

  
  git remote add origin https://github.com/Evgenii-kgg/cardcrud.git
git push -u origin master
  
  