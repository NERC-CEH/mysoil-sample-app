<ul class="table-view core inputs no-top <%- obj.isSynchronising ? 'disabled' : '' %>">
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/field-name" id="field-name-button"
       class="<%- obj.locks['field-name'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%- obj.fieldName %></span>
      Field name
    </a>
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/field-size" id="field-size-button"
       class="<%- obj.locks['field-size'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%- obj.fieldSize %></span>
      Field size
    </a>
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/depth" id="depth-button"
       class="<%- obj.locks['depth'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%- obj.depth %></span>
      Sample depth
    </a>
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/type" id="type-button"
       class="<%- obj.locks['type'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%- obj.type %></span>
      Sample type
    </a>
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/soil" id="soil-button"
       class="<%- obj.locks['soil'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.soil %></span>
      Soil type
    </a>
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/crop-present" id="crop-present-button"
       class="<%- obj.locks['crop-present'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.cropPresent %></span>
      Crop, present
    </a>
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/crop-future" id="crop-future-button"
       class="<%- obj.locks['crop-future'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.cropFuture %></span>
      Crop, future
    </a>
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/straw" id="straw-button"
       class="<%- obj.locks['straw'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.straw %></span>
      Straw
    </a>
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/manure" id="manure-button"
       class="<%- obj.locks['manure'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.manure %></span>
      Manure
    </a>
  </li>
  <li class="table-view-cell">
    <a href="#samples/<%- obj.id %>/edit/comment" id="comment-button"
       class="<%- obj.locks['comment'] ? 'lock' : 'navigate-right' %>">
      <span class="media-object pull-right descript"><%= obj.comment %></span>
      Other information
    </a>
  </li>
</ul>
