# 15 — Design System

## 1. Overview

The Design System establishes the visual identity, interface standards, reusable components, and interaction patterns of Clinic Schedule SaaS.

Its purpose is to ensure consistency across the platform while providing a professional, accessible, and intuitive user experience.

The design direction is inspired by modern SaaS products, emphasizing simplicity, clarity, organization, and usability.

The visual experience should communicate four main product principles:

- **Simple:** Interfaces must be easy to understand and navigate.
- **Fast:** Common actions should require minimal interaction.
- **Intelligent:** Information should be organized and presented clearly.
- **Secure:** The interface must communicate reliability and professionalism.

The Design System will serve as the visual foundation for all application modules.

## 2. Design Principles

The interface must follow these principles throughout the application.

### 2.1. Simplicity

- Avoid unnecessary visual elements.
- Prioritize essential information.
- Use consistent layouts and components.
- Avoid excessive colors and decorative effects.
- Keep navigation predictable.

### 2.2. Consistency

- Reuse components across different modules.
- Maintain consistent typography and spacing.
- Apply the same interaction patterns throughout the platform.
- Standardize buttons, forms, cards, and navigation elements.

### 2.3. Usability

- Make important actions easy to identify.
- Provide clear labels and feedback.
- Reduce unnecessary steps in common workflows.
- Organize information according to its relevance.
- Ensure that interface elements behave predictably.

### 2.4. Accessibility

- Provide sufficient color contrast.
- Support keyboard navigation.
- Use descriptive labels.
- Display visible focus indicators.
- Avoid communicating information through color alone.
- Support assistive technologies.

### 2.5. Scalability

- Build reusable components.
- Organize styles through design tokens.
- Support future application modules.
- Maintain consistent behavior as the platform grows.

## 3. Visual Identity

Clinic Schedule SaaS adopts a modern, minimalist, and professional visual identity.

The interface should balance a clean appearance with enough visual hierarchy to support information-dense administrative workflows.

### 3.1. Visual Direction

The visual direction follows these characteristics:

- Minimalist layouts.
- Clean surfaces.
- Soft backgrounds.
- Subtle borders.
- Rounded interface elements.
- Clear typography.
- Controlled use of accent colors.
- Consistent spacing.
- Discreet shadows.
- Professional dashboard layouts.

### 3.2. Inspiration

The interface takes inspiration from modern SaaS products such as:

- Linear — visual clarity and efficient navigation.
- Notion — structured information and simplicity.
- Stripe — professional interface patterns and consistent components.

These references guide the visual direction without requiring direct reproduction of their interfaces.

## 4. Color Palette

The primary color palette defines the platform's visual identity.

### 4.1. Primary Colors

| Token | Hexadecimal | Usage |
|---|---|---|
| Primary | `#1230AE` | Main brand color and primary actions. |
| Secondary | `#6C48C5` | Secondary actions and complementary highlights. |
| Accent | `#C68FE6` | Decorative accents and selected visual elements. |
| Background | `#FFF7F7` | Main application background. |

### 4.2. Color Applications

**Primary — #1230AE**

Used for:

- Primary buttons.
- Active navigation elements.
- Important links.
- Selected interface elements.
- Main brand references.

**Secondary — #6C48C5**

Used for:

- Secondary buttons.
- Complementary highlights.
- Selected badges.
- Supporting interface elements.

**Accent — #C68FE6**

Used for:

- Decorative details.
- Subtle highlights.
- Illustrative elements.
- Secondary visual indicators.

**Background — #FFF7F7**

Used for:

- Main application surfaces.
- Page backgrounds.
- Large content areas.

### 4.3. Neutral Colors

Neutral colors support readability and interface hierarchy.

