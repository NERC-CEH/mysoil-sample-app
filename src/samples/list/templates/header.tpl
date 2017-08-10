<div class="pull-left">
  <a href="#info" class="menu-link icon icon-menu"></a>
  <button id="surveys-btn" class="icon icon-surveys"></button>
</div>
<div class="pull-right">
  <div class="img-picker icon icon-camera">
    <input type="file" accept="image/*"/>
  </div>
  <button id="create-new-btn" class="icon icon-plus"></button>
</div>

<%  if(obj.training) { %>
<div id="subheader">
  <div class="training">Training</div>
</div>
<% } %>