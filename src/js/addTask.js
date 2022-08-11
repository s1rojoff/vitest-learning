function addTask(task){
    task = task.at(0) + task.at(-1);
    return console.log(task);
}

// addTask('niam')

export default addTask