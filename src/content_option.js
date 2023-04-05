const logotext = "Cường's CV";
const meta = {
    title: "Cường Nguyễn",
    description: "I’m Cường Nguyễn AI Engineer _ Backend devloper,currently I student at UIT",
};

const introdata = {
    title: "I’m Cường Nguyễn",
    animated: {
        first: "I love coding",
        second: "I’m AI Engineer",
        third: "I’m backend developer",
    },
    description: "College student looking for a AI Engineer Fresher where I can develop my programming and design skills. Strengths include attention to detail, interpersonal communication, and an eagerness to learn.",
    your_img_url: process.env.PUBLIC_URL + "/avt2.jpg",
};

const dataabout = {
    title: "About myself",
    aboutme: "I'm third year student at HCMUS. I'm a AI engineer and Software Engineer who is passionate about making open-source more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include C#, NestJS, NodeJS, and Python.",
};
const worktimeline = [{
        jobtitle: "Software Engineer",
        where: "EyeQ Tech",
        date: "7/2022 - 3/2023",
    }
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Tensorflow",
        value: 80,
    },
    {
        name: "Pytorch",
        value: 80,
    },
    {
        name: "C#",
        value: 90,
    },
    {
        name: "Javascript",
        value: 70,
    },
    {
        name: "NestJS",
        value: 70,
    }
];

const services = [{
        title: "AI Engineer",
        description: "Knowledge about framework and library OpenCV Tensorflow, Pytorch, Scikit-Learn, Numpy, Pandas, Seaborn, and Matplotlib of Python.",
    },
    {
        title: "NLP Engineer",
        description: "Knowledge about framework and library NLTK, Spacy, Gensim, and TextBlob of Python. Knowledge of basic deep convolution neural network CNN, RNN, LSTM, Self-Attention, and Transformer (BERT, GPT).",
    },
    {
        title: "Windows App, ASP.NET Core",
        description: "Knowledge of ASP.NET, ASP.NET Core, WPF, Winform. Integrate Oracle, Smile, and Newway PMS into the application",
    },
    {
        title: "Backend Developer With NodeJS",
        description: "Knowledge of NestJS. Develop API for mobile application and web application, using MySQL, MongoDB. Create chatserver with Socket.io.",
    }
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    }
];

const contactConfig = {
    YOUR_EMAIL: "chi.cuongdx.130@gmail.com",
    YOUR_FONE: "0862506248",
    description: "This is a contact form for my website. Please use this form to send me a message or request more information. I will get back to you as soon as possible. Thank you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/chicuongdx",
    facebook: "https://www.facebook.com/icloudx.130",
    linkedin: "https://www.linkedin.com/in/chi-nguyen-270486233/",
    twitter: "https://twitter.com/thecloudx130",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};