# Label

Renders an `<label></label>`. The related input is needs to be placed inside it. eg.: `<Label><Input /></Label>` 

**Attributes**


| Name      | Type                 | Required | Default value       | Description                                                              |
|-----------|----------------------|----------|----------------------|-------------------------------------------------------------------------|
| label  | `string`            | yes       | `null`              | The text of the label   
| required  | `boolean`            | no       | `false`              | Indicating if the related field is required                             |
                         |

**Events**

This component has no events



**Features**
This component has no features

**Example**

```jsx
	<Label label={"Ez a labelem"} required>
		<Input type="C"/>
  </Label>
```