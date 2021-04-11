## Setup

Clone the repository, install the dependencies and get started right away.

    $ git clone <repository-url>
    $ cd <application-name>
    $ npm install

Make a copy of `.env.example` as `.env` and update your application details.

Finally, start the application.

    $ npm run start:dev (For development)
    $ NODE_ENV=production yarn start (For production)

Navigate to http://localhost:8848/api to verify installation.

Verification Endpoint - http://localhost:8848/api/verify [POST]
<br/>
Request Format - { "code": "[Six-Digit-Number]"}
