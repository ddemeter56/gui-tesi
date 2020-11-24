# CARD
---
This Card Component is a container which resembles a playing card in size and shape. It's intended as a linked, short representation of the gym's/trainer's basic informations.

### Attributes

| Name      | Type                 | Required | Default value       | Description                                                              |
|-----------|----------------------|----------|----------------------|--------------------------------------------------------------------------|
| type      | `string`             | **yes**  |                      | Defines if the Card is about GYM or Trainer. Values can be: `'G'` or `'T'`|
| name      | `string`             | **yes**  |                      | Defines the name of the gym / trainer.                                     |
| phone     | `string`             | **yes**  |                      | Phone number of gym/trainer.                                              |
| address   | `string`             | no       | `null`               | Required if type is `'G'`.                                               |
| social    | `string`             | no       | `null`               |Links to social media                                       |
| imgSrc    | `string`             | no       | `null`               |The path to the img in `'string'`                                       |

---

### Events

on:click forwarding Event should be applied, when we click on the card component it should takes us to gym/trainer's page.
*More Event ideas*
- Clicking on the address should open a new tab to google maps showing the location.
---
### Features

not yet

### Ideas to handle props
Currently we do not know where/how we store the data. We could simply just pass an object and take the relevenat data out and display it.
