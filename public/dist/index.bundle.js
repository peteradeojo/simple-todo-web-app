/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./public/src/index.js ***!
  \*****************************/


const todoListBlock = document.getElementById('todo-list');
const localStorageLocation = 'todo';

function loadLocalData(item) {
	return JSON.parse(localStorage.getItem(item));
}

const loadPreviousTodos = () => {
	const todoList = loadLocalData(localStorageLocation);
	if (!todoList || todoList.length < 1) {
		todoListBlock.innerHTML = `<li>Your uncompleted to-dos wil be displayed here</li>`;
		return undefined;
	} else todoListBlock.innerHTML = '';

	todoList.forEach((item, index) => {
		const li = document.createElement('li');
		li.innerHTML = `<span class='todo-text ${item.status ? '' : 'pending'}'>${item.item}</span> <span>
			<button type='button' class="btn set-status ${
				item.status ? 'complete' : ''
			}" data-type='set-status' data-target='${index}'>
				${item.status === 1 ? "<i class='fas fa-check'></i>" : "<i class='fas fa-check-circle'></i>"}
			</button>
			<button class='btn delete-todo' data-index='${index}'><i class='fa fa-trash'></i></btn>
		</span>`;
		todoListBlock.appendChild(li);
	});

	document.querySelectorAll("[data-type='set-status']").forEach(function (item) {
		item.addEventListener('click', toggleCompleteStatus);
	});

	document.querySelectorAll('.delete-todo').forEach((item) => {
		item.addEventListener('click', deleteTodo);
	});
};

const loadIntoStorage = (item) => {
	let storage;
	if (localStorage.getItem(localStorageLocation)) {
		storage = loadLocalData(localStorageLocation);
		if (storage.push(item)) {
			if (localStorage.setItem(localStorageLocation, JSON.stringify(storage))) {
				alert(`${item.item} has been added to the To-Do List`);
				loadPreviousTodos();
			}
		}
	} else {
		storage = [item];
		localStorage.setItem(localStorageLocation, JSON.stringify(storage));
	}
};

const registerTodo = (e) => {
	e.preventDefault();
	const input = document.querySelector('#todo-item');
	if (input.value.length > 0) {
		const item = {
			item: input.value,
			status: 0,
		};
		loadIntoStorage(item);
		loadPreviousTodos();
	} else {
		alert('Enter something to do');
	}
	input.value = '';
	input.focus();
};

function deleteTodo() {
	// Delete Todo items from local storage
	const todoList = loadLocalData(localStorageLocation);
	const parent = this.parentElement.parentElement;
	const targetProp = this.dataset.index;
	console.log(targetProp);
	const newObject = Object.keys(todoList).reduce((object, index) => {
		if (index !== targetProp) {
			object.push(todoList[index]);
		}
		return object;
	}, []);

	localStorage.setItem(localStorageLocation, JSON.stringify(newObject));
	loadPreviousTodos();
}

function toggleCompleteStatus() {
	const target = this.dataset.target;
	const todoList = loadLocalData('todo');
	const prevElem = this.parentElement.previousElementSibling;
	if (todoList[target].status === 0) {
		todoList[target].status = 1;
		this.innerHTML = "<i class='fas fa-check'></i>";
		this.classList.add('complete');
		prevElem.classList.remove('pending');
	} else {
		todoList[target].status = 0;
		this.innerHTML = "<i class='fas fa-check-circle'></i>";
		this.classList.remove('complete');
		prevElem.classList.add('pending');
	}
	localStorage.setItem('todo', JSON.stringify(todoList));
}

