<script>
    import { Wizard, Step } from '../Wizard/wizard.js';
    import Facilities from './Facilities.svelte';
    import GymGeneral from './GymGeneral.svelte';
    import Opening from './Opening.svelte';
    import Pricing from './Pricing.svelte';
    import { gymInfos, facilityInfos, openingInfos } from './gymDatas.js';  

    let form = {
        gym : {},
        facilities : [],
        openings:[],
        pricing: [],
}
    

    const data = JSON.stringify({"gym":{"name":"testGym4","phoneNumber":"+36302392689","language":"hu-HU","description":"This is my gym description","shortDescription":"This is short desc.","country":"Hungary","postcode":"8200","city":"Veszprém","street":"Feszek","streetNum":"33","floor":"2/a","facebookUserId":"123","instagramUserId":"456","twitterUserId":"789","youtubeUserId":"abc","webPageUserId":"dfg"},"gymOpening":{"mondayFrom":"08:00","mondayTo":"16:00","tuesdayFrom":"08:00","tuesdayTo":"16:00","wednesdayFrom":"08:00","wednesdayTo":"16:00","thursdayFrom":"08:00","thursdayTo":"16:00","fridayFrom":"08:00","fridayTo":"16:00","saturdayFrom":"08:00","saturdayTo":"16:00","sundayFrom":null,"sundayTo":null},"facilities":[{"facility":{"facilityCode":null,"customName":"Sauna","description":"Awesome finnish sauna"},"ticketPricing":[{"categoryType":"Single","ticketType":"daily","amount":10,"currency":"HUF","validForDays":1},{"categoryType":"Single","ticketType":"weekly","amount":50,"currency":"HUF","validForDays":7},{"categoryType":"Single","ticketType":"Monthly","amount":200,"currency":"HUF","validForDays":30},{"categoryType":"Family","ticketType":"small","amount":20,"currency":"HUF","validForDays":1},{"categoryType":"Family","ticketType":"big","amount":200,"currency":"HUF","validForDays":1}]},{"facility":{"facilityCode":null,"customName":"Gym","description":"Awesome muscle gym"},"ticketPricing":[{"categoryType":"Single","ticketType":"daily","amount":10,"currency":"HUF","validForDays":1},{"categoryType":"Single","ticketType":"weekly","amount":50,"currency":"HUF","validForDays":7},{"categoryType":"Single","ticketType":"Monthly","amount":200,"currency":"HUF","validForDays":30},{"categoryType":"Family","ticketType":"small","amount":20,"currency":"HUF","validForDays":1},{"categoryType":"Family","ticketType":"big","amount":200,"currency":"HUF","validForDays":1}],"opening":{"mondayFrom":"08:00","mondayTo":"16:00","tuesdayFrom":"08:00","tuesdayTo":"16:00","wednesdayFrom":"08:00","wednesdayTo":"16:00","thursdayFrom":null,"thursdayTo":null,"fridayFrom":null,"fridayTo":null,"saturdayFrom":null,"saturdayTo":null,"sundayFrom":null,"sundayTo":null}}]});

    function sendData(){

        let newForm = {};
        let {facilityName,...rest} = form.openings[0];
        newForm.gym = form.gym;
        newForm.gymOpening = rest;
        
        newForm.facilities = form.facilities.map(item => {
            let {facility_cd,...rest} = item;
            let newItem = rest;
            newItem.facilityCode = facility_cd;
            return {facility : newItem};
        });

        console.log(newForm);
        newForm.facilities.map(item => { 
            console.log(item);
            form.openings.map(open => {
                console.log(open);
                if((item.facility.facility_name || item.facility.customName) === open.facilityName){
                    console.log(item +  " open egyezes " + open)
                    let {facilityName,...rest} = open;
                    item.opening = rest;
                }
            }) 
            form.pricing.map(price => {
                console.log(price)
                if((item.facility.facility_name || item.facility.customName) === price.selectedFacility){
                    console.log(item + " price egyezes " + price)
                    let {selectedFacility,...rest} = price;
                    item.ticketPricing = rest;
                }
            })
        })
        

        console.log(newForm)
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        
        xhr.open("POST", "http://localhost/api/public/register/gym");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.send(form);

    }
    $: console.log(data);
    $: console.log(form);
</script>

<Wizard on:wizardDone={sendData}>
    <Step
        title={'GYM alapadatok'}
        desc={'A terem alapadatait itt adjuk meg'}
        icon={'icon'}
        active>
        <GymGeneral
            bind:gymGeneralData={form.gym}
            gymGeneralCols={gymInfos.gym} />
    </Step>
    <Step
        title={'GYM facilityk'}
        desc={'A kondihoz tartozó facilityket itt adjuk meg'}
        icon={'icon'}>
        <Facilities
            bind:facilityGeneralData={form.facilities}
            gymFacilityCols={facilityInfos.facilityForm} />
    </Step>
    <Step
        title={'Facility nyitvatartások'}
        desc={'A kondi alap nyitvatartásának és esetleges facilityk nyitvatartásának megadása'}
        icon={'icon'}>
        <Opening
            bind:openingGeneralData={form.openings}
            bind:facilities={form.facilities}
            {openingInfos} />
    </Step>
    <Step title={'GYM Pricing'} desc={'Árlista felvétele'} icon={'icon'} >
        <Pricing selectedFacilities={form.facilities} bind:pricingGeneralData={form.pricing}/>
    </Step>
</Wizard>