| Token | Hexadecimal | Usage |
|---|---|---|
| Neutral 50 | `#FAFAFA` | Subtle backgrounds. |
| Neutral 100 | `#F4F4F5` | Secondary surfaces. |
| Neutral 200 | `#E4E4E7` | Borders and dividers. |
| Neutral 400 | `#A1A1AA` | Disabled elements and secondary indicators. |
| Neutral 500 | `#71717A` | Secondary text. |
| Neutral 700 | `#3F3F46` | Strong secondary text. |
| Neutral 900 | `#18181B` | Primary text. |
| White | `#FFFFFF` | Cards, forms, and elevated surfaces. |

### 4.4. Semantic Colors

Semantic colors communicate interface states and system feedback.

| Token | Color | Usage |
|---|---|---|
| Success | `#16A34A` | Successful operations. |
| Warning | `#D97706` | Warnings and pending attention. |
| Error | `#DC2626` | Errors and destructive actions. |
| Info | `#2563EB` | Informational messages. |

Semantic colors must be used consistently and should not replace the primary brand palette.

### 4.5. Color Usage Guidelines

- Use the primary color for important actions.
- Use secondary colors for complementary interactions.
- Reserve accent colors for limited visual emphasis.
- Use neutral colors to establish hierarchy.
- Use semantic colors only when communicating a meaningful state.
- Maintain sufficient contrast between text and backgrounds.
- Never rely exclusively on color to communicate status.

## 5. Typography

Typography must prioritize readability, hierarchy, and consistency.

### 5.1. Font Family

The recommended primary typeface is **Inter**.

Inter is suitable for modern digital interfaces and provides good readability across different screen sizes.

Recommended fallback stack:

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### 5.2. Font Weights

| Weight | Value | Usage |
|---|---|---|
| Regular | 400 | Body text and descriptions. |
| Medium | 500 | Labels and secondary emphasis. |
| Semibold | 600 | Section titles and buttons. |
| Bold | 700 | Main headings and important emphasis. |

### 5.3. Typography Scale

| Token | Size | Usage |
|---|---|---|
| Display | 36px | Main page headings when needed. |
| Heading 1 | 30px | Primary headings. |
| Heading 2 | 24px | Section headings. |
| Heading 3 | 20px | Subsection headings. |
| Heading 4 | 18px | Card and component headings. |
| Body Large | 16px | Important descriptions. |
| Body | 14px | Standard interface text. |
| Small | 12px | Supporting information. |
| Caption | 11px | Secondary metadata, when readable. |

### 5.4. Typography Guidelines

- Use consistent heading levels.
- Avoid excessive font weight variations.
- Maintain readable line heights.
- Use short labels whenever possible.
- Avoid very small text for essential information.
- Maintain clear visual hierarchy between titles, descriptions, and metadata.

## 6. Spacing System

The spacing system provides consistent distances between interface elements.

The platform uses a base spacing unit of 4px.

### 6.1. Spacing Scale

| Token | Value | Usage |
|---|---|---|
| 1 | 4px | Minimal spacing. |
| 2 | 8px | Small internal gaps. |
| 3 | 12px | Compact component spacing. |
| 4 | 16px | Standard spacing. |
| 5 | 20px | Medium spacing. |
| 6 | 24px | Section spacing. |
| 8 | 32px | Large spacing. |
| 10 | 40px | Major layout separation. |
| 12 | 48px | Large section separation. |
| 16 | 64px | Page-level spacing. |

### 6.2. Spacing Guidelines

- Use smaller spacing for related elements.
- Use larger spacing to separate different sections.
- Maintain consistent internal component padding.
- Avoid arbitrary spacing values when a design token is available.

## 7. Layout and Grid

The application layout must support different screen sizes while preserving usability.

### 7.1. Main Layout

The authenticated application uses a dashboard-oriented layout.

Its main structural elements are:

- Sidebar navigation.
- Header.
- Main content area.
- Page title and actions.
- Content sections.
- Cards and data visualizations.

### 7.2. Sidebar

The sidebar provides access to the main application modules.

It should include:

- Clinic branding.
- Navigation links.
- Active navigation indicator.
- User account access.
- Optional collapse functionality.

The sidebar must adapt to smaller screens through a mobile navigation pattern.