document.addEventListener('DOMContentLoaded', () => {
	loadPreviousTodos();
	document.querySelector('#register-todo').addEventListener('submit', registerTodo);

	document.querySelectorAll("[data-type='set-status']").forEach(function (item) {
		item.addEventListener('click', toggleCompleteStatus);
	});

	document.querySelectorAll('.delete-todo').forEach((item) => {
		item.addEventListener('click', deleteTodo);
	});

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('./sw.js', { scope: '/' })
			.then((swReg) => {
				console.log(`SW registered on ${swReg.scope}`);
			})
			.catch((err) => {
				console.error(err);
			});
	}
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vcHVibGljL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsMkNBQTJDLDZCQUE2QixJQUFJLFVBQVU7QUFDdEY7QUFDQTtBQUNBLElBQUksd0NBQXdDLE1BQU07QUFDbEQsTUFBTTtBQUNOO0FBQ0EsaURBQWlELE1BQU07QUFDdkQ7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0Esb0NBQW9DLFlBQVk7QUFDaEQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxDQUFDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdG9kb0xpc3RCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QnKTtcbmNvbnN0IGxvY2FsU3RvcmFnZUxvY2F0aW9uID0gJ3RvZG8nO1xuXG5mdW5jdGlvbiBsb2FkTG9jYWxEYXRhKGl0ZW0pIHtcblx0cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbSkpO1xufVxuXG5jb25zdCBsb2FkUHJldmlvdXNUb2RvcyA9ICgpID0+IHtcblx0Y29uc3QgdG9kb0xpc3QgPSBsb2FkTG9jYWxEYXRhKGxvY2FsU3RvcmFnZUxvY2F0aW9uKTtcblx0aWYgKCF0b2RvTGlzdCB8fCB0b2RvTGlzdC5sZW5ndGggPCAxKSB7XG5cdFx0dG9kb0xpc3RCbG9jay5pbm5lckhUTUwgPSBgPGxpPllvdXIgdW5jb21wbGV0ZWQgdG8tZG9zIHdpbCBiZSBkaXNwbGF5ZWQgaGVyZTwvbGk+YDtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9IGVsc2UgdG9kb0xpc3RCbG9jay5pbm5lckhUTUwgPSAnJztcblxuXHR0b2RvTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsaS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9J3RvZG8tdGV4dCAke2l0ZW0uc3RhdHVzID8gJycgOiAncGVuZGluZyd9Jz4ke2l0ZW0uaXRlbX08L3NwYW4+IDxzcGFuPlxuXHRcdFx0PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPVwiYnRuIHNldC1zdGF0dXMgJHtcblx0XHRcdFx0aXRlbS5zdGF0dXMgPyAnY29tcGxldGUnIDogJydcblx0XHRcdH1cIiBkYXRhLXR5cGU9J3NldC1zdGF0dXMnIGRhdGEtdGFyZ2V0PScke2luZGV4fSc+XG5cdFx0XHRcdCR7aXRlbS5zdGF0dXMgPT09IDEgPyBcIjxpIGNsYXNzPSdmYXMgZmEtY2hlY2snPjwvaT5cIiA6IFwiPGkgY2xhc3M9J2ZhcyBmYS1jaGVjay1jaXJjbGUnPjwvaT5cIn1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz0nYnRuIGRlbGV0ZS10b2RvJyBkYXRhLWluZGV4PScke2luZGV4fSc+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+PC9idG4+XG5cdFx0PC9zcGFuPmA7XG5cdFx0dG9kb0xpc3RCbG9jay5hcHBlbmRDaGlsZChsaSk7XG5cdH0pO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10eXBlPSdzZXQtc3RhdHVzJ11cIikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDb21wbGV0ZVN0YXR1cyk7XG5cdH0pO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdG9kbycpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kbyk7XG5cdH0pO1xufTtcblxuY29uc3QgbG9hZEludG9TdG9yYWdlID0gKGl0ZW0pID0+IHtcblx0bGV0IHN0b3JhZ2U7XG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VMb2NhdGlvbikpIHtcblx0XHRzdG9yYWdlID0gbG9hZExvY2FsRGF0YShsb2NhbFN0b3JhZ2VMb2NhdGlvbik7XG5cdFx0aWYgKHN0b3JhZ2UucHVzaChpdGVtKSkge1xuXHRcdFx0aWYgKGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUxvY2F0aW9uLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSkpIHtcblx0XHRcdFx0YWxlcnQoYCR7aXRlbS5pdGVtfSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgVG8tRG8gTGlzdGApO1xuXHRcdFx0XHRsb2FkUHJldmlvdXNUb2RvcygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRzdG9yYWdlID0gW2l0ZW1dO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUxvY2F0aW9uLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XG5cdH1cbn07XG5cbmNvbnN0IHJlZ2lzdGVyVG9kbyA9IChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1pdGVtJyk7XG5cdGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG5cdFx0Y29uc3QgaXRlbSA9IHtcblx0XHRcdGl0ZW06IGlucHV0LnZhbHVlLFxuXHRcdFx0c3RhdHVzOiAwLFxuXHRcdH07XG5cdFx0bG9hZEludG9TdG9yYWdlKGl0ZW0pO1xuXHRcdGxvYWRQcmV2aW91c1RvZG9zKCk7XG5cdH0gZWxzZSB7XG5cdFx0YWxlcnQoJ0VudGVyIHNvbWV0aGluZyB0byBkbycpO1xuXHR9XG5cdGlucHV0LnZhbHVlID0gJyc7XG5cdGlucHV0LmZvY3VzKCk7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuXHQvLyBEZWxldGUgVG9kbyBpdGVtcyBmcm9tIGxvY2FsIHN0b3JhZ2Vcblx0Y29uc3QgdG9kb0xpc3QgPSBsb2FkTG9jYWxEYXRhKGxvY2FsU3RvcmFnZUxvY2F0aW9uKTtcblx0Y29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdGNvbnN0IHRhcmdldFByb3AgPSB0aGlzLmRhdGFzZXQuaW5kZXg7XG5cdGNvbnNvbGUubG9nKHRhcmdldFByb3ApO1xuXHRjb25zdCBuZXdPYmplY3QgPSBPYmplY3Qua2V5cyh0b2RvTGlzdCkucmVkdWNlKChvYmplY3QsIGluZGV4KSA9PiB7XG5cdFx0aWYgKGluZGV4ICE9PSB0YXJnZXRQcm9wKSB7XG5cdFx0XHRvYmplY3QucHVzaCh0b2RvTGlzdFtpbmRleF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9LCBbXSk7XG5cblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlTG9jYXRpb24sIEpTT04uc3RyaW5naWZ5KG5ld09iamVjdCkpO1xuXHRsb2FkUHJldmlvdXNUb2RvcygpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZVN0YXR1cygpIHtcblx0Y29uc3QgdGFyZ2V0ID0gdGhpcy5kYXRhc2V0LnRhcmdldDtcblx0Y29uc3QgdG9kb0xpc3QgPSBsb2FkTG9jYWxEYXRhKCd0b2RvJyk7XG5cdGNvbnN0IHByZXZFbGVtID0gdGhpcy5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdGlmICh0b2RvTGlzdFt0YXJnZXRdLnN0YXR1cyA9PT0gMCkge1xuXHRcdHRvZG9MaXN0W3RhcmdldF0uc3RhdHVzID0gMTtcblx0XHR0aGlzLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1jaGVjayc+PC9pPlwiO1xuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcblx0XHRwcmV2RWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdwZW5kaW5nJyk7XG5cdH0gZWxzZSB7XG5cdFx0dG9kb0xpc3RbdGFyZ2V0XS5zdGF0dXMgPSAwO1xuXHRcdHRoaXMuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmFzIGZhLWNoZWNrLWNpcmNsZSc+PC9pPlwiO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcblx0XHRwcmV2RWxlbS5jbGFzc0xpc3QuYWRkKCdwZW5kaW5nJyk7XG5cdH1cblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRsb2FkUHJldmlvdXNUb2RvcygpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXItdG9kbycpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHJlZ2lzdGVyVG9kbyk7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXR5cGU9J3NldC1zdGF0dXMnXVwiKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNvbXBsZXRlU3RhdHVzKTtcblx0fSk7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS10b2RvJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb2RvKTtcblx0fSk7XG5cblx0aWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcblx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuXHRcdFx0LnJlZ2lzdGVyKCcuL3N3LmpzJywgeyBzY29wZTogJy8nIH0pXG5cdFx0XHQudGhlbigoc3dSZWcpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coYFNXIHJlZ2lzdGVyZWQgb24gJHtzd1JlZy5zY29wZX1gKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHR9KTtcblx0fVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9