// DAY 3 Task
// <----**********-------->

// 1)json(iterate over all loops)
const json = [
    {
      id: "1",
      name: "veera",
      number: "1234567890",
      email: "xyz@gmail.com",
    },
    {
        id: "2",
        name: "prabu",
        number: "0987654321",
        email: "zyx@gmail.com",
    },
  ];
  
  for (const obj of json) {
    console.log(obj.id);

  }
  for(let key in json){
    console.log(json[key]['name'])
  }
for(let i=0;i<json.length;i++){
    console.log(json[i].number);
}
json.forEach((obj)=>{
    console.log(obj.email);
})


// <--------------------------------------------------->


// 2)Resume in json format
let myResume={
    "basics": {
      "name": "veerappan S",
      "label": "Full Stack Developer",
      "email": "prabuveer4@gmail.com",
      "phone": "+91-564125",
      "location": {
        "address": "36 subramaniya swamy koil street",
        "postalCode": "py 253125",
        "city": "puducherry",
        "countryCode": "India",
        "region": "Puducherry"
      },

    },
    "work": [{
      "name": "Classique Division",
      "position": "Maintenance incharge",
      "startDate": "2015-01-01",
      "endDate": "2018-01-01",
      "summary": "AProduction Person, who drives success and directs high-producing teams. Experienced in producing good products for the customers and develop a loyal team to the organization.",
    }],
    
    "education": [{
      "institution": "Alpha",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2015-01-01",
      "score": "8.0",
      "courses": [
        "Full stack Development"
      ]
    }],
    "skills": [{
      "name": "Web Development",
      "level": "NooB",
      "keywords": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    }],
    "languages": [{
      "language": "Tamil",
      "fluency": "Native speaker"
    }]
    
  }