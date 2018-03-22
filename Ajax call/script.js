$(document).ready(function(){
  $.getJSON("https://jsonplaceholder.typicode.com/users",function(data){
    var tr;
    for(var i=0;i<data.length;i++)
    {
      tr = $('<tr/>');

      tr.append("<td>"+data[i].name+"</td>");
      tr.append("<td>"+data[i].username+"</td>");
      tr.append("<td>"+data[i].email+"</td>");
      tr.append("<td>"+data[i].address.city+"</td>");
      $('table').append(tr);
    }
  });
});

function filterlist() {

    var input,found,filter, table,td,i,tr,j;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    table=document.getElementById('tabledata');
    tr = table.getElementsByTagName('tr');

    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td');
        for(j=0;j<td.length;j++){
          if(td[j].innerHTML.toUpperCase().indexOf(filter) > -1)
              found = true;
        }
        if (found) {
            tr[i].style.display = "";
            found=false;
        } else {
            tr[i].style.display = "none";
        }
      }
}
