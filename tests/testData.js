export const sortByData = [
    [
        // input array
        [
            { name: 'James', age: 30, job: 'Software Engineer' },
            { name: 'Glyn', age: 25, job: 'Data Analyst' },
            { name: 'Sally', age: 65, job: 'Librarian' },
            { name: 'David', age: 34, job: 'Paramedic' },
            { name: 'Tammy', age: 55, job: 'Hairdresser' }
        ],
        
        // sorting prop
        'job',

        // expected 
        [
            { name: 'Glyn', age: 25, job: 'Data Analyst' },
            { name: 'Tammy', age: 55, job: 'Hairdresser' },
            { name: 'Sally', age: 65, job: 'Librarian' },
            { name: 'David', age: 34, job: 'Paramedic' },
            { name: 'James', age: 30, job: 'Software Engineer' },
        ]
    ],
    [
        // input array
        [
            { name: 'James', age: 30, job: 'Software Engineer' },
            { name: 'Glyn', age: 25, job: 'Data Analyst' },
            { name: 'Sally', age: 65, job: 'Librarian' },
            { name: 'David', age: 34, job: 'Paramedic' },
            { name: 'Tammy', age: 55, job: 'Hairdresser' }
        ],

        // sorting prop
        'name',

        // expected
        [
            { name: 'David', age: 34, job: 'Paramedic' },
            { name: 'Glyn', age: 25, job: 'Data Analyst' },
            { name: 'James', age: 30, job: 'Software Engineer' },
            { name: 'Sally', age: 65, job: 'Librarian' },
            { name: 'Tammy', age: 55, job: 'Hairdresser' }
        ]
    ]
]