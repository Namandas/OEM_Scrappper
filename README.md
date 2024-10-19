# VulnDB Frontend

This is the frontend application for VulnDB, built using Next.js. It interacts with the VulnDB backend API to provide a user-friendly interface for querying and managing security vulnerabilities scraped from various vendors.

## Built by Team Divya Utsav (Team ID 5568) for Smart India Hackathon 2024
Website Link : [VulnDB](https://oem-scrappper.vercel.app/)
Backend: [VulnDB Backend](https://github.com/Imyr/vulndb)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)
- [Disclaimer](#disclaimer)

## Features

- **Vendor List**: Displays a list of vendors from which vulnerabilities are scraped.
- **Vulnerability Queries**: Allows querying vulnerabilities based on vendor and limit.
- **Vulnerability Updates**: Provides functionality to trigger vulnerability data updates.
- **Responsive Design**: Optimized for desktop and mobile views.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Axios (for API calls)
- MongoDB (for backend storage)
- FastAPI (for backend API)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Namandas/OEM_Scrappper.git
    cd OEM_Scrappper
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up your environment variables:

    Create a `.env.local` file in the project root directory with the following content:

    ```bash
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

    The application will start at `http://localhost:3000`.

## Usage

Once the application is running, you can access the frontend to query vulnerabilities and view available vendors.

### Example

- **View available vendors**: Visit the `/vendors` page to see the list of vendors.
- **Query vulnerabilities**: Use the `/vulnerabilities` page to search vulnerabilities by vendor.

## API Endpoints

The frontend interacts with the following API endpoints from the VulnDB backend:

- `GET /available_vendors`: Lists all vendors.
- `POST /vulnerabilities/list`: Queries vulnerabilities based on the vendor and limit.
- `GET /vulnerabilities/update`: Updates the database with new vulnerabilities.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Disclaimer

This repository is for research purposes only. The use of this code is your responsibility. I take no responsibility and/or liability for how you choose to use any of the code available here. By using any of the files available here, you understand that you are agreeing to use at your own risk. Once again, all files available in this repository are for educational and/or research purposes only.
