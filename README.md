# ServnAi - AI-Powered Business Solutions

A comprehensive business management platform that leverages AI to automate and streamline your business operations.

## 🌟 Key Features

### 🚀 Modern UI/UX
- Responsive design that works on all devices
- Smooth animations and transitions
- Clean, professional interface

### 🛠️ Core Components
- **Landing Page**: Engaging introduction to ServnAi services
- **Header**: Responsive navigation with smooth scroll behavior
- **Hero Section**: Dynamic content with animated text
- **Services**: Showcase of AI-powered solutions
- **Features**: Detailed breakdown of platform capabilities
- **Pricing**: Transparent pricing plans
- **Testimonials**: Social proof from satisfied customers
- **CTA Section**: Clear call-to-action for user engagement
- **Footer**: Comprehensive site navigation and contact information

### ⚙️ Technical Highlights
- **Frontend**: React.js with Tailwind CSS
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **State Management**: React Context API
- **Animations**: CSS animations and transitions
- **Responsive Design**: Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- Python (v3.8+)
- MongoDB (local or cloud instance)
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/servnai.git
   cd servnai
   ```

2. **Set up the backend**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set up environment variables**
   Create a `.env` file in the backend directory with:
   ```
   MONGODB_URL=your_mongodb_connection_string
   DB_NAME=servnai
   ```

4. **Set up the frontend**
   ```bash
   cd ../frontend
   yarn install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   uvicorn server:app --reload
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   yarn start
   ```

3. Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

## 🛠️ Project Structure

```
servnai/
├── backend/               # FastAPI backend
│   ├── server.py          # Main application file
│   └── requirements.txt   # Python dependencies
├── frontend/              # React frontend
│   ├── public/            # Static files
│   └── src/               # Source files
│       ├── components/    # Reusable components
│       ├── App.js         # Main app component
│       └── index.js       # Entry point
└── README.md              # This file
```

## 🌐 Deployment

### Frontend Deployment
1. Build the production version:
   ```bash
   cd frontend
   yarn build
   ```
2. Deploy the `build` folder to your preferred hosting service (Vercel, Netlify, etc.)

### Backend Deployment
1. Set up a production server (e.g., Ubuntu with Nginx)
2. Configure environment variables
3. Use a production ASGI server like Gunicorn with Uvicorn workers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by the need for streamlined business solutions
- Special thanks to all contributors
- [![Vercel](https://vercel.com/button)](https://vercel.com/your-vercel-project-url)
