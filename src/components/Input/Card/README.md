# CARD
---
This Card Component is a container which resembles a playing card in size and shape. It's intended as a linked, short representation of the gym's/trainer's basic informations.

### Attributes

| Name      | Type                 | Required | Default value       | Description                                                                 |
|-----------|----------------------|----------|----------------------|----------------------------------------------------------------------------|
| id        | `string`             | **yes**  |                      | ID of the GYM Or Trainer, shall not be rendered, only used in event        |
| type      | `string`             | **yes**  |                      | Defines if the Card is about GYM or Trainer. Values can be: `'G'` or `'T'` |
| name      | `string`             | **yes**  |                      | Defines the name of the gym / trainer.                                     |
| shortDesc | `string`             | **yes**  |                      | A short description of the GYM or Trainer                                  |
| address   | `string`             | no       | `null`               | If type is `'G'`, address is being rendered.                               |
| phone     | `string`             | no       | `null`               | Phone number of gym/trainer.                                               |
| social    | `object`             | no       | `null`               | Contains the social media links related to  GYM/Trainer                    |
| imgSrc    | `string`             | no       | `defaultPic`         | The path/url to the img in `'string'`                                      |

---

### Events

| Name             | Data in event   | Description                                                                                    |
|------------------|-----------------|------------------------------------------------------------------------------------------------|
| forward            | `Card: object`  | Fired when clicked on the card component, forward the `id` and the `name` of the clicked card  |


**Event ideas**
- Clicking on the address should open a new tab to google maps showing the location, or we could implement a map too and there.  
---
### Features

**Feature ideas**
*Come back to these ideas when CSS needs to be finished*
- On hover handling.. eg.: on hover it shows the opening time, or shows a text.
- If it's opened make the whole card's border green , orange if closes soon , red closed
