<ul class="table-view core inputs no-top <%- obj.isSynchronising ? 'disabled' : '' %>">
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/field-name" id="field-name-button"
       class="<%- obj.locks['field-name'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%- obj.fieldName %></span>
      <%- obj.titles['field-name'] %>
    </a>
  </li>

  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/field-size" id="field-size-button"
       class="<%- obj.locks['field-size'] ? 'lock' : 'navigate-right' %>">
      <% if (obj.errors['field-size']) { %>
      <span class="media-object pull-right descript error"><%- obj.errors['field-size'] %></span>
      <% } else { %>
      <span class="media-object pull-right descript"><%- obj.fieldSize %></span>
      <% } %>
      <%- obj.titles['field-size'] %>
    </a>
  </li>

  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/crop-present" id="crop-present-button"
       class="<%- obj.locks['crop-present'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.cropPresent %></span>
      <%- obj.titles['crop-present'] %>
    </a>
  </li>

  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/crop-future" id="crop-future-button"
       class="<%- obj.locks['crop-future'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.cropFuture %></span>
      <%- obj.titles['crop-future'] %>
    </a>
  </li>

  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/straw" id="straw-button"
       class="<%- obj.locks['straw'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.straw %></span>
      <%- obj.titles['straw'] %>
    </a>
  </li>

  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/manure" id="manure-button"
       class="<%- obj.locks['manure'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.manure %></span>
      <%- obj.titles['manure'] %>
    </a>
  </li>

  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/tillage" id="tillage-button"
       class="<%- obj.locks['tillage'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.tillage %></span>
      <%- obj.titles['tillage'] %>
    </a>
  </li>

  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/habitat" id="habitat-button"
       class="<%- obj.locks['habitat'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.habitat %></span>
      <%- obj.titles['habitat'] %>
    </a>
  </li>
  
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/field-notes" id="field-notes-button"
       class="<%- obj.locks['field-notes'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.fieldNotes %></span>
      <%- obj.titles['field-notes'] %>
    </a>
  </li>
</ul>