### 7.3. Header

The header provides contextual and account-related information.

Possible elements include:

- Page context.
- Search functionality.
- Notifications.
- User profile.
- Account menu.

### 7.4. Main Content

The main content area must:

- Use consistent page margins.
- Maintain clear content hierarchy.
- Support different content widths.
- Avoid excessive horizontal scrolling.
- Adapt to available screen space.

### 7.5. Responsive Breakpoints

Recommended breakpoints:

| Breakpoint | Width | Target |
|---|---|---|
| Mobile | 320px–639px | Smartphones. |
| Tablet | 640px–1023px | Tablets and compact screens. |
| Desktop | 1024px–1279px | Standard desktop screens. |
| Large Desktop | 1280px+ | Large monitors. |

Responsive layouts should be tested using actual content and common device sizes.

## 8. Border Radius and Shadows

Rounded corners and shadows provide visual organization without making the interface excessively decorative.

### 8.1. Border Radius

| Token | Value | Usage |
|---|---|---|
| Small | 4px | Compact elements. |
| Medium | 8px | Inputs and buttons. |
| Large | 12px | Cards and containers. |
| Extra Large | 16px | Dialogs and large surfaces. |
| Full | 9999px | Pills and circular elements. |

### 8.2. Shadows

Recommended shadow levels:

- Small: subtle elevation for interactive elements.
- Medium: cards and dropdowns.
- Large: dialogs and floating panels.

Shadows should be subtle and consistent.

Borders should generally be preferred over strong shadows for separating standard interface sections.

## 9. Iconography

Icons help users identify actions and navigate the application.

### 9.1. Icon Library

The recommended icon library is **Lucide React**.

Lucide provides consistent line-based icons suitable for modern SaaS interfaces.

### 9.2. Icon Guidelines

- Use consistent stroke width.
- Prefer simple and recognizable icons.
- Avoid mixing unrelated icon styles.
- Use tooltips when an icon's meaning is not immediately clear.
- Provide accessible labels for icon-only buttons.
- Maintain consistent icon sizing.

### 9.3. Recommended Sizes

| Size | Value | Usage |
|---|---|---|
| Small | 16px | Compact controls. |
| Medium | 20px | Standard interface icons. |
| Large | 24px | Navigation and prominent actions. |
| Extra Large | 32px | Empty states and illustrations. |

## 10. Buttons

Buttons represent actions and must communicate their importance through visual hierarchy.

### 10.1. Button Variants

| Variant | Description |
|---|---|
| Primary | Main action of a page or section. |
| Secondary | Supporting action. |
| Outline | Action with a bordered appearance. |
| Ghost | Minimal action without a prominent background. |
| Destructive | Dangerous or irreversible action. |
| Link | Navigation or inline action. |

### 10.2. Button Sizes

| Size | Height | Usage |
|---|---|---|
| Small | 32px | Compact actions. |
| Medium | 40px | Standard actions. |
| Large | 48px | Prominent actions. |

### 10.3. Button States

Every button must support the appropriate interaction states:

- Default.
- Hover.
- Focus.
- Active.
- Disabled.
- Loading.

### 10.4. Button Guidelines

- Use clear action labels.
- Prioritize one primary action per context.
- Avoid ambiguous labels.
- Display loading feedback during asynchronous operations.
- Prevent repeated submissions when an operation is processing.
- Use destructive styling for potentially harmful actions.

## 11. Form Elements

Forms are essential for patient registration, appointments, user management, and clinic configuration.

All form components must follow consistent visual and interaction standards.

### 11.1. Input Fields

Standard input elements should include:

- Visible label.
- Input area.
- Optional placeholder.
- Optional helper text.
- Validation feedback.
- Required-field indication when applicable.

### 11.2. Input Types

The Design System should support:

- Text.
- Email.
- Password.
- Number.
- Telephone.
- Date.
- Time.
- Search.
- Textarea.

### 11.3. Additional Form Components

The system should provide reusable components for:

