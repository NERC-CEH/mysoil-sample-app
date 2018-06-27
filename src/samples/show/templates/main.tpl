<div class="info-message">
  <p>This record has been submitted and cannot be edited within this App.
    <% if (obj.id) { %>
    <a href="<%= obj.site_url %>/poc-user-edit?sample_id=<%= obj.id %>"
       class="btn btn-block btn-narrow">
      Edit on iRecord Soil
      <span class="pull-right icon icon-link-ext"></span>
    </a>
    <% } else { %>
      Go to the <a href="<%= obj.site_url %>">iRecord Soil website</a> to edit.</p>
    <% } %>
</div>

<ul class="table-view core inputs info no-top">
  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj.uid %></span>
    Our reference
  </li>

  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj['your-ref'] %></span>
    Your reference
  </li>

  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj.date %></span>
    Date
  </li>
  
  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj.locationName %></span>
    <span class="media-object pull-right descript"><%- obj.location %></span>
    Location
  </li>

  <% if (obj['country']) { %>
    <li class="table-view-cell">
      <span class="media-object pull-right descript"><%- obj.country %></span>
      Country
    </li>
  <% } %>

  <li class="table-view-cell">
    <% if (obj['depth']) { %>
      <span class="media-object pull-right descript"><%- obj['depth'] %></span>
    <% } %>
    <% if (obj['sample-type']) { %>
      <span class="media-object pull-right descript"><%- obj['sample-type'] %></span>
    <% } %>
    <% if (obj['soil-type']) { %>
      <span class="media-object pull-right descript"><%- obj['soil-type'] %></span>
    <% } %>
    <% if (obj['calcareous']) { %>
      <span class="media-object pull-right descript"><%- obj['calcareous'] %></span>
    <% } %>
    <% if (obj['structure-score']) { %>
      <span class="media-object pull-right descript"><%- obj['structure-score'] %></span>
    <% } %>
    <% if (obj['structure-notes']) { %>
      <span class="media-object pull-right descript"><%- obj['structure-notes'] %></span>
    <% } %>
    <% if (obj['land-use']) { %>
      <span class="media-object pull-right descript"><%- obj['land-use'] %></span>
    <% } %>
    <% if (obj['sample-notes']) { %>
      <span class="media-object pull-right descript"><%- obj['sample-notes'] %></span>
    <% } %>
    Soil data
  </li>

  <li class="table-view-cell">
    <% if (obj['field-name']) { %>
      <span class="media-object pull-right descript"><%- obj['field-name'] %></span>
    <% } %>
    <% if (obj['field-size']) { %>
      <span class="media-object pull-right descript"><%- obj['field-size'] %></span>
    <% } %>
    <% if (obj['crop-present']) { %>
      <span class="media-object pull-right descript"><%- obj['crop-present'] %></span>
    <% } %>
    <% if (obj['crop-future']) { %>
      <span class="media-object pull-right descript"><%- obj['crop-future'] %></span>
    <% } %>
    <% if (obj['straw']) { %>
      <span class="media-object pull-right descript"><%- obj['straw'] %></span>
    <% } %>
    <% if (obj['manure']) { %>
      <span class="media-object pull-right descript"><%- obj['manure'] %></span>
    <% } %>
    <% if (obj['tillage']) { %>
      <span class="media-object pull-right descript"><%- obj['tillage'] %></span>
    <% } %>
    <% if (obj['habitat']) { %>
      <span class="media-object pull-right descript"><%- obj['habitat'] %></span>
    <% } %>
    <% if (obj['field-notes']) { %>
      <span class="media-object pull-right descript"><%- obj['field-notes'] %></span>
    <% } %>
    Site data
  </li>
  
  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj['lab-name'] %></span>
    <span class="media-object pull-right descript"><%- obj['client-code'] %></span>
    Laboratory data
  </li>

  <% if (obj.group_title) { %>
  <li class="table-view-cell">
    <span class="media-object pull-left icon icon-users"></span>
    <span class="media-object pull-right descript"><%- obj.group_title %></span>
    Activity
  </li>
  <% } %>
  <% if (obj.media.length) { %>
    <li id="img-array">
      <% obj.media.each((image) =>{ %>
        <img src="<%- image.getURL() %>" alt="">
      <% }) %>
    </li>
  <% } %>
</ul>

<% if (obj.useExperiments) { %>
  <button id="resend-btn" class="btn btn-narrow btn-negative btn-block">Resend the record</button>
<% } %>

<div id="occurrence-id"><%- obj.cid %></div>