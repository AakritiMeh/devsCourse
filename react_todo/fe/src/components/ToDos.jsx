import PropTypes from 'prop-types';
export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    })).isRequired,
};