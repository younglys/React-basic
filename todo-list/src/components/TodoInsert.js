import { useState, useCallback } from 'react';
import { GrAdd } from 'react-icons/gr';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState();

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="toDoInsert" onSubmit={onSubmit}>
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