- Select.
- Checkbox.
- Radio button.
- Switch.
- Date picker.
- Time picker.
- File upload.
- Searchable dropdown.

### 11.4. Form States

Form elements must support:

- Default.
- Focus.
- Filled.
- Disabled.
- Read-only.
- Error.
- Success.

### 11.5. Validation

- Validate required fields.
- Display clear error messages.
- Preserve user input when possible.
- Provide feedback near the relevant field.
- Validate data on the backend even when frontend validation exists.
- Avoid displaying technical error messages directly to users.

## 12. Cards and Containers

Cards organize related information into visually separated sections.

### 12.1. Card Types

The platform should support:

- Standard cards.
- Statistic cards.
- Patient cards.
- Appointment cards.
- Financial summary cards.
- Informational cards.

### 12.2. Card Structure

A card may contain:

- Title.
- Description.
- Main content.
- Metadata.
- Actions.
- Status indicator.

### 12.3. Card Guidelines

- Use consistent padding.
- Avoid unnecessary decoration.
- Keep related information grouped.
- Use clear headings.
- Avoid excessive content density.
- Maintain consistent alignment.

## 13. Tables and Data Display

Tables are used to present structured information such as patients, appointments, and users.

### 13.1. Table Elements

Standard tables should support:

- Column headings.
- Row data.
- Sorting.
- Pagination.
- Search and filtering.
- Row actions.
- Empty states.
- Loading states.

### 13.2. Table Guidelines

- Use readable column labels.
- Maintain consistent row spacing.
- Highlight important information.
- Avoid excessive columns.
- Provide responsive alternatives for smaller screens.
- Keep actions accessible.

### 13.3. Status Indicators

Status indicators should use consistent semantic colors and labels.

Examples:

- Active.
- Inactive.
- Pending.
- Confirmed.
- Completed.
- Cancelled.

Status must always be communicated through text or an accessible label, not color alone.

## 14. Feedback Components

The interface must provide clear feedback after user interactions.

### 14.1. Alerts

Alerts display relevant information within the page.

Types:

- Success.
- Warning.
- Error.
- Information.

### 14.2. Toast Notifications

Toast notifications provide temporary feedback for actions such as:

- Successful registration.
- Successful updates.
- Deleted records.
- Failed requests.
- Changes saved.

Toasts should be concise and should not interrupt important workflows.

### 14.3. Modal Dialogs

Modals are used for focused interactions.

Examples:

- Confirm deletion.
- Register a patient.
- Edit appointment information.
- Confirm important changes.

Modals should:

- Have clear titles.
- Provide understandable actions.
- Support keyboard navigation.
- Allow dismissal when appropriate.
- Prevent accidental destructive operations.

### 14.4. Tooltips

Tooltips provide additional context for interface elements.

They should be used sparingly and must not contain information essential to completing an action.

## 15. Loading and Empty States

The platform must communicate what is happening when data is being loaded or when no information is available.

### 15.1. Loading States

Recommended loading components:

- Skeleton screens.
- Loading indicators.
- Button loading states.
- Table placeholders.

Loading indicators should provide feedback without unnecessarily blocking the entire interface.

### 15.2. Empty States

Empty states appear when a module has no registered information.

Examples:

- No patients registered.
- No appointments scheduled.
- No users found.
- No financial records available.

Each empty state should include:

- A clear explanation.
- A relevant visual or icon when appropriate.
- A primary action when the user has permission to perform it.

## 16. Navigation Components

Navigation must remain consistent across the platform.

### 16.1. Main Navigation

The primary navigation should provide access to:

- Dashboard.
- Patients.
- Appointments.
- Users.
- Financial.
- Settings.

### 16.2. Navigation States

Navigation elements must support:

- Default.
- Hover.
- Active.
- Focus.
- Disabled.

### 16.3. Breadcrumbs

Breadcrumbs may be used to show the user's current location within deeper navigation structures.

### 16.4. Navigation Permissions

Navigation items must only be displayed when the authenticated user has the required permission.

