# Timeline UI for IP3

This is the beginnings of the timeline UI for the IP3 project.

## How to Use

Below are some quick docs on how to use

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

## Updated

Using a customised verson of skeleton CSS now.
