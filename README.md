# NLW Valoriza

## Topics

#### - <a href="#api-reference">API Reference</a> 
#### - <a href="#api-rules">API Rules</a>


# <a name="api-reference"></a>API Reference

Token Format: Bearer > Prefix: Bearer

- ## Authentication

      # POST - /login
      - Requests an access token for accessing API resources. The token expires in 24 hours.

      Request Body - JSON
      > email    - user e-mail
      > password - user password

- ## User

      # POST - /users
      - Register a new user.

         Request Body - JSON
         > name     - user name
         > email    - user e-mail
         > password - user password


      # GET - /users/compliments/sent
      - The user must be authenticated.
      - List all compliments sent by the authenticated user.


      # GET - /users/compliments/received
      - The user must be authenticated.
      - List all compliments received by the authenticated user.

- ## Tag

      # POST - /tags
      - Register a new tag.
      - The user must be authenticated and must be an administrator.

         Request Body - JSON
         > name     - tag name


      # GET - /tags
      - The user must be authenticated.
      - List all tags.

- ## Compliment

      # POST - /compliments
      - User must be authenticated.
      - Register a new compliment.

         Request Body - JSON
         > tag_id        - tag uuid
         > user_receiver - user receiver uuid
         > message       - simple message
         

      # GET - /compliments
      - User must be authenticated.
      - List all compliments.

# <a name="api-rules"></a>API Rules

- User register
  - A user can not be registered using an already registered e-mail, neither leave the e-mail field empty.

- Tag register
  - The user must be an administrator.
  - The user can not register a tag without name or an already existing tag.

- Compliment register
  - The user sender must be authenticated.
  - The user can not register a compliment to himself.
  - The user receiver must be valid.

Trilha Node.Js - NLW Together
