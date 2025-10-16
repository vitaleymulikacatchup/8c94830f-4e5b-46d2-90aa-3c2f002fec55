export default function App() {
  return (
    <body className="__className_92e931 __variable_00e045 __variable_315a98 antialiased font-medium dark" style={{
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    marginTop: '1.25em',
    marginBottom: '1.25em'
  }}>
      <div className="app-content">
        To convert the HTML snippet into JSX, you'll need to adapt the attributes to use camelCase and make sure to use double braces for inline styles. Here's the conversion:

<section 
  aria-label="Notifications alt+T" 
  tabIndex="-1" 
  aria-live="polite" 
  aria-relevant="additions text" 
  aria-atomic="false">
</section>
### Key Changes:

- **`tabindex`** is changed to **`tabIndex`**.
- All other attributes are kept the same as they are already valid camelCase or string values.

Feel free to reach out if you have any more questions about JSX or other related topics!
      </div>
    </body>
  );
}