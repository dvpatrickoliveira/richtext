const elements = document.querySelectorAll('.btn');


elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];

        if (command == 'createLink'  || command == 'insertImage') {
                let url = prompt('Entre com o link aqui:', 'http://')
                document.execCommand(command, false, url);
        } else {
                document.execCommand(command, false, null);
        }
    });
});
    