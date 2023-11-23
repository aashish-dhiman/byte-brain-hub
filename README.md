# ByteBrainHub

ByteBrainHub is a collaborative platform built with Next.js, allowing users to share their insights and ideas with the world. The platform empowers users to contribute, discover, and engage with a diverse range of prompts.

## Features

- **Google Authentication:** Securely log in using your Google account via NextAuth, ensuring a seamless and trustworthy experience.

- **MongoDB Integration:** ByteBrainHub uses MongoDB to store and fetch data, providing a scalable and efficient data storage solution.

- **Create and Share Insights:** Users can create and share their insights with tags, making it easy for others to discover and engage with diverse content.

- **User-Friendly Interface:** ByteBrainHub provides an intuitive and user-friendly interface, facilitating a smooth and enjoyable browsing experience.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/ByteBrainHub.git
   cd ByteBrainHub
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Google Authentication:**
   - Obtain Google OAuth credentials and set them in your environment variables.
   - Update the `.env.local` file with your Google OAuth credentials.
   ```env
   GOOGLE_CLIENT_ID=your-client-id
   GOOGLE_CLIENT_SECRET=your-client-secret
   ```

4. **Set up MongoDB:**
   - Ensure you have a running MongoDB instance.
   - Update the `.env.local` file with your MongoDB connection string.
   ```env
   MONGODB_URI=your-mongodb-connection-string
   ```

5. **Run the Application:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open Your Browser:**
   Visit `http://localhost:3000` to explore ByteBrainHub.

## Contributing

ByteBrainHub welcomes contributions from the community. If you have suggestions, bug reports, or would like to contribute code, please feel free to open an issue or create a pull request.
