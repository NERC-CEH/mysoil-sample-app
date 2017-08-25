<div class="info-message">
  <p>This record has been submitted and cannot be edited within this App.
    <% if (obj.id) { %>
    <a href="<%= obj.site_url %>/record-details?sample_id=<%= obj.id %>"
       class="btn btn-block btn-narrow">
      View on mySoil Sample
      <span class="pull-right icon icon-link-ext"></span>
    </a>
    <% } else { %>
      Go to the <a href="<%= obj.site_url %>">mySoil Sample website</a> to edit.</p>
    <% } %>
</div>

<ul class="table-view core inputs info no-top">
  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj.locationName %></span>
    <span class="media-object pull-right descript"><%- obj.location %></span>
    Location
  </li>
  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj.date %></span>
    Date
  </li>
  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj.country %></span>
    Country
  </li>
  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj.number %></span>
    Sample number
  </li>
  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj.reference %></span>
    Your ref.
  </li>
  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj['field-name'] %></span>
    <span class="media-object pull-right descript"><%- obj['field-size'] %></span>
    <span class="media-object pull-right descript"><%- obj.depth %></span>
    <span class="media-object pull-right descript"><%- obj.type %></span>
    <span class="media-object pull-right descript"><%- obj.soil %></span>
    <span class="media-object pull-right descript"><%- obj['crop-present'] %></span>
    <span class="media-object pull-right descript"><%- obj['crop-future'] %></span>
    <span class="media-object pull-right descript"><%- obj.straw %></span>
    <span class="media-object pull-right descript"><%- obj.manure %></span>
    <span class="media-object pull-right descript"><%- obj.comment %></span>
    Site
  </li>
  <li class="table-view-cell">
    <span class="media-object pull-right descript"><%- obj['lab-name'] %></span>
    <span class="media-object pull-right descript"><%- obj['client-code'] %></span>
    Laboratory
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