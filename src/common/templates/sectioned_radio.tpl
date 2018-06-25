<%/*
Receives an object with the following elements.
  message - Some text about the attribute.
  selection - An array of objects, each having a value property or a section property.
  selected - One of the values in selection.
*/%>

<% if (obj.message) { %>
<div class="info-message">
  <p><%= obj.message %></p>
</div>
<% } %>

<% let sectionOpen = false; %>
<% obj.selection.forEach((option) => { %>
  <% if (option.section) { %>

    <% if (sectionOpen) { %>
    </div>
    <% } %>

    <div class="item radio-section-head">
      <a class="navigate-right">
        <%= option.section %>
      </a>
    </div>

    <div class="radio-section">
    <% sectionOpen = true; %>

  <% } else { %>
    <label class="item item-radio">
      <input type="radio" name="group" value="<%= option.value %>" <%- option.value === obj.selected ? 'checked' : ''%>>
      <div class="radio-content">
        <div class="item-content">
          <%= option.label || option.value %>
        </div>
        <i class="radio-icon icon-check"></i>
      </div>
    </label>
  <% } %>
<% }) %>
</div>
