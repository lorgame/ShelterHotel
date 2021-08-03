/*КАЛЕНДАР*/
function calendar1(id, year, month ) {
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
      calendar += '<td class="today" onclick="selectedArrivalDate()">' + i;
    }else{
      calendar += '<td class="hover" onclick="selectedArrivalDate()">' + i;
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
calendar1("calendar1", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar1 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  calendar1("calendar1", document.querySelector('#calendar1 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar1 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar1 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  calendar1("calendar1", document.querySelector('#calendar1 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar1 thead td:nth-child(2)').dataset.month)+1);
}

function calendar2(id, year, month) {
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
      calendar += '<td class="today" onclick="selectedDepartureDate()">' + i;
    }else{
      calendar += '<td class="hover" onclick="selectedDepartureDate()">' + i;
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

calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
}

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
let showElementBooking = document.getElementById('showElementBooking');
let showElementBooking2 = document.getElementById('showElementBooking2');

/*Змінні кастомного SELECT*/
let selectItems = document.querySelectorAll('li.selectItem');
let selectItems2 = document.querySelectorAll('li.selectItem2');
let showSelectItems = document.getElementById('showSelectItem');
let showSelectItems2 = document.getElementById('showSelectItem2');
let showSelect = document.getElementById('showSelect');
let showSelect2 = document.getElementById('showSelect2');
let selectList = document.getElementById('selectList')

/*Змінні кастомного календаря*/
let showDateArrival = document.getElementById('showDateArrival');
let showDateDeparture = document.getElementById('showDateDeparture');
let showCalendarArrival = document.getElementById('showCalendarArrival');
let showCalendarDeparture = document.getElementById('showCalendarDeparture');
let showCalendarArrival2 = document.getElementById('showCalendarArrival2');
let showCalendarDeparture2 = document.getElementById('showCalendarDeparture2');
let titleArrival = document.getElementById('titleArrival');
let titleDeparture = document.getElementById('titleDeparture');

/*Функції кастомного SELECT*/
showSelectItems.classList.add('showSelectItemForJs')
showSelectItems.onclick = function(){
  if(!showSelectItems.classList.contains('block')){
    showElementBooking.style.display = 'none';
    showSelect.style.display = 'block';
    showSelectItems.classList.add('block');
    showSelectItems.style.background = "no-repeat center right  url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTUiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4zNTQgOTM0LjgzKSByb3RhdGUoMTgwKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDEyLDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }
  else {
    showElementBooking.style.display = 'none';
    showSelect.style.display = 'none';
    showSelectItems.classList.remove('block');
    showSelectItems.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }

  if(showSelectItems.classList.contains('block')){
    showDateArrival.classList.remove('block');
    showDateDeparture.classList.remove('block');
    showCalendarArrival.style.display = 'none';
    showCalendarDeparture.style.display = 'none';
    showDateArrival.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showDateDeparture.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
  }
}
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

for (let selectItem of selectItems) {
  selectItem.addEventListener('click', function(event) {
    showSelectItems.innerHTML = selectItem.outerHTML;
  })
  showSelectItems.innerHTML = selectItem.outerHTML;
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
  showDateArrival.classList.add('showDateArrowForJs')
  showDateDeparture.classList.add('showDateArrowForJs')
  showDateArrival2.classList.add('showDateArrowForJs')
  showDateDeparture2.classList.add('showDateArrowForJs')
}
else {
  titleArrival.classList.add('showDateArrowMobileForJs')
  titleDeparture.classList.add('showDateArrowMobileForJs')
}
window.addEventListener('resize', resizeArrow)
function resizeArrow() {
  if(window.innerWidth >= 769) {
    showDateArrival.classList.add('showDateArrowForJs');
    showDateDeparture.classList.add('showDateArrowForJs');
    showDateArrival2.classList.add('showDateArrowForJs');
    showDateDeparture2.classList.add('showDateArrowForJs');
    titleArrival.classList.remove('showDateArrowMobileForJs');
    titleDeparture.classList.remove('showDateArrowMobileForJs');
    titleArrival.style.background = 'white';
    titleDeparture.style.background = 'white';
    showDateArrival.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showDateDeparture.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showElementBooking.style.display = 'none';
    showCalendarDeparture.style.display = 'none';
    titleArrival.classList.remove('block');
    titleDeparture.classList.remove('block');
    showDateArrival.classList.remove('block');
    showDateDeparture.classList.remove('block');
  }
  else {
    showDateArrival.classList.remove('showDateArrowForJs');
    showDateDeparture.classList.remove('showDateArrowForJs');
    showDateArrival2.classList.remove('showDateArrowForJs');
    showDateDeparture2.classList.remove('showDateArrowForJs');
    titleArrival.classList.add('showDateArrowMobileForJs');
    titleDeparture.classList.add('showDateArrowMobileForJs');
    showDateArrival.style.background = 'white';
    showDateDeparture.style.background = 'white';
    titleArrival.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ljc3OCIgaGVpZ2h0PSIzLjg4OSIgdmlld0JveD0iMCAwIDYuNzc4IDMuODg5Ij4NCiAgPGcgaWQ9ItCh0LPRgNGD0L/Qv9C40YDQvtCy0LDRgtGMXzE3NSIgZGF0YS1uYW1lPSLQodCz0YDRg9C/0L/QuNGA0L7QstCw0YLRjCAxNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDAuNjU2IC05MjguNDgyKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDA3LjA4LDkyOC44MzVsLTMuMDM1LDMuMDM1aDBsLTMuMDM1LTMuMDM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODE4MjgyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCg==')";
    titleDeparture.style.background = " no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ljc3OCIgaGVpZ2h0PSIzLjg4OSIgdmlld0JveD0iMCAwIDYuNzc4IDMuODg5Ij4NCiAgPGcgaWQ9ItCh0LPRgNGD0L/Qv9C40YDQvtCy0LDRgtGMXzE3NSIgZGF0YS1uYW1lPSLQodCz0YDRg9C/0L/QuNGA0L7QstCw0YLRjCAxNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDAuNjU2IC05MjguNDgyKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDA3LjA4LDkyOC44MzVsLTMuMDM1LDMuMDM1aDBsLTMuMDM1LTMuMDM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODE4MjgyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCg==')";
    showElementBooking.style.display = 'none';
    showCalendarDeparture.style.display = 'none';
    showDateArrival.classList.remove('block');
    showDateDeparture.classList.remove('block');
    titleArrival.classList.remove('block');
    titleDeparture.classList.remove('block');
  }
}

dateDeparture.setDate(dateDeparture.getDate() + 1)

if(window.innerWidth <= 768) {
  let formatDateArrival = [('0' + dateArrival.getDate()).slice(-2), ('0' + (dateArrival.getMonth() + 1)).slice(-2), dateArrival.getFullYear().toString().slice(2,4)].join('.');
  let formatDateDeparture = [('0' + dateDeparture.getDate()).slice(-2), ('0' + (dateDeparture.getMonth() + 1)).slice(-2), dateDeparture.getFullYear().toString().slice(2,4)].join('.');
  showDateArrival.innerHTML = formatDateArrival;
  showDateDeparture.innerHTML = formatDateDeparture;
  showDateArrival2.innerHTML = formatDateArrival;
  showDateDeparture2.innerHTML = formatDateDeparture;
}
else {
  let formatDateArrival = dateArrival.toLocaleDateString();
  let formatDateDeparture = dateDeparture.toLocaleDateString();
  showDateArrival.innerHTML = formatDateArrival;
  showDateDeparture.innerHTML = formatDateDeparture;
  showDateArrival2.innerHTML = formatDateArrival;
  showDateDeparture2.innerHTML = formatDateDeparture;
}
window.addEventListener('resize', dateNow);
function dateNow() {
  if(window.innerWidth <= 768) {
    let formatDateArrival = [('0' + dateArrival.getDate()).slice(-2), ('0' + (dateArrival.getMonth() + 1)).slice(-2), dateArrival.getFullYear().toString().slice(2,4)].join('.');
    let formatDateDeparture = [('0' + dateDeparture.getDate()).slice(-2), ('0' + (dateDeparture.getMonth() + 1)).slice(-2), dateDeparture.getFullYear().toString().slice(2,4)].join('.');
    showDateArrival.innerHTML = formatDateArrival;
    showDateDeparture.innerHTML = formatDateDeparture;
    showDateArrival2.innerHTML = formatDateArrival;
    showDateDeparture2.innerHTML = formatDateDeparture;
  }
  else {
    let formatDateArrival = dateArrival.toLocaleDateString();
    let formatDateDeparture = dateDeparture.toLocaleDateString();
    showDateArrival.innerHTML = formatDateArrival;
    showDateDeparture.innerHTML = formatDateDeparture;
    showDateArrival2.innerHTML = formatDateArrival;
    showDateDeparture2.innerHTML = formatDateDeparture;
  }
}

showDateArrival.onclick = function(){
  if(!showDateArrival.classList.contains('block') && !titleArrival.classList.contains('block')){
    showElementBooking.style.display = 'block';
    showCalendarArrival.style.display = 'block';
    if(window.innerWidth >= 769) {
      showDateArrival.classList.add('block');
      showDateArrival.style.background = "no-repeat center right  url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTUiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4zNTQgOTM0LjgzKSByb3RhdGUoMTgwKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDEyLDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    }
    else {
      titleArrival.classList.add('block');
      titleArrival.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ljc3OCIgaGVpZ2h0PSIzLjg4OSIgdmlld0JveD0iMCAwIDYuNzc4IDMuODg5Ij4NCiAgPGcgaWQ9ItCh0LPRgNGD0L/Qv9C40YDQvtCy0LDRgtGMXzE3MyIgZGF0YS1uYW1lPSLQodCz0YDRg9C/0L/QuNGA0L7QstCw0YLRjCAxNzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwNy40MzQgOTMyLjM3KSByb3RhdGUoMTgwKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDA3LjA4LDkyOC44MzVsLTMuMDM1LDMuMDM1aDBsLTMuMDM1LTMuMDM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODE4MjgyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCg==')"
    }
  }
  else {
    showElementBooking.style.display = 'none';
    showCalendarArrival.style.display = 'none';
    if(window.innerWidth >= 769) {
      showDateArrival.classList.remove('block');
      showDateArrival.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    }
    else {
      titleArrival.classList.remove('block');
      titleArrival.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ljc3OCIgaGVpZ2h0PSIzLjg4OSIgdmlld0JveD0iMCAwIDYuNzc4IDMuODg5Ij4NCiAgPGcgaWQ9ItCh0LPRgNGD0L/Qv9C40YDQvtCy0LDRgtGMXzE3NSIgZGF0YS1uYW1lPSLQodCz0YDRg9C/0L/QuNGA0L7QstCw0YLRjCAxNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDAuNjU2IC05MjguNDgyKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDA3LjA4LDkyOC44MzVsLTMuMDM1LDMuMDM1aDBsLTMuMDM1LTMuMDM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODE4MjgyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCg==')";
    }
  }

  if(showDateArrival.classList.contains('block') || titleArrival.classList.contains('block')){
    showSelectItems.classList.remove('block');
    showDateDeparture.classList.remove('block');
    titleDeparture.classList.remove('block');
    showSelect.style.display = 'none';
    showSelectItems.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showCalendarDeparture.style.display = 'none';
    if(window.innerWidth >= 769) {
      showDateDeparture.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    }
    else {
      titleDeparture.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ljc3OCIgaGVpZ2h0PSIzLjg4OSIgdmlld0JveD0iMCAwIDYuNzc4IDMuODg5Ij4NCiAgPGcgaWQ9ItCh0LPRgNGD0L/Qv9C40YDQvtCy0LDRgtGMXzE3NSIgZGF0YS1uYW1lPSLQodCz0YDRg9C/0L/QuNGA0L7QstCw0YLRjCAxNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDAuNjU2IC05MjguNDgyKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDA3LjA4LDkyOC44MzVsLTMuMDM1LDMuMDM1aDBsLTMuMDM1LTMuMDM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODE4MjgyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCg==')";
    }
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

showDateDeparture.onclick = function(){
  if(!showDateDeparture.classList.contains('block') && !titleDeparture.classList.contains('block')){
    showElementBooking.style.display = 'block';
    showCalendarDeparture.style.display = 'block';
    if(window.innerWidth >= 769) {
      showDateDeparture.classList.add('block');
      showDateDeparture.style.background = "no-repeat center right  url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTUiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4zNTQgOTM0LjgzKSByb3RhdGUoMTgwKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDEyLDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    }
    else {
      titleDeparture.classList.add('block');
      titleDeparture.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ljc3OCIgaGVpZ2h0PSIzLjg4OSIgdmlld0JveD0iMCAwIDYuNzc4IDMuODg5Ij4NCiAgPGcgaWQ9ItCh0LPRgNGD0L/Qv9C40YDQvtCy0LDRgtGMXzE3MyIgZGF0YS1uYW1lPSLQodCz0YDRg9C/0L/QuNGA0L7QstCw0YLRjCAxNzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwNy40MzQgOTMyLjM3KSByb3RhdGUoMTgwKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDA3LjA4LDkyOC44MzVsLTMuMDM1LDMuMDM1aDBsLTMuMDM1LTMuMDM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODE4MjgyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCg==')"
    }
  }
  else {
    showElementBooking.style.display = 'none';
    showCalendarDeparture.style.display = 'none';
    if(window.innerWidth >= 769) {
      showDateDeparture.classList.remove('block');
      showDateDeparture.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    }
    else {
      titleDeparture.classList.remove('block');
      titleDeparture.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ljc3OCIgaGVpZ2h0PSIzLjg4OSIgdmlld0JveD0iMCAwIDYuNzc4IDMuODg5Ij4NCiAgPGcgaWQ9ItCh0LPRgNGD0L/Qv9C40YDQvtCy0LDRgtGMXzE3NSIgZGF0YS1uYW1lPSLQodCz0YDRg9C/0L/QuNGA0L7QstCw0YLRjCAxNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDAuNjU2IC05MjguNDgyKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDA3LjA4LDkyOC44MzVsLTMuMDM1LDMuMDM1aDBsLTMuMDM1LTMuMDM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODE4MjgyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCg==')";
    }
  }

  if(showDateDeparture.classList.contains('block') || titleDeparture.classList.contains('block')){
    showSelectItems.classList.remove('block');
    showDateArrival.classList.remove('block');
    titleArrival.classList.remove('block');
    showSelect.style.display = 'none';
    showSelectItems.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showCalendarArrival.style.display = 'none';
    if(window.innerWidth >= 769) {
      showDateArrival.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    }
    else {
      titleArrival.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ljc3OCIgaGVpZ2h0PSIzLjg4OSIgdmlld0JveD0iMCAwIDYuNzc4IDMuODg5Ij4NCiAgPGcgaWQ9ItCh0LPRgNGD0L/Qv9C40YDQvtCy0LDRgtGMXzE3NSIgZGF0YS1uYW1lPSLQodCz0YDRg9C/0L/QuNGA0L7QstCw0YLRjCAxNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDAuNjU2IC05MjguNDgyKSI+DQogICAgPHBhdGggaWQ9ItCa0L7QvdGC0YPRgF8yIiBkYXRhLW5hbWU9ItCa0L7QvdGC0YPRgCAyIiBkPSJNNDA3LjA4LDkyOC44MzVsLTMuMDM1LDMuMDM1aDBsLTMuMDM1LTMuMDM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODE4MjgyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCg==')";
    }
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
    showDateArrival.classList.remove('block');
    showDateDeparture.classList.remove('block');
    showElementBooking.style.display = 'none';
    showCalendarDeparture.style.display = 'none';
    showCalendarArrival.style.display = 'none';
    showDateArrival.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showDateDeparture.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";
    showSelect.style.display = 'none';
    showSelectItems.classList.remove('block');
    showSelectItems.style.background = "no-repeat center right url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS42OTgiIGhlaWdodD0iNi4zNDgiIHZpZXdCb3g9IjAgMCAxMS42OTggNi4zNDgiPg0KICA8ZyBpZD0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YxfMTYiIGRhdGEtbmFtZT0i0KHQs9GA0YPQv9C/0LjRgNC+0LLQsNGC0YwgMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01ODAuNTMgLTkyOC40ODIpIj4NCiAgICA8cGF0aCBpZD0i0JrQvtC90YLRg9GAXzMiIGRhdGEtbmFtZT0i0JrQvtC90YLRg9GAIDMiIGQ9Ik01OTEuODc0LDkyOC44MzVsLTUuNDk1LDUuNDk1aDBsLTUuNDk1LTUuNDk1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjJhM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K')";

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