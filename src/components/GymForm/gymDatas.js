export const gymInfos ={
    "gym":[
        {   
            "value":"referenceCode",
            "inputType":"Input",
            "maxLength":75,
            "required":true,
            "label":"Reference Code",
            "type":"C",
            
        },
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
            "value":"postcode",
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
            "value":"streetNum",
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
            "value":"phoneNumber",
            "inputType":"Input",
            "maxLength":25,
            "required":true,
            "label":"Phone",
            "type":"P"
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
            "facilities":[{"facility_cd":1,"facility_name":"Cardio zone","main_facility":true,"facility_category":"Cardio zone"}, 
            {"facility_cd":2,"facility_name":"Cycling studio","main_facility":false,"facility_category":"Cardio zone"}, 
            {"facility_cd":3,"facility_name":"Beat","main_facility":false,"facility_category":"Cardio zone"}, 
            {"facility_cd":4,"facility_name":"Indoor running track","main_facility":false,"facility_category":"Cardio zone"}, 
            {"facility_cd":5,"facility_name":"Gym zone","main_facility":true,"facility_category":"Gym zone"}, 
            {"facility_cd":6,"facility_name":"Free weights area","main_facility":false,"facility_category":"Gym zone"}, 
            {"facility_cd":7,"facility_name":"Weight lifting","main_facility":false,"facility_category":"Gym zone"}, 
            {"facility_cd":8,"facility_name":"Strengh area","main_facility":false,"facility_category":"Gym zone"}, 
            {"facility_cd":9,"facility_name":"Skill and Functional Zone","main_facility":true,"facility_category":"Skill and Functional Zone"}, 
            {"facility_cd":10,"facility_name":"Functional Area","main_facility":false,"facility_category":"Skill and Functional Zone"}, 
            {"facility_cd":11,"facility_name":"Playground","main_facility":false,"facility_category":"Skill and Functional Zone"}, 
            {"facility_cd":12,"facility_name":"Crossfit","main_facility":false,"facility_category":"Skill and Functional Zone"}, 
            {"facility_cd":13,"facility_name":"Group exercise room","main_facility":true,"facility_category":"Group exercise room"}, 
            {"facility_cd":14,"facility_name":"Yoga","main_facility":false,"facility_category":"Group exercise room"}, 
            {"facility_cd":15,"facility_name":"Dance centers","main_facility":false,"facility_category":"Group exercise room"}, 
            {"facility_cd":16,"facility_name":"Pilates Centers","main_facility":false,"facility_category":"Group exercise room"}, 
            {"facility_cd":17,"facility_name":"Aerobic Centers","main_facility":false,"facility_category":"Group exercise room"}, 
            {"facility_cd":18,"facility_name":"Structured Activities","main_facility":true,"facility_category":"Structured Activities"}, 
            {"facility_cd":19,"facility_name":"Squash","main_facility":false,"facility_category":"Structured Activities"}, 
            {"facility_cd":20,"facility_name":"Climbing wall","main_facility":false,"facility_category":"Structured Activities"}, 
            {"facility_cd":21,"facility_name":"Associated functions","main_facility":true,"facility_category":"Associated functions"}, 
            {"facility_cd":22,"facility_name":"Locker Rooms","main_facility":false,"facility_category":"Associated functions"}, 
            {"facility_cd":23,"facility_name":"Sauna","main_facility":false,"facility_category":"Associated functions"}, 
            {"facility_cd":24,"facility_name":"Steam Room","main_facility":false,"facility_category":"Associated functions"}, 
            {"facility_cd":25,"facility_name":"Hot tub","main_facility":false,"facility_category":"Associated functions"}, 
            {"facility_cd":26,"facility_name":"Outdoor Activities","main_facility":true,"facility_category":"Outdoor Activities"}, 
            {"facility_cd":27,"facility_name":"Golf","main_facility":false,"facility_category":"Outdoor Activities"}, 
            {"facility_cd":28,"facility_name":"Outdoor running tack","main_facility":false,"facility_category":"Outdoor Activities"}, 
            {"facility_cd":29,"facility_name":"Lounge","main_facility":false,"facility_category":"Outdoor Activities"}]
        },
    ]    
};

export const openingInfos={
    "openingHoursForm":[
        {
            "value":"facilityName",
            "inputType":"Input",
            "type":"C",
            "maxLength" : 50,
            "required":false,
            "name":"Open times"
        },
        {
            "value":"mondayFrom",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Monday from"
        },
        {
            "value":"mondayTo",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Monday to",
        },
        {
            "value":"tuesdayFrom",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Tuesday from",
        },
        {
            "value":"tuesdayTo",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Tuesday to",
        },
        {
            "value":"wednesdayFrom",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Wednesday from",
        },
        {
            "value":"wednesdayTo",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Wednesday to",
        },
        {
            "value":"thursdayFrom",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Thursday from",
        },
        {
            "value":"thursdayTo",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Thursday to",
        },
        {
            "value":"fridayFrom",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Friday from",
        },
        {
            "value":"fridayTo",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Friday to",
        },
        {
            "value":"saturdayFrom",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Saturday from",
        },
        {
            "value":"saturdayTo",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Saturday to",
        },
        {
            "value":"sundayFrom",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Sunday from",
        },
        {
            "value":"sundayTo",
            "inputType":"Number",
            "type":"T",
            "maxLength" : 5,
            "required":true,
            "name":"Sunday to",
        },
        
        
    ]    
};


