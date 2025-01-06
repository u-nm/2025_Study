
document.addEventListener('DOMContentLoaded', () => {

    // 변수부터 설정
    const todoInput = document.querySelector('.todo-txt');
    const todoList = document.querySelector('.todo-list');
    const addTodo = document.querySelector('.add-todo');


    // 버튼 클릭시 액션
    addTodo.addEventListener('click', ()=>{

        console.log(todoInput.value);
            // input 유효성 검사
        if(todoInput.value === null || todoInput.value == '') {
            alert('할일입력');
            return false;
        } else {
            appendTxt();
        }

    })
    // Enter key 액션
    todoInput.addEventListener('keyup', (event) => {

        if(event.key === 'Enter' && todoInput.value !== '') {
            appendTxt();
        }

    })

    // input 값을 list 에 추가
    function appendTxt() {

        const li = document.createElement('li');
        li.setAttribute('class', 'todo-item');
        li.draggable = true;

        const check = document.createElement('input');
        check.setAttribute('type', 'checkbox');

        const inputTxt = document.createElement('p');
        inputTxt.textContent = todoInput.value;

        const delTodo = document.createElement('button');
        delTodo.textContent = 'X';
        delTodo.addEventListener('click', deleteTxt); 

        li.appendChild(check);
        li.appendChild(inputTxt);
        li.appendChild(delTodo);

        addDragAndDropHandlers(li);
        todoList.appendChild(li);

        todoInput.value = '';
        todoInput.focus();

        // 체크기능
        check.addEventListener('click', () => {

            // console.log(check.checked);
            if(check.checked == true) {
                inputTxt.style.textDecoration = "line-through";
                inputTxt.style.color = "gray"; 
            } else {
                inputTxt.style.textDecoration = "none";
                inputTxt.style.color = "black"; 
            }
        })

    }

    
    function deleteTxt(e){ //삭제 버튼(x) 클릭시 
        let removeOne = e.target.parentElement;  //선택한 목록 한개만 지우기(부모 객체를 지운다)
        removeOne.remove();
    }


    // 드래그 앤 드롭 기능 추가
    function addDragAndDropHandlers(item) {
        item.addEventListener('dragstart', () => {
            item.classList.add('dragging');
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
        });
    }

    // 드롭 위치 감지
    todoList.addEventListener('dragover', (event) => {
        event.preventDefault(); // 기본 동작 방지

        const draggingItem = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(todoList, event.clientY);

        if (afterElement == null) {
            todoList.appendChild(draggingItem);
        } else {
            todoList.insertBefore(draggingItem, afterElement);
        }
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.todo-item:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > closest.offset) {
                return { offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

})