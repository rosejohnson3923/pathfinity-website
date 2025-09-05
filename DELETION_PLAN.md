# Pathfinity Website - Deletion Plan

## Goal
Separate marketing website from learning application by systematically removing non-marketing components.

## Categories for Deletion

### 1. CONFIDENT - Safe to Delete (Learning Application Components)
These are clearly application-specific and not needed for marketing website:

#### Folders in /src/
- **agents/** - All AI agent implementations (companion, mentor, guide, etc.)
- **ai-engine/** - Core AI processing engine
- **analytics/** - User analytics tracking
- **archive/** - Old code archives
- **components/adaptive/** - Adaptive learning components  
- **components/admin/** - Admin panel components
- **components/age-progressive/** - Age-based learning components
- **components/ai-characters/** - AI character implementations
- **components/ai-containers/** - AI container components
- **components/analytics/** - Analytics dashboard components
- **components/bento/** - Bento grid layouts for app
- **components/career/** - Career path components
- **components/dashboard/** - User dashboard components
- **components/finn/** - Finn character components
- **components/learning/** - Learning module components
- **components/progress/** - Progress tracking components
- **components/quiz/** - Quiz components
- **components/skills/** - Skills tracking components
- **components/tracking/** - User tracking components
- **contexts/** - React contexts for state management
- **data/** - Application data files
- **db/** - Database configurations
- **hooks/** - Custom React hooks for app functionality
- **models/** - Data models
- **monitoring/** - Application monitoring
- **rules-engine/** - Business rules engine
- **screens/** - Application screens
- **scripts/** - Build/deployment scripts
- **services/ai-prompts/** - AI prompt templates
- **services/content/** - Content generation services
- **services/monitoring/** - Monitoring services
- **services/prompts/** - Prompt management
- **state/** - State management
- **testing/** - All test files
- **tests/** - Test configurations

#### Files in /src/pages/
- AdminDemoContentGenerator.tsx
- AdminImageGenerator.tsx
- LessonDetailPage.tsx
- SubjectDetailPage.tsx
- SubscriptionPage.tsx
- TeacherAnalyticsPage.tsx

### 2. CAUTIOUS - Likely Safe to Delete (But Verify)
These might have marketing dependencies:

#### Folders in /src/
- **api/** - API endpoints (check if marketing forms use any)
- **components/auth/** - Authentication components (might be needed for demo login)
- **components/shared/** - Shared components (some might be used by marketing)
- **services/** - Backend services (except those listed above)
- **types/** - TypeScript types (some might be needed)
- **utils/** - Utility functions (some might be used by marketing)

#### Files in /src/
- vite-env.d.ts (might be needed for build)

### 3. NEEDS ANALYSIS - Requires Careful Review
These likely contain both marketing and app code:

#### Critical Files
- **App.tsx** - Main app file (contains routes for both marketing and app)
- **main.tsx** - Entry point (has ProtectedApp wrapper)
- **index.css** - Global styles

#### Folders Needing Review
- **assets/** - Images/assets (need to identify marketing vs app assets)
- **components/animations/** - Animations (some used in marketing)
- **components/navigation/** - Navigation components (used by both)
- **components/ui/** - UI components (used by both)
- **config/** - Configuration files
- **lib/** - Library code (might have shared utilities)
- **security/** - Security components (ProtectedApp, licensing)
- **styles/** - Stylesheets (mix of marketing and app styles)

### 4. MUST KEEP - Marketing Website Components
These are essential for the marketing website:

#### Folders
- **pages/marketing/** - All marketing pages
- **components/marketing/** - Marketing-specific components (if exists)
- **public/** - Public assets

#### Marketing Pages in /src/pages/marketing/
- Homepage.tsx
- HowItWorks.tsx
- AboutUs.tsx
- Contact.tsx
- ForStudents.tsx
- ForParents.tsx
- ForTeachers.tsx
- ForAdministrators.tsx
- ESAInfo.tsx
- ESACalculator.tsx
- DemoPage.tsx
- JoinWaitlist.tsx
- PrivacyPolicy.tsx
- ResearchResults.tsx

## Deletion Process

### Phase 1: Delete "Confident" Category
1. Delete all folders/files listed in CONFIDENT section
2. Run `npm run build`
3. Fix any build errors
4. Test marketing pages still work

### Phase 2: Delete "Cautious" Category
1. Review each item in CAUTIOUS section
2. Check for dependencies in marketing pages
3. Delete if no dependencies found
4. Run `npm run build` after each deletion
5. Test functionality

### Phase 3: Analyze "Needs Analysis" Items
1. For App.tsx: Extract only marketing routes
2. For main.tsx: Remove ProtectedApp wrapper
3. For styles: Keep only marketing-related styles
4. For each folder: Identify and keep only marketing-used items
5. Test thoroughly after each change

## Expected Outcome
- Clean marketing website without learning application code
- All marketing pages functional
- Significantly reduced codebase size
- Clear separation of concerns