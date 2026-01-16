# AI Workout Tracker

A comprehensive web-based fitness tracking application with AI-powered workout analysis and progression suggestions.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-Realtime%20Database-orange)
![Groq](https://img.shields.io/badge/AI-Groq%20LLaMA%203.1-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

## Features

### 🏋️ Workout Management
- Create and manage multiple workout routines
- Support for 7-day split routines with customizable exercises
- Exercise-level configuration: sets, target reps, rest time
- Pre-loaded demo routines to get started quickly

### 📊 Active Workout Tracking
- Real-time workout session interface
- Set-by-set tracking: weight, reps, RPE (Rate of Perceived Exertion)
- Exercise reordering during workouts
- Auto-save functionality with recovery on app reload
- Workout duration tracking

### 🤖 AI-Powered Features (Groq LLaMA 3.1)
- **Routine Analysis**: Full routine analysis and optimization suggestions
- **Day-Level Analysis**: Analyze individual workout days
- **Progression Suggestions**: AI recommendations for weight/rep progression based on:
  - Exercise history and performance
  - RPE scores
  - User goals (Bodybuilding, Powerlifting, General Fitness, etc.)
  - Experience level (Beginner, Intermediate, Advanced)
- **Exercise Information**: AI-generated form guides, tips, and progressions

### 📈 Progress Analytics
- Workout history with duration and volume tracking
- Last 4 weeks analytics dashboard
- Muscle group volume distribution charts
- Total sets, workouts, and duration metrics

### 🗄️ Exercise Database
- Public exercise database with:
  - Muscle groups and difficulty levels
  - Equipment requirements
  - Form guides and safety tips
  - Common mistakes and progressions
- Search functionality
- Dynamic exercise info generation via AI

## Technology Stack

### Frontend
- **React 18.2.0** - UI library
- **Tailwind CSS 3.4.1** - Styling
- **Lucide React** - Icon library
- **Firebase SDK** - Authentication & Realtime Database

### Backend
- **Firebase Cloud Functions** - Serverless backend (Node.js 20)
- **Groq API** - AI-powered analysis using LLaMA 3.1 70B
- **Firebase Realtime Database** - Data persistence
- **Firebase Authentication** - User management

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Firebase CLI: `npm install -g firebase-tools`
- A Firebase project ([Create one here](https://console.firebase.google.com/))
- A Groq API key ([Get it free here](https://console.groq.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Workout-app-v2
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install

   # Install Firebase Functions dependencies
   cd functions
   npm install
   cd ..
   ```

3. **Set up environment variables**

   **Frontend (.env in root directory)**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Firebase configuration:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

   **Backend (functions/.env)**
   ```bash
   cd functions
   cp .env.example .env
   ```
   Edit `functions/.env` and add your Groq API key:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Configure Firebase**
   ```bash
   firebase login
   firebase use --add  # Select your Firebase project
   ```

5. **Deploy Firebase Functions**
   ```bash
   firebase deploy --only functions
   ```

6. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
Workout-app-v2/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── ErrorBoundary.js
│   │   ├── MainView.js
│   │   ├── ActiveWorkoutView.js
│   │   ├── RoutineEditorView.js
│   │   ├── HistoryView.js
│   │   ├── ExerciseCard.js
│   │   └── AnalysisModal.js
│   ├── contexts/           # React Context for state management
│   │   └── AppContext.js
│   ├── views/              # Page-level view components
│   │   └── ProfileSetupView.js
│   ├── hooks/              # Custom React hooks
│   │   └── useProgressionSuggestion.js
│   ├── utils/              # Utility functions
│   │   ├── helpers.js
│   │   └── logger.js
│   ├── App.js              # Main application component
│   ├── firebase.js         # Firebase configuration
│   └── index.js            # Application entry point
├── functions/              # Firebase Cloud Functions
│   ├── index.js            # Cloud Functions definitions
│   ├── utils/
│   │   └── logger.js
│   └── package.json
├── public/                 # Static files
├── .env                    # Frontend environment variables (not in git)
├── .env.example            # Example env file
├── firebase.json           # Firebase configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Project dependencies
```

## Available Scripts

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

### Firebase Functions
- `firebase deploy --only functions` - Deploy Cloud Functions
- `firebase emulators:start` - Start Firebase emulators for local testing
- `firebase logs` - View Cloud Functions logs

## Firebase Functions API

### `analyzeRoutine`
Analyzes a complete workout routine or single day using Groq AI.

**Parameters:**
- `routine` - Routine object (for full analysis)
- `day` - Day object (for day analysis)
- `profile` - User profile with goals and experience
- `isDay` - Boolean flag for day-specific analysis

**Returns:** HTML-formatted analysis with recommendations

### `progressionSuggestion`
Provides weight progression recommendations based on workout history.

**Parameters:**
- `exerciseName` - Name of the exercise
- `history` - Array of previous workout sessions
- `goal` - User's fitness goal
- `experience` - User's experience level

**Returns:** Progression suggestion with color-coded indicator

### `generateExerciseInfo`
Generates comprehensive exercise information using AI.

**Parameters:**
- `exerciseName` - Name of the exercise

**Returns:** Exercise details including form, tips, and progression strategies

## Security Best Practices

✅ **Implemented:**
- Environment variables for API keys
- Firebase security rules (configure in Firebase Console)
- Error boundaries for graceful error handling
- Input validation on Cloud Functions

⚠️ **TODO:**
- Set up Firebase Security Rules for database access
- Implement rate limiting on Cloud Functions
- Add CORS configuration if needed
- Enable App Check for additional security

## Groq API Setup

1. Visit [console.groq.com](https://console.groq.com/)
2. Create a free account
3. Generate an API key
4. Add the key to `functions/.env` as `GROQ_API_KEY`

**Free Tier Limits:**
- Generous request limits
- Fast inference (often faster than other providers)
- Access to LLaMA 3.1 70B and other models

## Deployment

### Frontend (Firebase Hosting)
```bash
npm run build
firebase deploy --only hosting
```

### Backend (Cloud Functions)
```bash
firebase deploy --only functions
```

### Full Deployment
```bash
npm run build
firebase deploy
```

## Changelog

### v2.0.0 (Current)
- ✅ Migrated from Google Gemini to Groq AI
- ✅ Added environment variables for security
- ✅ Removed hardcoded credentials
- ✅ Added Error Boundary component
- ✅ Created Context API for state management
- ✅ Added logging utilities
- ✅ Improved code organization
- ✅ Added comprehensive documentation

### v1.0.0
- Initial release with Gemini AI integration
- Basic workout tracking features
- Firebase integration

## License

This project is licensed under the MIT License.

## Acknowledgments

- **Groq** for providing fast and free AI inference
- **Firebase** for backend infrastructure
- **Lucide** for beautiful icons
- **Tailwind CSS** for rapid UI development
