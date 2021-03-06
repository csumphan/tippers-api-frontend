# Tippers API Frontend
This is a user interface allowing users to interact/set up their TIPPERS instance. The user interface is customized by editing a JSON schema file.

![tippers-api-frontend-1](https://user-images.githubusercontent.com/19628690/53596154-fc233180-3b53-11e9-8197-43ab24b1e53c.gif)

## How to Setup/Installation
**Step 1:** git clone this repo:

```bash
git clone git@github.com:csumphan/tippers-api-frontend.git
```

**Step 2:** cd to the cloned repo:

```bash
cd tippers-api-frontend
```

**Step 3:** Install the Application with `yarn`


**Step 4:** Run the Application in development mode using `yarn start`

## How to Create Production Build

**Step 1:** Complete repo setup/installation


**Step 2:** Run the webpack build using `yarn build`

You can find the build in build/ in the project's root directory

## Usage
The UI is completely rendered based of the information in `formSchema.json`. Each outer key of the schema represents a path to view/edit/create that specified object type.

The following is an example of a single entry in the schema. 

```json
{
"spaceType": {
    "label": "Space Types",
    "path": "/spacetype",
    "definitionsUsed": ["property"],
    "form": {
      "title": "Spacetype Form",
      "description": "Add or edit spacetype",
      "type": "object",
      "required": [
        "id",
        "label"
      ],
      "properties": {
        "id": {
          "type": "string",
          "title": "ID"
        },
        "label": {
          "type": "string",
          "title": "Label"
        },
        "description": {
          "type": "string",
          "title": "Description"
        },
        "subTypeOf": {
          "type": "spaceType",
          "title": "Subtype of"
        },
        "properties": {
          "title": "Properties",
          "type": "array",
          "items": {
            "type": "object",
            "$ref": "#/definitions/property"
          }
        }
      }
    },
    "ui": {
      "id": {
        "ui:placeholder": "BO_Conference_Room"
      },
      "subTypeOf": {
        "ui:widget": "typeahead",
        "ui:placeholder": "BO_Conference_Room (optional)"
      },
      "properties": {
        "ui:options": {
          "orderable": false
        },
        "items": {
          "id": {
            "ui:placeholder": "BO_Conference_Room_Occupancy"
          },
          "label": {
            "ui:placeholder": "Occupancy"
          },
          "description": {
            "ui:placeholder": "Description about Room Occupancy"
          },
          "observedBy": {
            "ui:widget": "typeahead",
            "ui:placeholder": "3022-clwa-209"
          },
          "observation_type": {
            "ui:widget": "typeahead",
            "ui:placeholder": "BO_Accelerometer_Reading"
          }
        }
      }
    }
  }
}
```
This will generate a new route with the path of `/spacetype` in the web application. This will also generate a table view of the `spacetype` from retrieving data from the path specified with the `path` key. Form pages are created which is used to add/edit `spacetype` to tippers. 

The following images are what is created from the entry above.

<img width="420" alt="screenshot 2019-02-28 16 36 21" src="https://user-images.githubusercontent.com/19628690/53608316-102c5a80-3b77-11e9-87be-977e8f28318a.png"> <img width="420" alt="screenshot 2019-02-28 16 36 30" src="https://user-images.githubusercontent.com/19628690/53608312-0d316a00-3b77-11e9-8c29-da691e0a7d74.png">


## Form Schema Properties Doc
The following are description of key and values that can be used in the `formSchema.json`

### Route Object Properties (Outermost keys)
Key                 | Value Type  | Required    | Description    | 
-------------------- | --------- |--------------- |-------------- | 
`label`            | `string` | Yes |The displayed title for the table view                      
`path`            | `array of string` |  Yes | The path to a specific endpoint to TIPPERS
`definitionsUsed`    | `number`  | Yes, if used $ref in `form` object|  The key of definitions used within the form object                      
`form`          | `object`  | Yes   | The object describing what will be on the add/edit form
`ui`          | `object`  | Yes   | The object describing how the form will look ( used mainly for placeholders)


### Form Object Properties 

The `form` key describes how the form for each route will be like. The following properties are used to create the form. More reference to what can be added to the `form` object can be found in the form library documentation: https://react-jsonschema-form.readthedocs.io/en/latest/

Also see the library's playground to test out what form field customization you need: https://mozilla-services.github.io/react-jsonschema-form/

Key                 | Value Type  | Required    | Description    | 
-------------------- | --------- |--------------- |-------------- | 
`title`            | `string` | Yes |The displayed title for the form view                      
`description`            | `string` |  Yes | The description text displayed underneath `title`
`type`    | `string`  | Yes|  Describes the form data on submit (will almost always be "object")                      
`required`          | `array of properties`  | Yes   | Describes which properties is required for submission
`properties`          | `object`  | Yes   | The object describes what fields will be on the form, allowing for customization for each field


### UI Object Properties

The `ui` key describes how to style each field in the form. Using the key in `form.properties` to match the field, you can add placeholders and change styling of the field.
