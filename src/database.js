const loadInitialTopics = () => {
    return [
        {
            'topicId': 1,
            'username': 'gskellorne0',
            'topic': 'Netflix Has Almost 4x as Many Streaming Subscribers as Comcast has Cable Subscribers',
            'creationDate': '2016-10-25T11:08:25Z',
            'upvotes': [
                {
                    'username': 'gskellorne0'
                },
                {
                    'username': 'qtingcomb1'
                },
                {
                    'username': 'mranyell3'
                },
                {
                    'username': 'hmacilhench4'
                }
            ],
            'downvotes': [
                {
                    'username': 'goverland2',
                },
                {
                    'username': 'rhenrionot3'
                }
            ]
        },
        {
            'topicId': 2,
            'username': 'qtingcomb1',
            'topic': 'Google Docs users hit with sophisticated phishing attack',
            'creationDate': '2016-09-05T13:26:51Z',
            'upvotes': [
                {
                    'username': 'lwinchcum6'
                },
                {
                    'username': 'mlagadu7'
                },
                {
                    'username': 'rjaumetb'
                },
                {
                    'username': 'dgovierc'
                },
                {
                    'username': 'alippittd'
                }
            ],
            'downvotes': [
                {
                    'username': 'bovershotta'
                }
            ]
        },
        {
            'topicId': 3,
            'username': 'goverland2',
            'topic': 'Why Netflix Is Winning the Online Piracy Wars',
            'creationDate': '2017-03-04T03:14:46Z',
            'upvotes': [
                {
                    'username': 'jdraperh',
                },
                {
                    'username': 'awiszniewskii'
                },
                {
                    'username': 'mkingshottm'
                },
                {
                    'username': 'jmcneillyq'
                },
                {
                    'username': 'astraceyr'
                },
                {
                    'username': 'eyurocjkins'
                },
                {
                    'username': 'mpattiet'
                }
            ],
            'downvotes': [
                {
                    'username': 'hyerbyj'
                }
            ]
        },
        {
            'topicId': 4,
            'username': 'rhenrionot3',
            'topic': 'Global WhatsApp Outage',
            'creationDate': '2016-09-22T02:25:29Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 5,
            'username': 'hmacilhench4',
            'topic': "Why isn't Net Neutrality a bigger deal right now?",
            'creationDate': '2016-10-07T15:03:54Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 6,
            'username': 'ddommerque5',
            'topic': "Windows 10 S won't let you change the default browser or switch to Google search",
            'creationDate': '2017-01-10T16:57:13Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 7,
            'username': 'agundry6',
            'topic': "Don't Get Fooled: The Plan Is To Kill Net Neutrality While Pretending It's Being Protected",
            'creationDate': '2016-10-06T05:34:25Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 8,
            'username': 'fexcell7',
            'topic': 'SpaceX to launch broadband satellites in 2019 - Satellites will function like a mesh network and deliver gigabit speeds',
            'creationDate': '2017-04-17T09:01:30Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 9,
            'username': 'hraoult8',
            'topic': "Dem: GOP's net neutrality rollback aims to 'choke off' free speech",
            'creationDate': '2017-04-20T11:39:01Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 10,
            'username': 'mmuffin9',
            'topic': 'IBM is urging customers to destroy V3500, V3700 and V5000 flash drives it shipped because they contain malware.',
            'creationDate': '2016-05-15T00:41:03Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 11,
            'username': 'rplumridegea',
            'topic': 'The Parts of America Most Susceptible to Automation - \'65 percent of jobs in Las Vegas and 63 percent of jobs in Riverside predicted to be automatable by 2025.\'',
            'creationDate': '2016-11-20T13:53:33Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 12,
            'username': 'chamonb',
            'topic': 'NSA still collecting Americans’ phone call data',
            'creationDate': '2016-06-10T02:48:29Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 13,
            'username': 'ilukehurstc',
            'topic': 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
            'creationDate': '2016-08-10T16:05:36Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 14,
            'username': 'tkempstond',
            'topic': 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
            'creationDate': '2016-05-30T09:21:02Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 15,
            'username': 'dedgelere',
            'topic': 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
            'creationDate': '2017-04-03T13:42:49Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 16,
            'username': 'cbrosettif',
            'topic': 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
            'creationDate': '2016-05-26T10:25:08Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 17,
            'username': 'cjeeksg',
            'topic': 'Donec dapibus.',
            'creationDate': '2016-07-13T19:22:39Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 18,
            'username': 'zsarahh',
            'topic': 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
            'creationDate': '2016-09-08T02:23:17Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 19,
            'username': 'jfaucherandi',
            'topic': 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
            'creationDate': '2016-08-20T21:01:10Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 20,
            'username': 'bwindlessj',
            'topic': 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
            'creationDate': '2017-03-25T06:42:11Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 21,
            'username': 'dsaytonk',
            'topic': 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
            'creationDate': '2016-10-19T21:22:17Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 22,
            'username': 'jmoodiel',
            'topic': 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
            'creationDate': '2017-02-19T04:55:59Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 23,
            'username': 'ccollopm',
            'topic': 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
            'creationDate': '2017-03-10T08:32:04Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 24,
            'username': 'rkieltn',
            'topic': 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
            'creationDate': '2017-04-29T12:20:22Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 25,
            'username': 'lschutto',
            'topic': 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
            'creationDate': '2016-07-04T11:48:04Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 26,
            'username': 'tgemsonp',
            'topic': 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
            'creationDate': '2017-04-19T17:48:27Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 27,
            'username': 'tnollethq',
            'topic': 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
            'creationDate': '2017-03-13T20:49:13Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 28,
            'username': 'jbrasenerr',
            'topic': 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
            'creationDate': '2016-08-14T04:12:18Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 29,
            'username': 'asiegertszs',
            'topic': 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
            'creationDate': '2017-02-13T16:42:20Z',
            'upvotes': [],
            'downvotes': []
        },
        {
            'topicId': 30,
            'username': 'dburget',
            'topic': 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
            'creationDate': '2016-07-21T21:32:00Z',
            'upvotes': [],
            'downvotes': []
        }
    ];
};

export default loadInitialTopics;