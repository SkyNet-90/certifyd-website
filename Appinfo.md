# 🛡️ Certifyd

> Secure IT Certification Management for Professionals

[![React Native](https://img.shields.io/badge/React%20Native-0.72+-blue.svg)](https://reactnative.dev/)
[![Expo SDK](https://img.shields.io/badge/Expo%20SDK-53+-black.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Private-red.svg)](./LICENSE)

**Certifyd** is a cross-platform mobile application that helps IT professionals securely track, manage, and renew their certifications with enterprise-grade security.

## ✨ Features

### 🔐 Security First
- **Biometric Authentication** - TouchID, FaceID, Fingerprint
- **Forgot Password Recovery** - Security questions and backup PIN options
- **End-to-End Encryption** - All data encrypted locally
- **Secure Storage** - iOS Keychain & Android Keystore
- **Auto-lock Protection** - Configurable timeout
- **Account Recovery** - Multiple recovery methods with attempt limiting

### 📋 Certification Management
- **Multi-Provider Support** - AWS, Microsoft, Cisco, CompTIA, etc.
- **Expiration Tracking** - Smart notifications and reminders
- **Document Attachments** - Secure file storage
- **Professional PDF Export** - Generate polished portfolios

### 🔔 Smart Notifications
- **Custom Reminders** - Flexible scheduling
- **Snooze Functionality** - Defer notifications intelligently  
- **Priority Levels** - Urgent, important, standard
- **Notification Inbox** - Centralized management

### 📱 Professional Tools
- **PDF Portfolio Generation** - Job-ready certification summaries
- **Calendar Integration** - Sync with device calendar
- **Export & Sharing** - Professional document generation
- **Profile Management** - Professional contact information

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator or Android Emulator

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/certifyd.git
cd certifyd

# Install dependencies
npm install

# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## 📱 Platform Support

| Platform | Status | Notes |
|----------|---------|-------|
| **iOS** | ✅ Full Support | iOS 13.0+ |
| **Android** | ✅ Full Support | API Level 21+ |
| **Web** | 🔄 Limited | Development only |

## 🏗️ Tech Stack

- **Framework**: React Native 0.72+
- **Platform**: Expo SDK 53
- **Language**: JavaScript/TypeScript
- **State Management**: React Hooks + Context
- **Security**: expo-local-authentication, expo-secure-store, expo-crypto
- **Notifications**: expo-notifications
- **PDF Generation**: expo-print
- **File System**: expo-file-system, expo-document-picker

## 📁 Project Structure

```
certifyd/
├── 📱 App.js                    # Main application component
├── 🔐 LoginScreen.js            # Biometric/PIN authentication
├── ⚙️  SettingsScreen.js         # App configuration & preferences
├── 🔔 NotificationService.js    # Smart notification system
├── 📄 PortfolioGenerator.js     # Professional PDF export
├── 👤 ProfileSetup.js           # User profile management
├── 📋 Components/               # Reusable UI components
│   ├── NotificationInbox.js
│   ├── NotificationPreferences.js
│   └── NotificationsScreen.js
├── 📚 docs/                     # Project documentation
└── 🔧 Configuration files
```

## 🛠️ Development

### Scripts
```bash
npm start          # Start Expo development server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator  
npm run web        # Run in web browser
npm run lint       # Run ESLint
npm run type-check # TypeScript type checking
```

### Key Development Features
- **Hot Reload** - Instant updates during development
- **TypeScript Support** - Full type safety
- **ESLint Configuration** - Code quality enforcement
- **Expo Dev Tools** - Comprehensive debugging

## 🔒 Security Features

### Data Protection
- All certification data encrypted with AES-256
- Biometric authentication with secure fallback
- Auto-lock after configurable timeout
- Secure key storage in device keychain/keystore

### Privacy
- No external data transmission
- Local-only data storage
- No analytics or tracking
- User controls all data sharing

## 📸 Screenshots

*Screenshots will be added when available*

## 🤝 Contributing

This is a private repository. Contributing guidelines will be provided to authorized contributors.

## 📄 License

This project is privately licensed. All rights reserved.

## 🆘 Support

For support and questions:
- 📧 Email: [your-email@domain.com]
- 📱 Issues: Create an issue in this repository

## 🗺️ Roadmap

- [ ] **Enhanced Security**: Certificate pinning, advanced encryption
- [ ] **Cloud Sync**: Optional encrypted cloud backup
- [ ] **Team Features**: Organization/team certification tracking  
- [ ] **Advanced Analytics**: Certification insights and trends
- [ ] **API Integration**: Direct provider verification
- [ ] **Web Dashboard**: Companion web application

---

**Built with ❤️ for IT Professionals**

*Certifyd helps you stay certified, stay secure, and stay ahead in your IT career.*
