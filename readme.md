# Timeline UI for IP3

This is the beginnings of the timeline UI for the IP3 project.

# How to Use

Below are some quick docs on how to use

## Generic Assets / Components

### BUTTONS

```html
<!-- Standard buttons -->
<a class="button" href="#">Anchor button</a>
<button>Button element</button>
<input type="submit" value="submit input">
<input type="button" value="button input">

<!-- Primary buttons -->
<a class="button button-primary" href="#">Anchor button</a>
<button class="button-primary">Button element</button>
<input class="button-primary" type="submit" value="submit input">
<input class="button-primary" type="button" value="button input">
```

### FORMS
```html
<!-- The above form looks like this -->
<form>
  <div class="row">
    <div class="six columns">
      <label for="exampleEmailInput">Your email</label>
      <input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
    </div>
    <div class="six columns">
      <label for="exampleRecipientInput">Reason for contacting</label>
      <select class="u-full-width" id="exampleRecipientInput">
        <option value="Option 1">Questions</option>
        <option value="Option 2">Admiration</option>
        <option value="Option 3">Can I get your number?</option>
      </select>
    </div>
  </div>
  <label for="exampleMessage">Message</label>
  <textarea class="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
  <label class="example-send-yourself-copy">
    <input type="checkbox">
    <span class="label-body">Send a copy to yourself</span>
  </label>
  <input class="button-primary" type="submit" value="Submit">
</form>

<!-- Always wrap checkbox and radio inputs in a label and use a <span class="label-body"> inside of it -->

<!-- Note: The class .u-full-width is just a utility class shorthand for width: 100% -->
```

### TABLES

```html
<table class="u-full-width">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Sex</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dave Gamache</td>
      <td>26</td>
      <td>Male</td>
      <td>San Francisco</td>
    </tr>
    <tr>
      <td>Dwayne Johnson</td>
      <td>42</td>
      <td>Male</td>
      <td>Hayward</td>
    </tr>
  </tbody>
</table>
```

## Custom Components

### Timelines

To create a timeline, create a timeline div, then put an event inside it. You can use `left` or `right` on the `event` block to position each event.

```html
<div class="timeline">

<div class="event right">

  <div class="details">
    <h2>Event Name</h2>
    <p class="info"><i class="far fa-calendar"></i> 1st January 2018 <i class="far fa-clock"></i> 22:45 <i class="fas fa-paperclip"></i> 4</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi numquam officia ipsa quasi, ex est ullam delectus ducimus porro, inventore repellat repudiandae labore corporis facilis atque tempora soluta, laboriosam dicta!</p>
    <p class="button-row">
      <a href="#" class="button button-primary green"><i class="fas fa-eye"></i> View Event</a>
      <a href="#" class="button button-primary blue"><i class="fas fa-pencil-alt"></i> Quick Edit</a>
      <a href="#" class="button button-primary red linked-events"><i class="fas fa-link"></i> <span>Show</span> Linked Events <strong>2</strong></a>
    </p>
  </div>

</div>

</div>
```

### Modals

To create a modal overlay box, add the following styled code:

```html
<div class="modal">

  <div class="modal-content">

    <span class="close">&times;</span>

    <!-- PUT ANYTHING HERE  -->
    <h2><i class="fas fa-calendar-alt"></i> Create New Something</h2>
    <p>This will do something with an overlay modal.</p>

  </div>

</div>
```

### Timeline Register

To create a timeline register, put the following inside a `<div class="register">` tag:
```html
<div class="tline">

  <!-- Event Count -->
  <div class="events">
    <i class="fas fa-exclamation-triangle"></i>
    <span>25</span>
  </div>

  <!--       Timeline Details -->
  <div class="details">
    <p class="details__name">Timeline Name</p>
    <p class="details__time"><i class="fas fa-calendar-alt"></i> Created 3 hours ago</p>
    <p><a href="#" class="button button-primary green">View Event</a></p>
  </div>

  <!--       Timeline Buttons -->
  <div class="buttons">
    <ul>
      <li><a href="#"><i class="fas fa-trash-alt"></i><span>Delete Event</span></a></li>
      <li><a href="#"><i class="fas fa-pencil-alt"></i><span>Edit Event</span></a></li>
    </ul>
  </div>

</div>
```

## Updated

Using a customised verson of skeleton CSS now.
