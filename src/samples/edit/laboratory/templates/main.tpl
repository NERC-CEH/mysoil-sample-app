<ul class="table-view core inputs no-top <%- obj.isSynchronising ? 'disabled' : '' %>">
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/lab-name" id="lab-name-button"
       class="<%- obj.locks['lab-name'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-left icon icon-laboratory-name"></span>
      <span class="media-object pull-right descript"><%- obj.labName %></span>
      Laboratory
    </a>
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/client-code" id="client-code-button"
       class="<%- obj.locks['client-code'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-left icon icon-client-code"></span>
      <span class="media-object pull-right descript"><%- obj.clientCode %></span>
      Client code
    </a>
  </li>
</ul>
