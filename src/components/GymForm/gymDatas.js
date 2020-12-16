export const gymInfos ={
    "gym":[
        {   
            "value":"name",
            "inputType":"Input",
            "maxLength":75,
            "required":true,
            "label":"Name",
            "type":"C",
            
        },
        {
            "value":"country",
            "inputType":"Input",
            "maxLength":75,
            "required":true,
            "label":"Country",
            "type":"C"
        },
        {
            "value":"postCode",
            "inputType":"Input",
            "maxLength":15,
            "required":true,
            "label":"Postcode",
            "type":"C"
        },
        {
            "value":"city",
            "inputType":"Input",
            "maxLength":100,
            "required":true,
            "label":"City",
            "type":"C"
        },
        {
            "value":"street",
            "inputType":"Input",
            "maxLength":75,
            "required":true,
            "label":"Street",
            "type":"C"
        },
        {
            "value":"streetNumber",
            "inputType":"Input",
            "maxLength":10,
            "required":true,
            "label":"Street Number",
            "type":"C"
        },
        {
            "value":"floor",
            "inputType":"Input",
            "maxLength":10,
            "required":false,
            "label":"Floor",
            "type":"C"
        },
        {
            "value":"description",
            "inputType":"Input",
            "maxLength":3500,
            "required":true,
            "label":"Description",
            "type":"C"
        },
        {
            "value":"shortDescription",
            "inputType":"Input",
            "maxLength":150,
            "required":true,
            "label":"Short Description",
            "type":"C"
        },
        {
            "value":"facebookUserId",
            "inputType":"Input",
            "maxLength":75,
            "required":false,
            "label":"Facebook",
            "type":"C"
        },
        {
            "value":"instagramUserId",
            "inputType":"Input",
            "maxLength":75,
            "required":false,
            "label":"Instagram",
            "type":"C"
        },
        {
            "value":"youtubeUserId",
            "inputType":"Input",
            "maxLength":75,
            "required":false,
            "label":"Youtube",
            "type":"C"
        },
        {
            "value":"twitterUserId",
            "inputType":"Input",
            "maxLength":75,
            "required":false,
            "label":"Twitter",
            "type":"C"
        },
        {
            "value":"webPageUserId",
            "inputType":"Input",
            "maxLength":75,
            "required":false,
            "label":"Website",
            "type":"C"
        },
        {
            "value":"phoneNumber",
            "inputType":"Input",
            "maxLength":25,
            "required":true,
            "label":"Phone",
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
            "facilities":[{"facility_cd":69,"facility_name":"Cardio zone","main_facility":true,"facility_category":"Cardio zone"}, 
            {"facility_cd":70,"facility_name":"Cycling studio","main_facility":false,"facility_category":"Cardio zone"}, 
            {"facility_cd":71,"facility_name":"Beat","main_facility":false,"facility_category":"Cardio zone"}, 
            {"facility_cd":72,"facility_name":"Indoor running track","main_facility":false,"facility_category":"Cardio zone"}, 
            {"facility_cd":73,"facility_name":"Gym zone","main_facility":true,"facility_category":"Gym zone"}, 
            {"facility_cd":74,"facility_name":"Free weights area","main_facility":false,"facility_category":"Gym zone"}, 
            {"facility_cd":75,"facility_name":"Weight lifting","main_facility":false,"facility_category":"Gym zone"}, 
            {"facility_cd":76,"facility_name":"Strengh area","main_facility":false,"facility_category":"Gym zone"}, 
            {"facility_cd":77,"facility_name":"Skill and Functional Zone","main_facility":true,"facility_category":"Skill and Functional Zone"}, 
            {"facility_cd":78,"facility_name":"Functional Area","main_facility":false,"facility_category":"Skill and Functional Zone"}, 
            {"facility_cd":79,"facility_name":"Playground","main_facility":false,"facility_category":"Skill and Functional Zone"}, 
            {"facility_cd":80,"facility_name":"Crossfit","main_facility":false,"facility_category":"Skill and Functional Zone"}, 
            {"facility_cd":81,"facility_name":"Group exercise room","main_facility":true,"facility_category":"Group exercise room"}, 
            {"facility_cd":82,"facility_name":"Yoga","main_facility":false,"facility_category":"Group exercise room"}, 
            {"facility_cd":83,"facility_name":"Dance centers","main_facility":false,"facility_category":"Group exercise room"}, 
            {"facility_cd":84,"facility_name":"Pilates Centers","main_facility":false,"facility_category":"Group exercise room"}, 
            {"facility_cd":85,"facility_name":"Aerobic Centers","main_facility":false,"facility_category":"Group exercise room"}, 
            {"facility_cd":86,"facility_name":"Structured Activities","main_facility":true,"facility_category":"Structured Activities"}, 
            {"facility_cd":87,"facility_name":"Squash","main_facility":false,"facility_category":"Structured Activities"}, 
            {"facility_cd":88,"facility_name":"Climbing wall","main_facility":false,"facility_category":"Structured Activities"}, 
            {"facility_cd":89,"facility_name":"Associated functions","main_facility":true,"facility_category":"Associated functions"}, 
            {"facility_cd":90,"facility_name":"Locker Rooms","main_facility":false,"facility_category":"Associated functions"}, 
            {"facility_cd":91,"facility_name":"Sauna","main_facility":false,"facility_category":"Associated functions"}, 
            {"facility_cd":92,"facility_name":"Steam Room","main_facility":false,"facility_category":"Associated functions"}, 
            {"facility_cd":93,"facility_name":"Hot tub","main_facility":false,"facility_category":"Associated functions"}, 
            {"facility_cd":94,"facility_name":"Outdoor Activities","main_facility":true,"facility_category":"Outdoor Activities"}, 
            {"facility_cd":95,"facility_name":"Golf","main_facility":false,"facility_category":"Outdoor Activities"}, 
            {"facility_cd":96,"facility_name":"Outdoor running tack","main_facility":false,"facility_category":"Outdoor Activities"}, 
            {"facility_cd":97,"facility_name":"Lounge","main_facility":false,"facility_category":"Outdoor Activities"}]
        },
    ]    
};

export const openingInfos={
    "openingHoursForm":[
        {
            "value":"facilityName",
            "inputType":"Input",
            "type":"C",
            "required":false,
            "name":"Opening time for:"
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


