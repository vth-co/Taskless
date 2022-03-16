const LOAD = '/projects/load'
const ADD = '/projects/add'
const UPDATE = '/projects/edit'
const REMOVE = '/projects/remove'

const loadProjects = projects => ({ type: LOAD, projects })

const addProject = new_project => ({ type: ADD, new_project })

const updateProject = edit_project => ({ type: UPDATE, edit_project })

const removeProject = remove_project => ({ type: REMOVE, remove_project })

export const getProjects = () => async dispatch => {
    const response = await fetch('/api/projects/');
    if(response.ok) {
        const projects = await response.json();
        dispatch(loadProjects(projects));
        return projects;
    }
    return response;
}

export const createProject = (payload) => async dispatch => {
    const response = await fetch('/api/projects/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(response.ok) {
        const new_project = await response.json();
        dispatch(addProject(new_project));
        return new_project;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    }
    return response;
}

export const editProject = (payload) => async dispatch => {
    const response = await fetch(`/api/projects/${payload.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(response.ok) {
        const edit_project = await response.json();
        dispatch(updateProject(edit_project));
        return edit_project;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    }
    return response;
}


export const deleteProject = (id) => async dispatch => {
    const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        const message = await response.json();
        dispatch(removeProject(id));
        return message;
    }
    return response;
}

const projectsReducer = (state= {}, action) => {
    let newState;
    switch(action.type) {
        case LOAD:
            newState = {...state};
            action.projects.forEach(project => newState[project.id] = project);
            return newState;
        case ADD:
            newState = {...state};
            newState[action.new_project.id] = action.new_project;
            return newState;
        case UPDATE:
            newState = {...state}
            newState[action.edit_project.id] = action.edit_project;
            return newState;
        case REMOVE:
            newState = {...state};
            delete newState[action.remove_project];
            return newState;
        default:
            return state;
    }
}

export default projectsReducer;
