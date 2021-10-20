import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  /* axios.get.then
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      setData(res.data);
    });
  };
  */

  // async/await axios.get
  const onClick = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/2',
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          row={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
