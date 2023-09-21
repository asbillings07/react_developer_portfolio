export const data = {
  projects: [
    {
      id: 0,
      project_name: 'Getter',
      description:
        'A Chrome Extension that Automatically finds fonts, colors and more on any webpage.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Google Chrome APIs'
      ],
      live_link: 'https://chrome.google.com/webstore/detail/getter/nkgabfmcijbajgobbeloaobhbhpacnim',
      github_link: 'https://github.com/asbillings07/Getter',
      imageName: 'getter',
      image_urls: [
        `$getter1`,
        `$getter2`,
        `getter3`,
      ],
      image_names: [
        `getter`,
        `getter`,
        `getter`,
      ].map((name, i) => `${name}_0${i + 1}`),
      isFlipped: false
    },
    {
      id: 1,
      project_name: 'Recommendit!',
      description:
        'An App that allows you to find and share cool places to your friends',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'NodeJs',
        'React',
        'Express',
        'React-Bootstrap',
        'styled-componets',
        'PostGreSQL',
        'JWT',
        'Google Maps API',
        'Jest',
        'React Testing Library'
      ],
      imageName: 'recommendit',
      live_link: 'https://recommendit.netlify.com/',
      github_link: 'https://github.com/asbillings07/recommendation_app',
      image_urls: [
        `recommendit1`,
        `recommendit2`,
        `recommendit3`,
        `recommendit4`
      ],
      image_names: [
        `recommendit`,
        `recommendit`,
        `recommendit`,
        `recommendit`
      ].map((name, i) => `${name}_0${i + 1}`),
      isFlipped: false
    },
    {
      id: 2,
      project_name: 'CourseShare',
      imageName: 'course-share',
      description:
        'A Full Stack App that allows users to view, create, update and delete courses.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'SQL',
        'Node',
        'Sequelize ORM',
        'REST API',
        'Express',
        'React',
        'bcrypt',
        'basic-auth',
        'Fetch API',
        'Axios'
      ],
      live_link: 'https://courseshare.netlify.com',
      github_link:
        'https://github.com/asbillings07/full-stack-react-with-restapi',
      image_urls: [`course1`, `course2`, `course3`],
      image_names: [`course-share`, `course-share`, `course-share`].map((name, i) => `${name}_0${i + 1}`),
      isFlipped: false
    },
    {
      id: 3,
      project_name: 'React Scoreboard',
      imageName: 'scoreboard',
      description:
        'A scoreboard for tracking points in a game of your choice, it also includes a timer',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      live_link: 'https://readysetscore.netlify.com/',
      github_link: 'https://github.com/asbillings07/react-scoreboard-app',
      image_urls: [`scoreboard1`, `scoreboard`, `scoreboard3`],
      image_names: [`scoreboard`, `scoreboard`, `scoreboard`].map((name, i) => `${name}_0${i + 1}`),
      isFlipped: false
    },
    {
      id: 4,
      project_name: 'React Gallery App',
      description: 'A flickr type clone app with the flickr API.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Axios',
        'Fetch API'
      ],
      imageName: 'gallery',
      live_link: 'https://gallerize.netlify.com/',
      github_link: 'https://github.com/asbillings07/react_gallery_app',
      image_urls: [`gallery1`, `gallery2`, `gallery3`],
      image_names: [`gallery`, `gallery`, `gallery`].map((name, i) => `${name}_0${i + 1}`),
      isFlipped: false
    },
    {
      id: 5,
      project_name: 'Employee Directory',
      imageName: 'employee-directory',
      description:
        'An employee directory app created by communicating with a third-party API.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'JQuery',
        'AJAX',
        'Fetch API'
      ],
      live_link: 'https://public-api-request.netlify.com/',
      github_link: 'https://github.com/asbillings07/public_api_requests',
      image_urls: [`api1`, `api2`, `api3`],
      image_names: [`employee-directory`, `employee-directory`, `employee-directory`].map((name, i) => `${name}_0${i + 1}`),
      isFlipped: false
    },
    {
      id: 6,
      project_name: 'Phrase Game',
      imageName: 'phrase-game',
      description: "A browser-based, word guessing game: 'Jedi Hunter.'",
      technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'OOP'],
      live_link: 'https://jedi-hunter-game.netlify.com/',
      github_link: 'https://github.com/asbillings07/oop_game-v2',
      image_urls: [`phrase1`, `phrase2`, `phrase3`],
      image_names: [`phrase-game`, `phrase-game`, `phrase-game`].map((name, i) => `${name}_0${i + 1}`),
      isFlipped: false
    },
    {
      id: 7,
      project_name: 'Interactive Form',
      imageName: 'interactive-form',
      description:
        'A form enhanced with JavaScript so that it’s engaging, interactive, and easy to use',
      technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
      live_link: 'https://interactive-form.netlify.com/',
      github_link: 'https://github.com/asbillings07/js-interactive-form',
      image_urls: [`interactive1`, `interactive2`],
      image_names: [`interactive-form`, `interactive-form`].map((name, i) => `${name}_0${i + 1}`),
      isFlipped: false
    },
    {
      id: 8,
      project_name: 'Pagination App',
      imageName: 'pagination',
      description:
        'An app that displays 10 students on one page and provides navigation to jump to a list of more items.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://list-pagination-app.netlify.com/',
      github_link:
        'https://github.com/asbillings07/list_pagination_and_filtering-v1',
      image_urls: [`pagination1`, `pagination2`, `pagination3`],
      image_names: [`pagination`, `pagination`, `pagination`].map((name, i) => `${name}_0${i + 1}`),
      isFlipped: false
    },
    {
      id: 9,
      project_name: 'Me Mail',
      imageName: 'me-mail',
      description:
        'A web application that looks like gmail (more functionality coming soon!)',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      live_link: 'https://me-mail.netlify.app/',
      github_link: 'https://github.com/asbillings07/gmail-clone-exercise',
      image_urls: [`random1`, `random2`, `random3`],
      image_names: [`me-mail`, `me-mail`, `me-mail`].map((name, i) => `${name}_0${i + 1}`),
      isFlipped: false
    }
  ]
}
