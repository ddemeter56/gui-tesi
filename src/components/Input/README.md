# Input



Renders an `<input type="number">`, `<input type="text">`,  `<textarea>`, `<input type="email">`, `<input type="tel">` depending on attributes.



**Attributes**



| Name      | Type                 | Required | Default value       | Description                                                              |
|-----------|----------------------|----------|----------------------|--------------------------------------------------------------------------|
| type      | `string`             | **yes**  |                      | Defines if the input is a number or a text. Values can be `'N'` or `'C'` |
| editable  | `boolean`            | no       | `true`               | Defines if the input editable or not                                     |
| length    | `number`             | no       | `null`               | Defines maximum length for a text                                        |
| multiline | `boolean`            | no       | `length >= 50`       | Defines if `textarea` should be rendered                                 |
| required  | `boolean`            | no       | `false`              | Defines if not null value is a must                                      |
| validator | `function`           | no       | `() => true`         | Should return with `boolean`                                             |
| value     | `string` or `number` | no       | `null`               | Passes the current value                                                 |
| pattern   | `string`               | no       | `null`               |Can be set on type="E" and type="P"                                      |

**Events**



The component has no events



**Features**


- Phone pattern can / shall be binded to an array contating objects
- Generates `<textarea>` by default if `length` is set higher than 50.

- Validates on `onchange` event

- If not valid (or required and empty) adds `invalid` class to `input` element