The backend must still enforce authorization independently.

## 17. Application Modules

The Design System must support all primary modules of Clinic Schedule SaaS.

### 17.1. Authentication

Screens:

- Login.
- Registration.
- Forgot Password.
- Reset Password.

Components:

- Input fields.
- Password visibility control.
- Buttons.
- Form validation.
- Feedback messages.

### 17.2. Dashboard

Components:

- Statistic cards.
- Appointment summaries.
- Financial indicators.
- Activity lists.
- Charts.
- Quick actions.

### 17.3. Patients

Components:

- Patient table.
- Search and filters.
- Registration forms.
- Patient details.
- Status indicators.
- Action menus.

### 17.4. Appointments

Components:

- Calendar.
- Appointment cards.
- Date and time selectors.
- Appointment forms.
- Status indicators.
- Scheduling filters.

### 17.5. Users

Components:

- User table.
- User registration form.
- Role selector.
- Permission indicators.
- Account status.
- User details.

### 17.6. Financial

Components:

- Financial summary cards.
- Transaction lists.
- Revenue indicators.
- Expense indicators.
- Date filters.
- Financial forms.

### 17.7. Settings

Components:

- Clinic profile.
- Account settings.
- User preferences.
- Configuration forms.
- Security settings.

## 18. Accessibility Standards

Accessibility must be considered throughout the design and implementation process.

The platform should follow WCAG 2.2 AA as its accessibility target.

### 18.1. Color Contrast

- Normal text should target a contrast ratio of at least 4.5:1.
- Large text should target at least 3:1.
- Important interface components should maintain sufficient contrast.

### 18.2. Keyboard Navigation

- All interactive elements must be keyboard accessible.
- Focus indicators must remain visible.
- Navigation order must be logical.
- Dialogs must manage focus appropriately.
- Keyboard users must be able to complete forms.

### 18.3. Semantic HTML

Use appropriate HTML elements:

- `header`
- `nav`
- `main`
- `section`
- `button`
- `form`
- `label`
- `input`
- `table`

### 18.4. Screen Reader Support

- Provide accessible labels.
- Associate form labels with their inputs.
- Describe meaningful icons.
- Announce important feedback messages.
- Use ARIA attributes only when necessary.

### 18.5. Interaction Accessibility

- Do not rely exclusively on hover.
- Avoid very small interactive targets.
- Provide clear error descriptions.
- Ensure that status information is understandable without color.
- Respect reduced-motion preferences.

## 19. Responsive Design

The platform must provide a consistent experience across desktop, tablet, and mobile devices.

### 19.1. Desktop

Desktop is the primary target for administrative workflows.

The interface should prioritize:

- Persistent sidebar navigation.
- Dashboard layouts.
- Data tables.
- Multi-column forms.
- Calendar visualization.

### 19.2. Tablet

Tablet layouts should:

- Adapt sidebar behavior.
- Reduce unnecessary columns.
- Maintain readable forms.
- Preserve important actions.
- Support touch interactions.

### 19.3. Mobile

Mobile layouts should:

- Use compact navigation.
- Present information vertically.
- Replace wide tables with responsive alternatives.
- Maintain accessible touch targets.
- Prioritize essential actions.
- Avoid horizontal scrolling whenever possible.

## 20. Design Tokens and Implementation

Design tokens centralize visual values and make the interface easier to maintain.

The initial implementation should use CSS variables and Tailwind CSS theme configuration.

### 20.1. CSS Variables

Example:

```css
:root {
  /* Brand */
  --color-primary: #1230AE;
  --color-secondary: #6C48C5;
  --color-accent: #C68FE6;

  /* Background */
  --color-background: #FFF7F7;
  --color-surface: #FFFFFF;

  /* Neutral */
  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F4F4F5;
  --color-neutral-200: #E4E4E7;
  --color-neutral-400: #A1A1AA;
  --color-neutral-500: #71717A;
  --color-neutral-700: #3F3F46;
  --color-neutral-900: #18181B;

  /* Semantic */
  --color-success: #16A34A;
  --color-warning: #D97706;
  --color-error: #DC2626;
  --color-info: #2563EB;

  /* Typography */
  --font-family-base: Inter, system-ui, sans-serif;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
}
```

