export default [
    
    {
        name: 'Write Email',
        desc: 'Generate a well-organized email based on your needs',
        category: 'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/12121/12121806.png',
        aiPromt: 'Write an email based on the given context in a professional format.',
        slug: 'write-email',
        form: [
            {
                label: 'Enter email context',
                field: 'textarea',
                name: 'context',
                required: true
            }
        ],
       
    },
    {
        name: 'Rewrite Your Email',
        desc: 'Revise and perfect your email messaging',
        category: 'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/11147/11147080.png',
        aiPromt: 'Rewrite the given email content to make it more effective and professional.',
        slug: 'rewrite-your-email',
        form: [
            {
                label: 'Enter your email',
                field: 'textarea',
                name: 'email',
                required: true
            }
        ]
    },
    {
        name: 'Blog Title',
        desc: 'An effective AI tool blog title hinges on your blog’s subject matter',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2800/2800015.png',
        aiPromt: 'Give me 5 topic idea in bullet wise only based on give niche & outline and space give me result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                lable: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
           
        ]
    },
    {
        name: 'Blog Content',
        desc: 'Create captivating blog content from your outline',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9623/9623631.png',
        aiPromt: 'Create a detailed blog post based on the provided niche and outline.',
        slug: 'blog-content',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'Develop unique blog themes relevant to your niche',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11858/11858216.png',
        aiPromt: 'Give me 10 topic ideas in bullet format based on the given niche.',
        slug: 'blog-topic-ideas',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'YouTube SEO Titles',
        desc: 'Design SEO-enhanced titles for your YouTube channel',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/470/470699.png',
        aiPromt: 'Generate SEO-optimized titles based on the given video content.',
        slug: 'youtube-seo-titles',
        form: [
            {
                label: 'Enter video content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'YouTube Description',
        desc: 'Create engaging descriptions for your YouTube videos',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1409/1409936.png',
        aiPromt: 'Create a detailed and engaging YouTube video description based on the given content.',
        slug: 'youtube-description',
        form: [
            {
                label: 'Enter video content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: 'Create appropriate tags for your YouTube videos',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884882.png',
        aiPromt: 'Generate a list of relevant tags based on the given video content.',
        slug: 'youtube-tags',
        form: [
            {
                label: 'Enter video content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Modify your article to ensure it is unique and free from plagiarism',
        category: 'Article',
        icon: 'https://cdn-icons-png.flaticon.com/128/8980/8980709.png',
        aiPromt: 'Rewrite the given article content to ensure it is plagiarism-free.',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Enter article content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'Enhance and perfect your content writing',
        category: 'Text',
        icon: 'https://cdn-icons-png.flaticon.com/256/10096/10096850.png',
        aiPromt: 'Improve the given text content, enhancing clarity and readability.',
        slug: 'text-improver',
        form: [
            {
                label: 'Enter text content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'Add fitting emojis to your content to improve engagement',
        category: 'Text',
        icon: 'https://cdn-icons-png.flaticon.com/128/4160/4160724.png',
        aiPromt: 'Add relevant emojis to the given text content.',
        slug: 'add-emojis-to-text',
        form: [
            {
                label: 'Enter text content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'Develop interesting Instagram content based on your suggestions',
        category: 'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiPromt: 'Create an engaging Instagram post based on the given content.',
        slug: 'instagram-post-generator',
        form: [
            {
                label: 'Enter post content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'Generate effective hashtags for your Instagram feed',
        category: 'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111490.png',
        aiPromt: 'Generate relevant hashtags based on the given post content.',
        slug: 'instagram-hash-tag-generator',
        form: [
            {
                label: 'Enter post content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'Create innovative concepts for Instagram posts or reels',
        category: 'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/11820/11820224.png',
        aiPromt: 'Generate creative ideas for Instagram posts or reels based on the given theme.',
        slug: 'instagram-post-reel-idea',
        form: [
            {
                label: 'Enter theme or topic',
                field: 'input',
                name: 'theme',
                required: true
            }
        ]
    },
    {
        name: 'English Grammar Check',
        desc: 'Review and amend grammatical errors in your writing',
        category: 'Text',
        icon: 'https://cdn-icons-png.flaticon.com/128/7759/7759752.png',
        aiPromt: 'Check and correct the grammar in the given text content.',
        slug: 'english-grammar-check',
        form: [
            {
                label: 'Enter text content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    {
        name: 'Write Code',
        desc: 'Generate code snippets tailored to your requirements',
        category: 'Coding',
        icon: 'https://cdn-icons-png.flaticon.com/128/10817/10817310.png',
        aiPromt: 'Write a code snippet based on the given requirements and language.',
        slug: 'write-code',
        form: [
            {
                label: 'Enter coding requirements',
                field: 'textarea',
                name: 'requirements',
                required: true
            },
            {
                label: 'Enter preferred programming language',
                field: 'input',
                name: 'language',
                required: true
            }
        ]
    },
    {
        name: 'Explain Code',
        desc: 'Get a step-by-step explanation of a code snippet',
        category: 'Coding',
        icon: 'https://cdn-icons-png.flaticon.com/128/1828/1828231.png',
        aiPromt: 'Explain the given code snippet in detail.',
        slug: 'explain-code',
        form: [
            {
                label: 'Enter code snippet',
                field: 'textarea',
                name: 'code',
                required: true
            }
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'Analyze and debug your code',
        category: 'Coding',
        icon: 'https://cdn-icons-png.flaticon.com/128/8297/8297137.png',
        aiPromt: 'Detect and fix bugs in the given code snippet.',
        slug: 'code-bug-detector',
        form: [
            {
                label: 'Enter code snippet',
                field: 'textarea',
                name: 'code',
                required: true
            }
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Develop engaging product catchphrases',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/13966/13966755.png',
        aiPromt: 'Generate catchy taglines based on the given product or brand description.',
        slug: 'tagline-generator',
        form: [
            {
                label: 'Enter product or brand description',
                field: 'textarea',
                name: 'description',
                required: true
            }
        ]
    },
    {
        name: 'Product Description',
        desc: 'Develop precise product descriptions',
        category: 'E-Tail',
        icon: 'https://cdn-icons-png.flaticon.com/128/1670/1670993.png',
        aiPromt: 'Create a detailed product description based on the given product information.',
        slug: 'product-description',
        form: [
            {
                label: 'Enter product information',
                field: 'textarea',
                name: 'information',
                required: true
            }
        ]
    }
];
