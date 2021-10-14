import { useState, useCallback } from 'react';
import { GrAdd } from 'react-icons/gr';
import './TodoInsert.scss';

const TodoInsert = () => {
  const [value, setValue] = useState();

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form className="toDoInsert">
      <input
        placeholder="Write what you need to do"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <GrAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
