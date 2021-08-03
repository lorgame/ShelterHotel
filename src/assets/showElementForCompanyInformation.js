/*КАЛЕНДАР*/
function calendar3(id, year, month ) {
  var Dlast = new Date(year,month+1,0).getDate(),
      D = new Date(year,month,Dlast),
      DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
      calendar = '<tr>',
      month=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
  if (DNfirst != 0) {
    for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
  }else{
    for(var  i = 0; i < 6; i++) calendar += '<td>';
  }
  for(var  i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today" onclick="selectedArrivalDate2()">' + i;
    }else{
      calendar += '<td class="hover" onclick="selectedArrivalDate2()">' + i;
    }
    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for(var  i = DNlast; i < 7; i++) calendar += '<td>';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
      document.querySelector('#'+id+' tbody').innerHTML += '<tr><td><td><td><td><td><td><td>';
  }
}
calendar3("calendar3", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar3 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  calendar3("calendar3", document.querySelector('#calendar3 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar3 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar3 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  calendar3("calendar3", document.querySelector('#calendar3 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar3 thead td:nth-child(2)').dataset.month)+1);
}

function calendar4(id, year, month) {
  var Dlast = new Date(year,month+1,0).getDate(),
      D = new Date(year,month,Dlast),
      DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
      calendar = '<tr>',
      month=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
  if (DNfirst != 0) {
    for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
  }else{
    for(var  i = 0; i < 6; i++) calendar += '<td>';
  }
  for(var  i = 1; i <= Dlast; i++) {
    if (i - 1 == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today" onclick="selectedDepartureDate2()">' + i;
    }else{
      calendar += '<td class="hover" onclick="selectedDepartureDate2()">' + i;
    }
    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for(var  i = DNlast; i < 7; i++) calendar += '<td>';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
      document.querySelector('#'+id+' tbody').innerHTML += '<tr><td><td><td><td><td><td><td>';
  }
}

calendar4("calendar4", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar4 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  calendar4("calendar4", document.querySelector('#calendar4 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar4 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar4 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  calendar4("calendar4", document.querySelector('#calendar4 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar4 thead td:nth-child(2)').dataset.month)+1);
}

/*Змінна для виклику вікна виводу кастомних елементів*/
let showElementBooking2 = document.getElementById('showElementBooking2');

/*Змінні кастомного SELECT*/
let selectItems2 = document.querySelectorAll('li.selectItem2');
let showSelectItems2 = document.getElementById('showSelectItem2');
let showSelect2 = document.getElementById('showSelect2');
let selectList = document.getElementById('selectList')

/*Змінні кастомного календаря*/
let showCalendarArrival2 = document.getElementById('showCalendarArrival2');
let showCalendarDeparture2 = document.getElementById('showCalendarDeparture2');

/*Функції кастомного SELECT*/
showSelectItems2.classList.add('showSelectItemForJs')
showSelectItems2.onclick = function(){
  if(!showSelectItems2.classList.contains('block')){
    showElementBooking2.style.display = 'none';
    showSelect2.style.display = 'block';
    showSelectItems2.classList.add('block');
    showSelectItems2.style.background = "no-repeat center right  url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTUiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4zNTQgOTM0LjgzKSByb3RhdGUoMTgwKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDEyLDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }
  else {
    showElementBooking2.style.display = 'none';
    showSelect2.style.display = 'none';
    showSelectItems2.classList.remove('block');
    showSelectItems2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }

  if(showSelectItems2.classList.contains('block')){
    showDateArrival2.classList.remove('block');
    showDateDeparture2.classList.remove('block');
    showCalendarArrival2.style.display = 'none';
    showCalendarDeparture2.style.display = 'none';
    showDateArrival2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showDateDeparture2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }
}

for (let selectItem of selectItems2) {
  selectItem.addEventListener('click', function(event) {
    showSelectItems2.innerHTML = selectItem.outerHTML;
  })
  showSelectItems2.innerHTML = selectItem.outerHTML;
}

/*Функції кастомного календаря*/
let dateArrival = new Date();
let dateDeparture = new Date();

if(window.innerWidth >= 769) {
  showDateArrival2.classList.add('showDateArrowForJs')
  showDateDeparture2.classList.add('showDateArrowForJs')
}
else {
}
window.addEventListener('resize', resizeArrow)
function resizeArrow() {
  if(window.innerWidth >= 769) {
    showDateArrival2.classList.add('showDateArrowForJs');
    showDateDeparture2.classList.add('showDateArrowForJs');
  }
  else {
    showDateArrival2.classList.remove('showDateArrowForJs');
    showDateDeparture2.classList.remove('showDateArrowForJs');
  }
}

dateDeparture.setDate(dateDeparture.getDate() + 1)

if(window.innerWidth <= 768) {
  let formatDateArrival = [('0' + dateArrival.getDate()).slice(-2), ('0' + (dateArrival.getMonth() + 1)).slice(-2), dateArrival.getFullYear().toString().slice(2,4)].join('.');
  let formatDateDeparture = [('0' + dateDeparture.getDate()).slice(-2), ('0' + (dateDeparture.getMonth() + 1)).slice(-2), dateDeparture.getFullYear().toString().slice(2,4)].join('.');
  showDateArrival2.innerHTML = formatDateArrival;
  showDateDeparture2.innerHTML = formatDateDeparture;
}
else {
  let formatDateArrival = dateArrival.toLocaleDateString();
  let formatDateDeparture = dateDeparture.toLocaleDateString();
  showDateArrival2.innerHTML = formatDateArrival;
  showDateDeparture2.innerHTML = formatDateDeparture;
}
window.addEventListener('resize', dateNow);
function dateNow() {
  if(window.innerWidth <= 768) {
    let formatDateArrival = [('0' + dateArrival.getDate()).slice(-2), ('0' + (dateArrival.getMonth() + 1)).slice(-2), dateArrival.getFullYear().toString().slice(2,4)].join('.');
    let formatDateDeparture = [('0' + dateDeparture.getDate()).slice(-2), ('0' + (dateDeparture.getMonth() + 1)).slice(-2), dateDeparture.getFullYear().toString().slice(2,4)].join('.');
    showDateArrival2.innerHTML = formatDateArrival;
    showDateDeparture2.innerHTML = formatDateDeparture;
  }
  else {
    let formatDateArrival = dateArrival.toLocaleDateString();
    let formatDateDeparture = dateDeparture.toLocaleDateString();
    showDateArrival2.innerHTML = formatDateArrival;
    showDateDeparture2.innerHTML = formatDateDeparture;
  }
}
showDateArrival2.onclick = function(){
  if(!showDateArrival2.classList.contains('block')){
    showElementBooking2.style.display = 'block';
    showCalendarArrival2.style.display = 'block';
    showDateArrival2.classList.add('block');
    showDateArrival2.style.background = "no-repeat center right  url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTUiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4zNTQgOTM0LjgzKSByb3RhdGUoMTgwKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDEyLDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }
  else {
    showElementBooking2.style.display = 'none';
    showCalendarArrival2.style.display = 'none';
    showDateArrival2.classList.remove('block');
    showDateArrival2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }

  if(showDateArrival2.classList.contains('block')){
    showSelectItems2.classList.remove('block');
    showDateDeparture2.classList.remove('block');
    showSelect2.style.display = 'none';
    showSelectItems2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showCalendarDeparture2.style.display = 'none';
    showDateDeparture2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }
}
showDateDeparture2.onclick = function(){
  if(!showDateDeparture2.classList.contains('block')){
    showElementBooking2.style.display = 'block';
    showCalendarDeparture2.style.display = 'block';
    showDateDeparture2.classList.add('block');
    showDateDeparture2.style.background = "no-repeat center right  url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTUiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4zNTQgOTM0LjgzKSByb3RhdGUoMTgwKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDEyLDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }
  else {
    showElementBooking2.style.display = 'none';
    showCalendarDeparture2.style.display = 'none';
    showDateDeparture2.classList.remove('block');
    showDateDeparture2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }

  if(showDateDeparture2.classList.contains('block')){
    showSelectItems2.classList.remove('block');
    showDateArrival2.classList.remove('block');
    showSelect2.style.display = 'none';
    showSelectItems2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showCalendarArrival2.style.display = 'none';
    showDateArrival2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }
}
/*Функції кастомного radioButton */
let numberBeds = document.querySelectorAll('.numberBed')

for (let numberBed of numberBeds) {
  numberBed.addEventListener('click', function(event) {
    showDateArrival2.classList.remove('block');
    showDateDeparture2.classList.remove('block');
    showElementBooking2.style.display = 'none';
    showCalendarDeparture2.style.display = 'none';
    showCalendarArrival2.style.display = 'none';
    showDateArrival2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showDateDeparture2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showSelect2.style.display = 'none';
    showSelectItems2.classList.remove('block');
    showSelectItems2.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  })
}