### 20.2. Component Architecture

Reusable interface components should be organized into a shared component library.

Recommended structure:

```text
frontend/
└── src/
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   ├── Select.tsx
    │   │   ├── Checkbox.tsx
    │   │   ├── Badge.tsx
    │   │   ├── Card.tsx
    │   │   ├── Modal.tsx
    │   │   ├── Table.tsx
    │   │   ├── Alert.tsx
    │   │   └── Skeleton.tsx
    │   │
    │   ├── layout/
    │   │   ├── Sidebar.tsx
    │   │   ├── Header.tsx
    │   │   └── MainLayout.tsx
    │   │
    │   └── forms/
    │       ├── FormField.tsx
    │       └── FormError.tsx
    │
    ├── styles/
    │   └── globals.css
    │
    └── ...
```

This structure is a recommendation and may be adapted to the final Next.js architecture.

### 20.3. Component Guidelines

Every reusable component should:

- Have a clear responsibility.
- Accept configurable properties.
- Support relevant interaction states.
- Follow the established design tokens.
- Avoid unnecessary duplication.
- Be accessible.
- Be documented when its behavior is not self-explanatory.

## 21. Design Tools

The design and implementation workflow may use the following tools:

| Tool | Purpose |
|---|---|
| Figma | Interface design and prototyping. |
| Next.js | Frontend application framework. |
| React | Component architecture. |
| TypeScript | Type safety. |
| Tailwind CSS | Utility-first styling. |
| Lucide React | Interface icons. |
| GitHub | Version control and collaboration. |

Figma should be used to define the visual system and prototype the main application screens before or alongside implementation.

## 22. Design System Validation

The Design System must be validated throughout development.

Validation criteria include:

- Consistent use of brand colors.
- Correct typography hierarchy.
- Consistent spacing.
- Reusable components.
- Responsive behavior.
- Accessible contrast.
- Visible interaction states.
- Consistent form validation.
- Clear loading and empty states.
- Consistent navigation patterns.

Components should be reviewed in isolation and within their actual application modules.

## 23. Implementation Status

The Design System is being developed incrementally.

| Feature | Status |
|---|---|
| Visual identity definition | Defined. |
| Primary color palette | Defined. |
| Neutral color palette | Defined. |
| Semantic colors | Defined. |
| Typography standards | Defined. |
| Spacing scale | Defined. |
| Layout guidelines | Defined. |
| Button specifications | Defined. |
| Form specifications | Defined. |
| Card and table guidelines | Defined. |
| Navigation guidelines | Defined. |
| Accessibility guidelines | Defined. |
| Responsive breakpoints | Defined. |
| Figma component library | Planned. |
| Frontend design tokens | Planned. |
| Reusable React components | Planned. |
| Component documentation | Planned. |
| Visual regression testing | Future improvement. |

A specification being defined does not mean its corresponding component has already been implemented in the frontend.

## 24. Future Improvements

Future improvements may include:

- Dark mode.
- Additional theme configurations.
- Advanced data visualization standards.
- Expanded calendar components.
- More detailed accessibility testing.
- Component documentation and interactive examples.
- Visual regression testing.
- Figma-to-code workflow improvements.
- Expanded mobile interaction patterns.

## 25. Conclusion

The Design System establishes the visual and interaction foundation of Clinic Schedule SaaS.

By defining colors, typography, spacing, reusable components, layouts, and accessibility standards, the platform can maintain a consistent experience across all modules.

The system must evolve alongside the application while preserving its core principles: simplicity, speed, intelligence, security, and usability.

---

**Document:** 15-design-system.md  
**Project:** Clinic Schedule SaaS  
**Category:** UI/UX Documentation  
**Status:** Active Development