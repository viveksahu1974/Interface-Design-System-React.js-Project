# Live Demonstration and Viva Guide

## 7-Minute Demonstration Flow

**0:00–0:45 — Introduce the problem.**

"My project title is *Design and Development of a Responsive Interface Design System Using React.js*. When websites are built with independent styles and repeated UI code, their visual appearance becomes inconsistent. My project demonstrates a shared library with reusable interfaces and tokens."

**0:45–1:45 — Explore the component library.**

Click **Components** → click **Forms** → demonstrate input validation, checkbox, switch and select. Open the modal from **Overlay**. Press Escape to close it. Explain use of React `useState`.

**1:45–3:00 — Interactive playground.**

Click **Playground** → change Button label to "Submit project", change Filled → Outlined, change size Small → Large, switch to mobile preview, and click **Copy code**. Explain JSX and props/state.

**3:00–4:00 — Design tokens.**

Click **Design Tokens** → select green or blue, switch corner style, export token JSON and copy CSS. Explain CSS variables and consistency.

**4:00–5:30 — Page templates.**

Click **Templates** → show the digital studio homepage and validate an email locally → view the Dashboard template and switch chart range → view Login and test invalid email/password. Point out no backend/authentication was claimed.

**5:30–6:15 — Responsive design and accessibility.**

Switch desktop/mobile and show the rearranged layout. Explain CSS media queries, labels and visible focus. Open the Accessibility section.

**6:15–7:00 — Show original code.**

In VS Code, open `src/App.jsx`, `src/components/Previews.jsx`, `src/components/Templates.jsx`, and `src/data/catalog.js`. Show your actual changed files/commits and discuss a real bug you debugged. Close with the project's limitations and future scope.

## Questions and Simple Answers

**Q1. What is a design system?**  
A design system is a set of reusable UI components, standards and design rules used to keep products consistent.

**Q2. Why did you use React?**  
React helps break complex interfaces into reusable components and update the screen efficiently when state changes.

**Q3. What are props and state?**  
Props are values passed to components. State is information a component remembers and updates during interaction.

**Q4. What is JSX?**  
JSX is a JavaScript syntax extension used to describe UI elements that React renders.

**Q5. What is responsive design?**  
Responsive design allows the layout to adapt to different device screen sizes using techniques like media queries and flexible layouts.

**Q6. What are design tokens?**  
Reusable design values like primary color, corner radius and spacing that are applied consistently across components.

**Q7. How does light/dark mode work?**  
React state selects a theme class, CSS variables control the colors, and localStorage remembers the preference.

**Q8. What is a React Hook?**  
A Hook is a React function like `useState` or `useEffect` used for component state and synchronizing with external systems.

**Q9. Why is `useEffect` used here?**  
To persist display preferences whenever the theme, color, radius or density changes.

**Q10. What is Vite?**  
Vite provides a development server and produces optimized static assets for deployment.

**Q11. How does component search work?**  
The React app uses the current search string and category to filter its component metadata array.

**Q12. Is there a database?**  
No. The project is a frontend demonstration. Theme preferences are saved in the browser and demo forms do not send data.

**Q13. How did you test the project?**  
Describe the tests you actually ran: clicking interactions, form validation, tablet/mobile resizing, keyboard checks, theme persistence and production build.

**Q14. What makes the project different from a static website?**  
It contains reusable interface patterns, configurable design tokens, live code previews, multiple responsive example pages and interactive feedback.

**Q15. What are the limitations?**  
There is no real authentication service, no live backend analytics, and accessibility requires further auditing for production usage.

**Q16. How is it related to your internship letter?**  
It demonstrates frontend development, responsive design, React and JavaScript, UI/UX implementation, debugging, testing and documentation—the technology areas named in the offer letter.

**Q17. What is localStorage?**  
A browser storage API that saves small pieces of data as key/value pairs, surviving refreshes on the same browser.

**Q18. What is the difference between CSS Grid and Flexbox?**  
Grid is well-suited to two-dimensional page layout; Flexbox is great for arranging items along one axis.

**Q19. How is your form validated?**  
A React event handler checks email format and password length. It provides local feedback but performs no real login.

**Q20. What would you add next?**  
Unit tests, TypeScript, a published component package, improved accessibility testing and optional backend services.

## Original Contribution Checklist

Explain the parts you personally wrote or modified. Do not claim to have independently implemented third-party icon packages or starter tooling. Demonstrate at least one practical customization in front of faculty and describe the change.

## Evidence to Keep

- Screenshots on your own laptop in VS Code.
- Console and build output with actual date.
- Your Git commit history, if you use Git.
- Authenticated internship log/supervisor remarks, when available.
