export default{
    name: 'pin',
    title: 'pin',
    type:'document',
    fields: [
    {
    name: 'title',
    title: 'Title',
    type:'string'
    },
    {
        name: 'about',
        title: 'About',
        type:'string'
        },
        {
            name: 'destination',
            title: 'destination',
            type:'url'
            },
            {
                name: 'category',
                title: 'Category',
                type:'string'
                },
                {
                    name: 'image',
                    title: 'image',
                    type:'image',
                        
                    options:{
                        hotspot:true
                    }
                    },
                    {
                        name: 'userId',
                        title: 'UserId',
                        type:'string'
                        },
                        {
                            name: 'postedBy',
                            title: 'PostedBy',
                            type:'postedBy'
                            },
                            {
                                name: 'save',
                                title: 'save',
                                type:'array',
                                of:[{type:'save'}]
                                },
                                {
                                    name: 'comments',
                                    title: 'Comments',
                                    type:'array',
                                    of:[{type:'comment'}]
                                    },
    ]
}