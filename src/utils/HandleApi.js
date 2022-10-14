import axios from 'axios' ;

const baseurl="https://mytodo-app-backend.onrender.com"

const getAllToDo = (setToDo) => {
    axios.get(baseurl)
    .then(({data}) => {
        console.log('data ---> ', data);
        setToDo(data)
    })
}


// add data
const addToDo = (text, setText, setToDo) => {

    axios.post(`${baseurl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err));


}


//update data
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios.post(`${baseurl}/update`, {_id: toDoId, text})
    .then((data) => {
        console.log(data);
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err));

}


//delete data
const deleteToDo = (_id, setToDo) => {

    axios.post(`${baseurl}/delete`, {_id})
    .then((data) => {
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err));

}

export {getAllToDo, addToDo, updateToDo, deleteToDo }