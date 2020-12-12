# Gym Form

Simple Form Component for Gym's and its informations.
Form type will be rendered by Wizard.
Languages and Facility types can be chose by dropdowns.
Inputs will be imported from the components folder, make sure to pass the valid character to the input component for its type:
E.G. for the text type:
```jsx
<Input type='C'/>
```




**Attributes**


| Name      | Type                 | Required | Default value       | Description                                                              |
|-----------|----------------------|----------|----------------------|--------------------------------------------------------------------------|
|    |       |   |                      |                          |


**Input Attributes For Gym**

| Name      | Input Type                 | Required | Default value       | Description                                                              |
|-----------|----------------------|----------|----------------------|--------------------------------------------------------------------------|
|  GymName  | Text      |  **yes** |         `""`             |               Max 75 character           |
|  Country  | Text      |  **yes** |         `""`             |               Max 75 character           |
|  Postcode  | Text      |  **yes** |         `""`             |               Max 15 character           |
|  City  | Text      |  **yes** |         `""`             |               Max 100 character           |
|  Street  | Text      |  **yes** |         `""`             |               Max 125 character           |
|  StreetNumber  | Text      |  **yes** |         `""`             |               Max 10 character           |
|  Floor  | Text      |  **yes** |         `""`             |               Max 10 character           |
|  Desc  | Textarea      |  **yes** |         `""`             |               Max 3500 character           |
|  ShortDesc  | Textarea      |  **yes** |         `""`             |               Max 150 character           |
|  Lang  | Text      |  **yes** |         `""`             |               Selected by DropDown ,Max 5 character            |
|  FacebookID  | Text      |  no |         `""`             |               Max 100 character           |
|  InstagramID  | Text     |  no |         `""`             |               Max 100 character           |
|  TwitterID  | Text     |  no |         `""`             |               Max 100 character           |
|  YoutubeID  | Text     |  no |         `""`             |               Max 100 character           |
|  WebLink  | Text     |  no |         `""`             |               Max 100 character           |
|  Phone  | Tel      |  **yes** |         `""`             |               Max 25 character           |

---

**Input Attributes For Facilities**

| Name      | Input Type                 | Required | Default value       | Description                                                              |
|-----------|----------------------|----------|----------------------|--------------------------------------------------------------------------|
|  FacilityName  | Text      |  **yes** |         `""`             |               Dropdown, Max 50 character 
|  MainFacility  | Text      |  **yes** |         `""`             |               Dropdown, Max 50 character 
|  Desc  | Text      |  no |         `""`             |              Max 3500 character 

---

**Input Attributes For Opening**

| Name      | Input Type                 | Required | Default value       | Description                                                              |
|-----------|----------------------|----------|----------------------|--------------------------------------------------------------------------|
|  MondayFrom  | Number      |  **yes** |         **0**             |              Opening Hour 
|  MondayTo  | Number      |  **yes** |         **0**             |              Closing Hour 
|  TueasdayFrom  | Number      |  **yes** |         **0**             |              Opening Hour 
|  TuesdayTo  | Number      |  **yes** |         **0**             |              Closing Hour 
|  WednesdayFrom  | Number      |  **yes** |         **0**             |              Opening Hour 
|  WednesdayTo  | Number      |  **yes** |         **0**             |              Closing Hour 
|  ThursdayFrom  | Number      |  **yes** |         **0**             |              Opening Hour 
|  ThursdayTo  | Number      |  **yes** |         **0**             |              Closing Hour 
|  FridayFrom  | Number      |  **yes** |         **0**             |              Opening Hour 
|  FridayTo  | Number      |  **yes** |         **0**             |              Closing Hour 
|  SaturdayFrom  | Number      |  **yes** |         **0**             |              Opening Hour 
|  SaturdayTo  | Number      |  **yes** |         **0**             |              Closing Hour 
|  SundayFrom  | Number      |  **yes** |         **0**             |              Opening Hour 
|  SundayTo  | Number      |  **yes** |         **0**             |              Closing Hour 



**Features**



**Example**




