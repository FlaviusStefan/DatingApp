# Flirtly


Flirtly serves as an intuitive dating platform dedicated to fostering seamless connections. Designed with user-friendliness in mind, it merges Angular for the frontend, .NET (C#) for the backend, and relies on PostgreSQL for efficient database management. Emphasizing authentic connections, Flirtly empowers users with features like likes, messaging, and profile customization, aiming to create meaningful relationships in a straightforward and engaging digital environment.

## Technologies Used

- .NET/C#
- Angular
- TypeScript
- JavaScript
- HTML
- CSS
- SQL
- Git
- Docker

### Frontend Part
- **Languages:** TypeScript, HTML, CSS

  - **1) Components:** Structuring the UI into reusable modules.
  - **2) Services:** Handling data and business logic.
  - **3) Guards:** Protecting routes based on user authentication.
  - **4) Resolvers:** Pre-fetching data before route activation.

### Backend Part
- **Language:** .NET (C#)

  - **1) EntityFramework:** Object-relational mapping for simplified database interactions.
  - **2) IdentityFramework:** Managing user authentication and authorization securely.
  - **3) SignalR:** Facilitating real-time communication for messaging and notifications.

### Database Part
- **Database:** PostgreSQL
  - **SQL:** Handling database queries and management.


## User Roles and Capabilities

- **Admin:**
  - Full control over application edits, changes, and updates.

- **Moderator:**
  - Capability to add other users.
  - Limited administrative privileges compared to the admin role.

- **User:**
  - Features include interacting with other users through likes and messaging.
  - Ability to add a bio, including descriptions, preferences, and photo uploads.


## Account Creation Process

- **User Authentication Interface**: Upon accessing the platform, users are welcomed by a secure login gateway, ensuring confidentiality and data integrity.

- **Registration Journey**: Novel users embark on a seamless journey initiated by a conspicuous "register" button, guiding them through an intuitive and comprehensive registration form.

- **Role Assignment Automation**: Upon successful registration, an automated protocol assigns users the default "user" role, streamlining access and functionality within the Flirtly ecosystem.


## Flirtly User Manual: Interactions and Profile Customization

1. **Login/Registration:**
   - Users log in using their credentials or create a new account by registering through a simple form.

2. **Navigation:**
   - Based on their role (Admin, Moderator, or User), users navigate through the application.

3. **User Interaction:**
   - **Liking Profiles:**
     - Users have the ability to express interest by liking other user profiles, fostering connections based on mutual interest.
   - **Messaging System:**
     - Engage in private conversations with other users through a secure and intuitive messaging system, enabling seamless communication.
   - **Exploring Profiles:**
     - Gain deeper insights by viewing additional photos, bios, descriptions, and preferences of other users, fostering informed connections.

4. **Edit Profile:**
   - **Photo Uploads:**
     - Users can personalize their profiles by uploading additional photos, allowing them to showcase different facets of their personality and interests.
   - **Bio and Descriptions:**
     - Users have the flexibility to edit and enhance their profiles by adding or modifying bios, descriptions, and preferences, providing a comprehensive overview for potential connections.
   - **Profile Customization:**
     - Enhance the user experience by customizing profile details, enabling users to curate their profiles to accurately reflect their personalities and interests.


## Running the Application Locally

To run Flirtly locally:

1. **Frontend:**
   - Open the console
   - Navigate to the Angular frontend directory using `cd client`.
   - Run `npm install` to install dependencies.
   - Execute `ng serve` to start the frontend server.

2. **Backend:**
   - Open the console
   - Open the .NET backend directory using `cd api`.
   - Ensure PostgreSQL is set up and configured.
   - Run the backend application, using `dotnet run`.

4. **Accessing the App:**
   - Open a web browser and go to `http://localhost:5001` to access Flirtly.


© 2023 Ungureanu Flavius-Stefan
