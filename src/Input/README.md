# Components

- [Input](#input)

---

# Textbox

Renders an <input type="number">, <input type="text"> or <textarea> depending on attributes. + Majd Alex írd ide, hogy email teló stb

*Attributes*

| Name      | Type                 | Required | Default value        | Description                                                              |
|-----------|----------------------|----------|----------------------|--------------------------------------------------------------------------|
| type      | string             | *yes*  |                      | Defines if the input is a number or a text. Values can be 'N' or 'C' |
| editable  | boolean            | no       | true               | Defines if the input editable or not                                     |
| length    | number             | no       | null               | Defines maximum length for a text                                        |
| multiline | boolean            | no       | length >= 50       | Defines if textarea should be rendered                                 |
| required  | boolean            | no       | false              | Defines if not null value is a must                                      |
| validator | function           | no       | () => true         | Should return with boolean                                             |
| value     | string or number | no       | null               | Passes the current value                                                 |

*Events*

The component has no events

*Features*

- Generates <textarea> by default if length is set higher than 50.

---