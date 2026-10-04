# iBuiltThis - Showcase Your Creations, Discover New Ideas



## About This Project 🚀

iBuiltThis is a dynamic community platform designed for creators to showcase their projects, from apps and AI tools to SaaS products and creative endeavors. It provides a seamless experience for discovering new launches, engaging with a community of builders, and receiving authentic feedback.

## Features ✨

*   **Product Showcase:** A curated feed of featured and recently launched products.
*   **Detailed Product Pages:** Comprehensive information on each submitted product.
*   **User Authentication:** Secure sign-up and login with Clerk (supporting Passkeys, Google, and GitHub).
*   **Product Submission:** Easy-to-use form for submitting new projects with validation.
*   **Community Voting:** Upvote/downvote system to rank products.
*   **Admin Panel:** A dedicated interface for managing and moderating product submissions.
*   **Tagging & Categorization:** Products can be tagged for easier discovery.
*   **Responsive Design:** Fully accessible and functional across all devices.
*   **Real-time Updates:** Instant feedback and status updates through toast notifications.

## Tech Stack 🛠️

*   **Frontend:** React 19, Next.js 16 (App Router)
*   **Styling:** TailwindCSS 4, Shadcn UI
*   **Backend:** Node.js
*   **Database:** NeonDB (PostgreSQL) with Drizzle ORM
*   **Authentication:** Clerk
*   **Language:** TypeScript
*   **Validation:** Zod

## Getting Started 🚀

To get this project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ARJ99/ShowcaseApps.git
    cd ShowcaseApps
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Copy the contents of `.env.example` to a new file named `.env.local` and fill in your credentials:
    *   **Clerk authentication keys**
    *   **NeonDB database connection string**

4.  **Run database migrations:**
    ```bash
    npx drizzle-kit push
    ```

5.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open `http://localhost:3000` in your browser to view the application.

## Project Structure 📁

```
ShowcaseApps/
├── app/
│   ├── admin/
│   ├── api/
│   ├── products/
│   ├── ...
├── components/
│   ├── admin/
│   ├── common/
│   ├── forms/
│   ├── landing-page/
│   ├── products/
│   └── ui/
├── db/
│   ├── schema.ts
│   ├── index.ts
│   ├── seed.ts
│   └── data.ts
├── drizzle/
├── lib/
│   ├── admin/
│   ├── products/
│   └── utils.ts
├── public/
├── types/
├── .env.example
├── .eslintrc.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Usage Examples 💡

*   **Exploring Products:** Navigate to the `/explore` page to browse all approved products. You can search and sort them by trending or recent.
*   **Viewing Product Details:** Click on any product card to view its detailed page, including description, tags, launch date, and creator.
*   **Submitting a Product:** Authenticate with Clerk and navigate to the `/submit` page to add your own project to the platform.
*   **Admin Moderation:** If you have admin privileges, access the `/admin` page to review, approve, or reject pending product submissions.

## Contributing 🤝

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License 📄

This project is not currently under any specific license. (Based on repository information)

## Important Links 🔗

*   **Live Demo:** [https://showcase-apps-seven.vercel.app/](https://showcase-apps-seven.vercel.app/)
*   **Repository:** [https://github.com/ARJ99/ShowcaseApps](https://github.com/ARJ99/ShowcaseApps)

## Footer 

© 2026 iBuiltThis. All rights reserved.

Made with ❤️ by ARJ99


[Back to Top](#readme-top)

---
