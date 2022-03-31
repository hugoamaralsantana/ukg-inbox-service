import { faker } from '@faker-js/faker';
import moment from 'moment';

let now = moment();

let dataJSON = {
    "user_type": "employee",
    "data":{
        "favorited":[
        ],
        "performanceReviewPage":{
            "incoming":{
                "pending":[
                ],
                "inProgress":[
                    
                ],
                "completed":[
                    
                ]
            },
            "outgoing":{
                "pending":[
                ],
                "inProgress":[
                    
                ],
                "completed":[
                    
                ]
            }
        },
        "assignedTrainingPage":{
            "incoming":{
                "pending":[
                ],
                "inProgress":[
                    
                ],
                "completed":[
                    
                ]
            }
        },
        "PTORequestPage":{
            "outgoing":{
                "pending":[
                ],
                "inProgress":[
                    
                ],
                "completed":[
                    
                ]
            }
        }
    }
}

// performance review
const mockPerformanceReview = (id) => {
    return {
        "type":"performance_review",
        "task_id":id,
        "recipient": faker.name.firstName() + ' ' + faker.name.lastName(),
        "recipient_id":1,
        "recipient_due_date": null,
        "sender":faker.name.firstName() + ' ' + faker.name.lastName(),
        "sender_id":2,
        "sender_due_date":null,
        "date": now.add(Math.random(2), 'days'),
        "recipient_comments":null,
        "sender_comments":"Hi Im John, please review my performance Jake!",
        "growth_score":null,
        "growth_comments":null,
        "kindness_score":null,
        "kindness_comments":null,
        "delivery_score":null,
        "delivery_comments":null
    }
}

// assigned training
const mockAssignedTraining  = (id) => {
    return {
        "type":"assigned_training",
        "task_id":id,
        "recipient":faker.name.firstName() + ' ' + faker.name.lastName(),
        "recipient_id":1,
        "recipient_due_date":null,
        "sender":"Mark Zuckerberg",
        "sender_id":4,
        "sender_due_date":null,
        "date": now.add(Math.random(2), 'days'),
        "recipient_comments":null,
        "sender_comments":"Hi its Mark, the admin. Please complete this training Jake.",
        "training":"https://www.facebook.com/business/learn"
    }
}

// pto request
const mockPTORequest = (id) => {
    return {
        "type":"pto_request",
        "task_id":id,
        "recipient":faker.name.firstName() + ' ' + faker.name.lastName(),
        "recipient_id":5,
        "recipient_due_date":null,
        "sender":faker.name.firstName() + ' ' + faker.name.lastName(),
        "sender_id":1,
        "sender_due_date":null,
        "date": now.add(Math.random(2), 'days'),
        "recipient_comments":null,
        "sender_comments":"Hi its Jake, can I have PTO Marius?",
        "pto_type":"Vacation",
        "pto_date_start":now,
        "pto_date_end":now.add(Math.random(7), 'days')
    }
}

let data = JSON.parse(JSON.stringify(dataJSON)).data;

let id_counter = 0;
const GENERATE_MOCK_TASK_CYCLE = 5;
for (let i=0; i<GENERATE_MOCK_TASK_CYCLE; ++i) {
    data.performanceReviewPage.incoming.pending.push(mockPerformanceReview(id_counter++));
    data.performanceReviewPage.incoming.inProgress.push(mockPerformanceReview(id_counter++));
    data.performanceReviewPage.outgoing.pending.push(mockPerformanceReview(id_counter++));
    data.performanceReviewPage.outgoing.inProgress.push(mockPerformanceReview(id_counter++));

    data.assignedTrainingPage.incoming.pending.push(mockAssignedTraining(id_counter++));
    data.assignedTrainingPage.incoming.inProgress.push(mockAssignedTraining(id_counter++));
    
    data.PTORequestPage.outgoing.pending.push(mockPTORequest(id_counter++));
    data.PTORequestPage.outgoing.inProgress.push(mockPTORequest(id_counter++));
}

export default data;