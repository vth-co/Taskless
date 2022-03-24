const LOAD = '/tasks/load'
const ADD = '/tasks/add'
const UPDATE = '/tasks/edit'
const REMOVE = '/tasks/remove'

const loadTasks = tasks => ({ type: LOAD, tasks })

const addTask = new_task => ({ type: ADD, new_task })

const updateTask = edit_task => ({ type: UPDATE, edit_task })

const removeTask = remove_task => ({ type: REMOVE, remove_task })

export const getTasks = () => async dispatch => {
    const response = await fetch('/api/tasks/');
    if(response.ok) {
        const tasks = await response.json();
        dispatch(loadTasks(tasks));
        return tasks;
    }
    return response;
}

export const createTask = (payload) => async dispatch => {
    const response = await fetch('/api/tasks/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(response.ok) {
        const new_task = await response.json();
        dispatch(addTask(new_task));
        return new_task;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    }
    return response;
}

export const finishedTask = (payload) => async dispatch => {
    const response = await fetch(`/api/tasks/finished/${payload.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(response.ok) {
        const edit_task = await response.json();
        dispatch(updateTask(edit_task));
        return edit_task;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    }
    return response;
}

export const editTask = (payload) => async dispatch => {
    const response = await fetch(`/api/tasks/${payload.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(response.ok) {
        const edit_task = await response.json();
        dispatch(updateTask(edit_task));
        return edit_task;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    }
    return response;
}


export const deleteTask = (id) => async dispatch => {
    const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        const message = await response.json();
        dispatch(removeTask(id));
        return message;
    }
    return response;
}


const tasksReducer = (state= {}, action) => {
    let newState;
    switch(action.type) {
        case LOAD:
            newState = {...state};
            action.tasks.forEach(task => newState[task.id] = task);
            return newState;
        case ADD:
            newState = {...state};
            newState[action.new_task.id] = action.new_task;
            return newState;
        case UPDATE:
            newState = {...state}
            newState[action.edit_task.id] = action.edit_task;
            return newState;
        case REMOVE:
            newState = {...state};
            delete newState[action.remove_task];
            return newState;
        default:
            return state;
    }
}

export default tasksReducer;
