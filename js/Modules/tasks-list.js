//Show tasks
function showTasks() {
    tasks.forEach(function (title) {
        addNewTask(title);
    });
}

//Toggle complete
function toggleTaskComplete(task) {
    task.classList.toggle('btn-success'); //za kazdym klkinieciem klasa bedzie przełańczana, dzieki
    //wbudowanej funkcji toggle();
}

//Delete task
function deleteTask(task) {
    //usuwamy jaki element dziecka chcemy usunąć z rodzica
        // zmianna, ktora bedzie przechowwywać usuniete zadania

    var liToDelite = task.closest('li');
    //closest czyli nabliższy elemeny w tym wypdku krzyzyka

    task.closest('ul').removeChild(liToDelite);
}
