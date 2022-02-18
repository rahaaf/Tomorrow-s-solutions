export class ContactsFakeDb
{
    public static contacts = [
        {
            'id'      : '5725a6808a178bfd034d6ecf',
            'name'    : 'Mai',
            'avatar'  : 'assets/images/avatars/Mai.jpg',
            'jobTitle': 'Software Engineer',
            'email'   : 'mai@withinpixels.com',
            'phone'   : '+1-202-555-0199',
            'address' : '148 Heather Lane Mcminnville, TN 37110',
            'birthday': '2/5/2000',
            'notes'   : ''
        },
        {
            'id'      : '5725a680653c265f5c79b5a9',
            'name'    : 'Nancy',
            'avatar'  : 'assets/images/avatars/Nancy.jpg',
            'nickname': 'Silverwarden',
            'email'   : 'nancy@withinpixels.com',
            'phone'   : '+1-202-555-0120',
            'address' : '345 Laurel Lane Union City, NJ 07087',
            'birthday': '2/5/2000',
            'notes'   : ''
        },
        {
            'id'      : '5725a680bbcec3cc32a8488a',
            'name'    : 'Nora',
            'avatar'  : 'assets/images/avatars/Nora.jpg',
            'jobTitle': 'Database Coordinator',
            'email'   : 'nora@withinpixels.com',
            'phone'   : '+1-202-555-0172',
            'address' : '572 Rose Street Summerfield, FL 34491',
            'birthday': '2/5/2000',
            'notes'   : ''
        },
        {
            'id'      : '5725a6803d87f1b77e17b62b',
            'name'    : 'Odessa',
            'avatar'  : 'assets/images/avatars/Odessa.jpg',
            'jobTitle': 'Database Administration Manager',
            'email'   : 'odessa@withinpixels.com',
            'phone'   : '+1-202-555-0190',
            'address' : '527 Jefferson Court Conyers, GA 30012',
            'birthday': '2/5/2000',
            'notes'   : ''
        },
        {
            'id'      : '5725a680e87cb319bd9bd673',
            'name'    : 'Reyna',
            'avatar'  : 'assets/images/avatars/Reyna.jpg',
            'jobTitle': 'Data Processing Planner',
            'email'   : 'reyna@withinpixels.com',
            'phone'   : '+1-202-555-0116',
            'address' : '297 Strawberry Lane Faribault, MN 55021',
            'birthday': '2/5/2000',
            'notes'   : ''
        },
        {
            'id'      : '5725a6802d10e277a0f35775',
            'name'    : 'Shauna',
            'avatar'  : 'assets/images/avatars/Shauna.jpg',
            'jobTitle': 'Art Director',
            'email'   : 'shauna@withinpixels.com',
            'phone'   : '+1-202-555-0159',
            'address' : '928 Canterbury Court Pittsburgh, PA 15206',
            'birthday': '2/5/2000',
            'notes'   : ''
        },  
        {
            'id'      : '5725a6808a178bfd034d6ecf',
            'name'    : 'Mai',
            'avatar'  : 'assets/images/avatars/Mai.jpg',
            'jobTitle': 'Software Engineer',
            'email'   : 'mai@withinpixels.com',
            'phone'   : '+1-202-555-0199',
            'address' : '148 Heather Lane Mcminnville, TN 37110',
            'birthday': '2/5/2000',
            'notes'   : ''
        },
        {
            'id'      : '5725a680653c265f5c79b5a9',
            'name'    : 'Nancy',
            'avatar'  : 'assets/images/avatars/Nancy.jpg',
            'nickname': 'Silverwarden',
            'email'   : 'nancy@withinpixels.com',
            'phone'   : '+1-202-555-0120',
            'address' : '345 Laurel Lane Union City, NJ 07087',
            'birthday': '2/5/2000',
            'notes'   : ''
        },
        {
            'id'      : '5725a680bbcec3cc32a8488a',
            'name'    : 'Nora',
            'avatar'  : 'assets/images/avatars/Nora.jpg',
            'jobTitle': 'Database Coordinator',
            'email'   : 'nora@withinpixels.com',
            'phone'   : '+1-202-555-0172',
            'address' : '572 Rose Street Summerfield, FL 34491',
            'birthday': '2/5/2000',
            'notes'   : ''
        },
        {
            'id'      : '5725a6803d87f1b77e17b62b',
            'name'    : 'Odessa',
            'avatar'  : 'assets/images/avatars/Odessa.jpg',
            'jobTitle': 'Database Administration Manager',
            'email'   : 'odessa@withinpixels.com',
            'phone'   : '+1-202-555-0190',
            'address' : '527 Jefferson Court Conyers, GA 30012',
            'birthday': '2/5/2000',
            'notes'   : ''
        },  
        
    ];

    public static user = [
        {
            'id'              : '5725a6802d10e277a0f35724',
            'name'            : 'John Doe',
            'avatar'          : 'assets/images/avatars/profile.jpg',
            'starred'         : [
                '5725a680ae1ae9a3c960d487',
                '5725a6801146cce777df2a08',
                '5725a680bbcec3cc32a8488a',
                '5725a680bc670af746c435e2',
                '5725a68009e20d0a9e9acf2a'
            ],
            'frequentContacts': [
                '5725a6809fdd915739187ed5',
                '5725a68031fdbb1db2c1af47',
                '5725a680606588342058356d',
                '5725a680e7eb988a58ddf303',
                '5725a6806acf030f9341e925',
                '5725a68034cb3968e1f79eac',
                '5725a6801146cce777df2a08',
                '5725a680653c265f5c79b5a9'
            ],
            'groups'          : [
                {
                    'id'        : '5725a6802d10e277a0f35739',
                    'name'      : 'Friends',
                    'contactIds': [
                        '5725a680bbcec3cc32a8488a',
                        '5725a680e87cb319bd9bd673',
                        '5725a6802d10e277a0f35775'
                    ]
                },
                {
                    'id'        : '5725a6802d10e277a0f35749',
                    'name'      : 'Clients',
                    'contactIds': [
                        '5725a680cd7efa56a45aea5d',
                        '5725a68018c663044be49cbf',
                        '5725a6809413bf8a0a5272b1',
                        '5725a6803d87f1b77e17b62b'
                    ]
                },
                {
                    'id'        : '5725a6802d10e277a0f35329',
                    'name'      : 'Recent Workers',
                    'contactIds': [
                        '5725a680bbcec3cc32a8488a',
                        '5725a680653c265f5c79b5a9',
                        '5725a6808a178bfd034d6ecf',
                        '5725a6801146cce777df2a08'
                    ]
                }
            ]
        }
    ];
   
}
