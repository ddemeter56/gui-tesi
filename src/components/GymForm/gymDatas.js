export const gymInfos ={
    "gymForm":[
        {   
            "value":"gymName",
            "inputType":"Input",
            "maxLength":75,
            "required":true,
            "name":"GYM NAME",
            "type":"C",
            
        },
        {
            "value":"gymCountry",
            "inputType":"Input",
            "maxLength":75,
            "required":true,
            "name":"Country",
            "type":"C"
        },
        {
            "value":"gymPostCode",
            "inputType":"Input",
            "maxLength":15,
            "required":true,
            "name":"Postcode",
            "type":"C"
        },
        {
            "value":"gymCity",
            "inputType":"Input",
            "maxLength":100,
            "required":true,
            "name":"City",
            "type":"C"
        },
        {
            "value":"gymStreet",
            "inputType":"Input",
            "maxLength":75,
            "required":true,
            "name":"Street",
            "type":"C"
        },
        {
            "value":"gymStreetNumber",
            "inputType":"Input",
            "maxLength":10,
            "required":true,
            "name":"Street Number",
            "type":"C"
        },
        {
            "value":"gymFloor",
            "inputType":"Input",
            "maxLength":10,
            "required":true,
            "name":"Floor",
            "type":"C"
        },
        {
            "value":"gymDesc",
            "inputType":"Input",
            "maxLength":3500,
            "required":true,
            "name":"Description",
            "type":"C"
        },
        {
            "value":"gymShortDesc",
            "inputType":"Input",
            "maxLength":150,
            "required":true,
            "name":"Short Description",
            "type":"C"
        },
        {
            "value":"gymLang",
            "inputType":"DropDown",            
            "required":true,
            "name":"Language"            
        },
        {
            "value":"gymFace",
            "inputType":"Input",
            "maxLength":75,
            "required":false,
            "name":"Facebook",
            "type":"C"
        },
        {
            "value":"gymInsta",
            "inputType":"Input",
            "maxLength":75,
            "required":false,
            "name":"Instagram",
            "type":"C"
        },
        {
            "value":"gymYoutube",
            "inputType":"Input",
            "maxLength":75,
            "required":false,
            "name":"Youtube",
            "type":"C"
        },
        {
            "value":"gymWebsite",
            "inputType":"Input",
            "maxLength":75,
            "required":false,
            "name":"Website",
            "type":"C"
        },
        {
            "value":"gymPhone",
            "inputType":"Input",
            "maxLength":25,
            "required":true,
            "name":"Phone",
            "type":"P"
        }
    ]    
};

export const facilityInfos={
    "facilityForm":[
        {
            "value":"facilityName",
            "inputType":"DropDown",
            "required":true,
            "name":"Facility Name",
            "facilities":[{name:"gym"},{name:"crossfit"},{name: "cardio"},{name: "sck my"}]
        },
        {
            "value":"mainFacility",
            "inputType":"DropDown",
            "required":true,
            "name":"Main Facility"
        },
        {
            "value":"facilityDesc",
            "inputType":"Input",
            "maxLength":3500,
            "type":"C",
            "required":false,
            "name":"Description"
        }
    ]    
};

export const openingInfos={
    "openingHoursForm":[
        {
            "value":"defaultFrom",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Default Opening Hour"
        },
        {
            "value":"defaultTo",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Default Closing Hour"
        },
        {
            "value":"mondayFrom",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Opening Hour on Monday"
        },
        {
            "value":"mondayTo",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Closing Hour on Monday",
        },
        {
            "value":"tuesdayFrom",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Opening Hour on Tuesday",
        },
        {
            "value":"tuesdayTo",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Closing Hour on Tuesday",
        },
        {
            "value":"wednesdayFrom",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Opening Hour on Wednesday",
        },
        {
            "value":"wednesdayTo",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Closing Hour on Wednesday",
        },
        {
            "value":"thursdayFrom",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Opening Hour on Thursday",
        },
        {
            "value":"thursdayTo",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Closing Hour on Thursday",
        },
        {
            "value":"fridayFrom",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Opening Hour on Friday",
        },
        {
            "value":"fridayTo",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Closing Hour on Friday",
        },
        {
            "value":"saturdayFrom",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Opening Hour on Saturday",
        },
        {
            "value":"saturdayTo",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Closing Hour on Saturday",
        },
        {
            "value":"sundayFrom",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Opening Hour on Sunday",
        },
        {
            "value":"sundayTo",
            "inputType":"Number",
            "type":"T",
            "required":true,
            "name":"Closing Hour on Sunday",
        },
        
        
    ]    
};


