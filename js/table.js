//данные для таблицы
var datasource =
[
     
];

//редактирование записи в ячейке таблицы  
$('body').on('click', 'table td.edit', function(e)
{      
  if ($(e.target).closest('select, input, .btn-group, .btn, a').length) return;          
  var tr = $(this).closest('tr');  
  var ind = tr.data('index'); 
  var type = $(this).data('type');
  var field = $(this).data('field');
  var source = $(this).data('source');
  if (type=='textbox')
  {
    $(this).html('<div data---="textbox__datasource[{0}].{1}__class:form-control input-sm;keypress:true;delay:1000;"></div>'.format(ind, field));
  }
  if (type=='dropdown')
  {
    $(this).html('<div data---="dropdown__datasource[{0}].{1}__class:form-control input-sm;required:true;datasource:{2};text:name;value:id;type:number;"></div>'.format(ind, field, source));
  }
  COMPILE();               
 })

//добавить запись
function addRow(e) {
  if (!VALIDATE('form.*')) return; 
  PUSH('datasource', form);
  SET('form', null);
  RESET('form.*');
}

//удалить запись
function remRow(e) {  
  var tr = $(e).closest('tr');
  var ind = tr.data('index'); 
  datasource.splice(ind, 1);
  UPDATE('datasource');   
}