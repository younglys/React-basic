import { GrAdd } from 'react-icons/gr';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="toDoInsert">
      <input placeholder="Write what you need to do" />
      <button type="submit">
        <GrAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
