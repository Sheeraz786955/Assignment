"use strict";
const describe_city = (city, country = 'Pakistan') => {
    console.log(`${city} is in ${country}`);
};
describe_city('Karachi');
describe_city('Lahore');
describe_city('Multan');
describe_city('London', 'UK');
